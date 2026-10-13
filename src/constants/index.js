export const USER_DETAILS = {
  name: "V VINAY PINGALE",
  email: "vvinaypingale@gmail.com",
  phone: "9880534651",
  linkedin: "https://www.linkedin.com/in/vvinaypingale/",
  github: "https://github.com/vvinaypingale-ops",
  githubUsername: "vvinaypingale-ops",
  roles: ["AI Engineer", "Machine Learning Enthusiast", "Full Stack Developer", "Python Developer"],
  resumeLink: "https://drive.google.com/file/d/1kOqw4U1CARYDWOEdDGUY7_Eda6I19XZN/view?usp=drive_link"
};

export const PROJECTS = [
  {
    id: 1,
    name: "PulseGuard AI",
    description: "AI-powered clinical healthcare platform for cardiovascular risk detection, emergency management, and real-time response.",
    bullets: [
      "Developed a cardiovascular disease prediction engine with a clinical-grade dashboard.",
      "Implemented a backend system utilizing Spring Boot and MySQL for secure data storage.",
      "Integrated a multilingual AI chatbot for health assistance and automated responses.",
      "Built a high-availability emergency response system (SOS) with real-time ambulance tracking.",
      "Designed a modular, scalable architecture ensuring low-latency mission-critical operations."
    ],
    techStack: ["React", "Spring Boot", "MySQL", "AI/ML", "Google Maps API"],
    githubUrl: "https://github.com/vvinaypingale-ops",
    liveUrl: "https://pulse-guard-tech-youth.onrender.com/"
  },
  {
    id: 2,
    name: "Vinax AutoCorrect AI",
    description: "Intelligent writing assistant and real-time grammar corrector with multi-tone rephrasing, email drafting, and document auditing.",
    bullets: [
      "Engineered real-time grammar and spell-checking with instant suggestions and one-click corrections.",
      "Integrated Google Gemini LLM API for tone shifting (Professional, Casual, Academic, Marketing) and rewriting.",
      "Built an AI email assistant drafting tailored business proposals, cover letters, and follow-up templates.",
      "Implemented full-document proofreading audit for PDF/DOCX/TXT with readability and clarity scoring.",
      "Incorporated Web Speech API voice-to-text dictation, custom dictionary, and writing analytics."
    ],
    techStack: ["JavaScript", "Gemini LLM API", "NLP", "Speech Recognition", "CSS3"],
    githubUrl: "https://github.com/vvinaypingale-ops",
    liveUrl: "https://autocorrect-app-nine.vercel.app/"
  },
  {
    id: 3,
    name: "AI Study Companion",
    description: "Intelligent study tool providing personalized learning experiences, RAG vector search, and adaptive quizzes.",
    bullets: [
      "Created an AI-driven study planner with 7-day personalized schedules adapting to student progress.",
      "Integrated Large Language Models (LLMs) with RAG vector store for document embedding and citation.",
      "Built an interactive AI tutor chat, practice quiz generator, and automated mistake revision log.",
      "Developed an intuitive, responsive frontend for tracking subject-wise mastery across semester syllabi.",
      "Optimized backend APIs for fast response times and scalable content delivery."
    ],
    techStack: ["React", "Python", "LLMs & RAG", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/vvinaypingale-ops",
    liveUrl: "https://ai-study-companion-dd76.onrender.com/"
  },
  {
    id: 4,
    name: "Alumni Management System",
    description: "Enterprise full-stack web application for managing alumni networks, event registrations, and communication.",
    bullets: [
      "Architected a robust MVC pattern using Java Servlets and JSP.",
      "Designed a 3NF normalized MySQL database with transactional support.",
      "Integrated asynchronous multithreading using ExecutorService for background tasks.",
      "Developed a clean frontend using Bootstrap for responsive user interfaces.",
      "Configured and deployed the application on Apache Tomcat servers."
    ],
    techStack: ["Java Servlets", "JSP", "MySQL", "Bootstrap", "Tomcat"],
    githubUrl: "https://github.com/vvinaypingale-ops",
    liveUrl: "https://alumni-system-demo.loca.lt/AlumniManagementSystem/login"
  },
  {
    id: 5,
    name: "Personal Expense Tracker",
    description: "A comprehensive financial application for tracking daily expenses and analyzing spending habits.",
    bullets: [
      "Built a secure backend for managing financial records and user accounts.",
      "Designed an interactive dashboard with data visualization for spending analysis.",
      "Implemented intelligent categorization of expenses using basic machine learning.",
      "Ensured data integrity and fast retrieval using optimized database queries.",
      "Created a mobile-responsive interface for on-the-go expense logging."
    ],
    techStack: ["JavaScript", "React", "Node.js", "SQL"],
    githubUrl: "https://github.com/vvinaypingale-ops",
    liveUrl: ""
  },
  {
    id: 6,
    name: "Web Music Player",
    description: "A dynamic web-based audio player with playlist management and sleek UI.",
    bullets: [
      "Developed custom audio controls and progress tracking algorithms.",
      "Designed a modern, dynamic user interface with smooth CSS transitions.",
      "Implemented state management for continuous playback across route changes.",
      "Created a modular component architecture for easy feature expansion.",
      "Optimized media loading and buffering for uninterrupted user experience."
    ],
    techStack: ["JavaScript", "HTML5 Audio", "CSS3", "React"],
    githubUrl: "https://github.com/vvinaypingale-ops",
    liveUrl: ""
  }
];

export const SKILLS = [
  { category: "Programming", items: ["Python", "Java", "SQL"] },
  { category: "AI & ML", items: ["Machine Learning", "Data Analysis", "Model Evaluation", "Basic Deep Learning"] },
  { category: "AI Tools", items: ["Scikit-learn", "Pandas", "NumPy", "AI APIs / LLM Integration"] },
  { category: "Web & Integration", items: ["JavaScript", "React", "Node.js"] },
  { category: "Databases", items: ["MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { category: "Core Concepts", items: ["Data Structures", "Algorithms", "OOP", "Problem Solving"] }
];

export const ACHIEVEMENTS = [
  "Smart India Hackathon (Top 50)",
  "GDG Build with Bengaluru Hackathon",
  "Anveshna and TechBizz participation"
];

export const POSITIONS = [
  "NSS Junior Leader",
  "NCC Cadet (6 months)"
];
