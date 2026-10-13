# 🏀 Basketball Upload Animation

A fun, interactive file-upload experience where users can pick up a PDF document, drag it across the screen, and drop it into a basketball hoop to trigger an upload animation.

This project combines a modern upload dashboard with basketball-inspired animations to make the traditional file-upload process more engaging.

## ✨ Features

- 🏀 **Interactive Basketball Hoop** — A basketball hoop and net that respond visually when a file is dragged over them.
- 📄 **Drag-and-Drop Upload** — Pick a PDF document and drag its file tile into the basketball net.
- 📁 **PDF File Selection** — Select PDF files directly from your computer.
- 🎯 **Basketball Upload Animation** — Watch the document fly toward the hoop when it is dropped.
- 📊 **Upload Progress Indicator** — A progress bar displays the simulated upload process.
- ✅ **Upload Success Feedback** — Displays a success message after the animation finishes.
- 📋 **Recent Uploads** — Shows uploaded file names and file sizes.
- 📱 **Responsive Design** — Designed to adapt to desktop and mobile screen sizes.
- 🎨 **Modern UI** — Clean interface with soft backgrounds, rounded cards, and smooth transitions.

## 🖥️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Builds the interactive user interface |
| JavaScript (ES6+) | Handles file selection, drag-and-drop events, and upload state |
| CSS3 | Creates the layout, animations, and responsive design |
| Vite | Provides the development server and production build tools |
| Lucide React | Supplies interface icons |
| HTML5 | Provides the application structure and file input functionality |

## 📸 How It Works

1. **Choose a PDF:** Click the *Choose PDF* button and select a document from your computer.
2. **Pick up the file:** A PDF tile appears beneath the basketball court.
3. **Shoot the file:** Click and hold the PDF tile, drag it to the basketball hoop, and release it over the net.
4. **Watch the animation:** The interface triggers the basketball-inspired upload animation.
5. **View the result:** The progress bar completes, a success message appears, and the file is added to the Recent Uploads list.

## ⚙️ Installation and Setup

### Prerequisites

Before running the project, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- [Visual Studio Code](https://code.visualstudio.com/)
- Git (optional, for cloning the repository)

### 1. Clone the Repository

Replace `YOUR-USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR-USERNAME/basketball-upload-animation.git
```

### 2. Open the Project

```bash
cd basketball-upload-animation
```

Open the folder in Visual Studio Code:

```bash
code .
```

Alternatively, select **File → Open Folder** in Visual Studio Code.

### 3. Install Dependencies

Open the integrated terminal and run:

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will display a local development address, usually:

```text
http://localhost:5173
```

Open this address in your browser to use the application.

## 📂 Project Structure

```text
basketball-upload-animation/
│
├── public/
│
├── src/
│   ├── App.jsx          # Main React application and upload logic
│   ├── App.css          # Styling and basketball animations
│   └── main.jsx         # React entry point
│
├── index.html           # HTML entry point
├── package.json         # Dependencies and project scripts
├── package-lock.json    # Generated dependency lock file
└── README.md            # Project documentation
```

*Note: `package-lock.json` is generated when you run `npm install`. A `public/` folder is optional if the project does not need static assets.*

## 🏗️ Build for Production

To create an optimized production build, run:

```bash
npm run build
```

The generated files will be placed in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

## ⚠️ Current Limitations

This project currently demonstrates the front-end interaction.

- The upload progress is simulated.
- Files are not transmitted to a backend server.
- Uploaded file entries are held in application state and are not permanently saved.
- Uploaded files will disappear from the list when the page is refreshed.

For production use, the application can be extended with a backend API or cloud storage provider to upload, validate, and store PDF documents securely.

## 🚀 Future Improvements

Possible future enhancements include:

- [ ] Integrate real file uploads with a backend API.
- [ ] Store documents using Firebase Storage, Supabase Storage, or Amazon S3.
- [ ] Add upload validation and configurable file-size limits.
- [ ] Display actual upload progress from the server.
- [ ] Add sound effects when the document scores a basket.
- [ ] Add a scoring system for successful shots.
- [ ] Add user authentication and upload history.
- [ ] Deploy the application using GitHub Pages, Netlify, or Vercel.

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch to your fork.
5. Open a pull request.

## 📄 License

This project is available for personal learning and development. If you intend to distribute or reuse it, consider adding an explicit open-source license, such as the MIT License, after confirming that it suits your intended use.

---

**Made with ❤️, React, and a little basketball magic. 🏀**

