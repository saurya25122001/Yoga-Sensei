# 🧘 Yoga Sensei

**Yoga Sensei** is a real-time yoga pose detection web application designed to help users improve their posture and alignment while performing yoga.  
Using **TensorFlow.js** and **PoseNet/MoveNet**, the app analyzes your yoga poses through the webcam and provides **real-time feedback**.

---

## 🚀 Features

- **Real-time Pose Detection** using TensorFlow.js  
- **Webcam-based yoga posture analysis**  
- **Feedback on alignment and accuracy**  
- **Clean, responsive UI** built with React.js and Tailwind CSS  
- **Beginner-friendly yoga poses** with visual guidance  
- Lightweight, runs **directly in the browser** – no extra installation needed  

---

## 🛠️ Tech Stack

| Technology        | Purpose                     |
|-------------------|----------------------------|
| **React.js**      | Frontend framework         |
| **TensorFlow.js** | Real-time pose detection   |
| **Tailwind CSS**  | Styling and responsive UI  |
| **Framer Motion** | Smooth animations          |

---

## 📂 Folder Structure

Yoga-Sensei/
│
├── public/ # Static files
│ ├── index.html
│ └── yoga-poses.png
│
├── src/
│ ├── components/ # Reusable components
│ │ ├── Navbar.jsx
│ │ ├── PoseDetector.jsx
│ │ └── FeedbackCard.jsx
│ │
│ ├── utils/ # Utility functions
│ │ └── poseUtils.js
│ │
│ ├── App.jsx # Main app file
│ └── index.js
│
├── package.json
└── README.md


---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/yoga-sensei.git

# 2️⃣ Navigate into the folder
cd yoga-sensei

# 3️⃣ Install dependencies
npm install

# 4️⃣ Run the development server
npm start

🌐 Live Demo

Check out the deployed version here:
Yoga Sensei Live

🎯 How to Use

Allow access to your webcam when prompted.

Select a yoga pose from the menu.

Perform the pose while facing the camera.

Receive real-time feedback on:

Pose correctness ✅

Body alignment 🧍

Improvement tips 📈

📸 Screenshots
Home Page	Pose Detection

	
📝 Roadmap

 Add more yoga poses 🧘‍♀️

 Provide audio feedback 🔊

 User progress tracking 📊

 Mobile app version 📱
