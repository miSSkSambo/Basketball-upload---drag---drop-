import React, { useRef, useState } from 'react';
import { FileText, CheckCircle2, Upload, Volume2, MousePointer2 } from 'lucide-react';
const fmt = n => n < 1024 ? `${n} B` : n < 1048576 ? `${(n/1024).toFixed(1)} KB` : `${(n/1048576).toFixed(1)} MB`;
export default function App() {
  const input = useRef(null);
  const [pending,setPending] = useState([]), [uploaded,setUploaded] = useState([]);
  const [hover,setHover] = useState(false), [shooting,setShooting] = useState(false), [progress,setProgress] = useState(0);
  const [message,setMessage] = useState('Choose a PDF, then drag it into the basketball net.');
  function choose(list) {
    const files = Array.from(list || []); if (!files.length) return;
    setPending(old => [...old,...files.map(file => ({id:`${file.name}-${file.size}-${Date.now()}-${Math.random()}`,name:file.name,size:file.size,type:file.type}))]);
    setMessage('Your PDF is ready. Drag it into the hoop!');
  }
  function upload(items) {
    if (!items.length || shooting) return;
    setHover(false); setShooting(true); setProgress(0); setMessage('Nice shot! Uploading your file…');
    const start=Date.now(), duration=1300;
    function tick(){const elapsed=Date.now()-start;setProgress(Math.min(95,Math.round(elapsed/duration*95)));if(elapsed<duration)requestAnimationFrame(tick)}
    requestAnimationFrame(tick);
    window.setTimeout(()=>{setUploaded(old=>[...items,...old]);const ids=new Set(items.map(x=>x.id));setPending(old=>old.filter(x=>!ids.has(x.id)));setProgress(100);setShooting(false);setMessage('Swish! File uploaded successfully.');},duration);
  }
  function drop(event){event.preventDefault();event.stopPropagation();setHover(false);const id=event.dataTransfer.getData('application/x-basketball-file');if(id){const item=pending.find(x=>x.id===id);if(item)upload([item]);return;}const files=Array.from(event.dataTransfer.files||[]).map(file=>({id:`${file.name}-${file.size}-${Date.now()}-${Math.random()}`,name:file.name,size:file.size,type:file.type}));if(files.length)upload(files)}
  const latest=uploaded[0];
  return <main className="page-shell"><div className="ambient ambient-one"/><div className="ambient ambient-two"/><section className="upload-card">
    <header className="card-header"><div><div className="eyebrow"><span className="live-dot"/> FILE CENTER</div><h1>Upload files</h1><p>Pick up your file and shoot it into the basket.</p></div><div className="header-actions"><button className="sound-button" title="Sound settings" aria-label="Sound settings"><Volume2 size={17}/></button><span className="upload-count">Uploaded <strong>{uploaded.length}</strong></span></div></header>
    <div className={`drop-zone ${hover?'is-dragging':''}`} onDragOver={e=>{e.preventDefault();e.dataTransfer.dropEffect='move';setHover(true)}} onDragLeave={e=>{if(!e.currentTarget.contains(e.relatedTarget))setHover(false)}} onDrop={drop}>
      <input ref={input} type="file" accept=".pdf,application/pdf" multiple hidden onChange={e=>{choose(e.target.files);e.target.value=''}}/>
      {latest&&!shooting?<div className="status-card"><div className="file-badge">PDF</div><div className="status-main"><div className="status-topline"><strong title={latest.name}>{latest.name}</strong><span className="done-label">Done</span></div><div className="progress-track"><div className="progress-fill complete"/></div><div className="status-bottomline"><span><CheckCircle2 size={13}/> File uploaded successfully</span><small>{fmt(latest.size)}</small></div></div></div>:shooting?<div className="status-card"><div className="file-badge">PDF</div><div className="status-main"><div className="status-topline"><strong>Uploading after your shot…</strong><span>{progress}%</span></div><div className="progress-track"><div className="progress-fill" style={{width:`${progress}%`}}/></div><div className="status-bottomline"><span>Great shot — just a moment</span></div></div></div>:<div className="empty-status"><div className="empty-icon"><Upload size={20}/></div><strong>{hover?'Release to score!':'Drop the file into the hoop'}</strong><span>{hover?'Let go to upload your file':'The file uploads when it lands in the net'}</span></div>}
      <div className="court"><div className="court-glow"/><div className="backboard"><div className="backboard-square"/></div><div className={`basket ${hover?'basket-target':''} ${shooting?'basket-active':''}`}><div className="rim"/><div className="net"><i/><i/><i/><i/><i/></div></div>{shooting&&<div className="basketball" aria-hidden="true">🏀</div>}<div className="court-line"/></div><div className="drop-overlay"><Upload size={22}/><strong>Release to upload</strong></div>
    </div>
    <div className="lower-area"><button className="choose-file-button" onClick={()=>input.current?.click()}><span className="choose-icon">＋</span><span>Choose PDF</span></button><div className="pending-files">{pending.map(item=><div key={item.id} className="file-tile" draggable={!shooting} onDragStart={e=>{e.dataTransfer.setData('application/x-basketball-file',item.id);e.dataTransfer.effectAllowed='move'}} title={`Drag ${item.name} into the basketball net`}><div className="paper-fold"/><FileText size={25} strokeWidth={1.6}/><span>PDF</span><small>{item.name}</small></div>)}{shooting&&<div className="flying-file" aria-hidden="true"><FileText size={22}/><span>PDF</span></div>}</div><p className="instruction">{shooting?message:pending.length?'Drag a PDF from here and drop it over the basketball net':message}</p></div>
    {uploaded.length>0&&<section className="file-list"><div className="list-heading"><h2>Recent uploads</h2><span>{uploaded.length} file{uploaded.length===1?'':'s'}</span></div>{uploaded.map(file=><div className="file-row" key={file.id}><div className="row-file-icon"><FileText size={18}/></div><div className="row-file-details"><strong>{file.name}</strong><small>{fmt(file.size)}</small></div><CheckCircle2 className="row-check" size={18}/></div>)}</section>}
    <footer className="card-footer"><span><span className="footer-dot"/> Ready to play</span><span><MousePointer2 size={11}/> DRAG · DROP · SWISH</span></footer></section><p className="page-note">Choose a PDF, drag it to the hoop, and score your upload.</p></main>;
}
