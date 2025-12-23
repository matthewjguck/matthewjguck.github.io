import type { LayoutKey } from '../utils/layoutImports';

export const projects = [
  {
    id: "nab3d",
    title: "Nab 3D",
    description: "A way to 'nab' any object straight out of the real world and into your website, with just a short video and a single line of code.",
    image: "/images/Nab 3D Splash.png",
    tags: ["Vite", "React", "Photogrammetry", "JavaScript", "Swift"],
    liveUrl: "https://devpost.com/software/nab-3d",
    liveUrlLabel: "View on Devpost",
    githubUrl: "https://github.com/soapantelope/nab",
    date: "Spring 2024",
    type: "Hackathon Prize Winner",
    location: "Stanford, CA",
    role: "Designer, Developer",
    status: "",
    content: "",
    layoutKey: "nab3d" as LayoutKey,
    features: [
      "Video-to-3D conversion using advanced photogrammetry algorithms",
      "One-line HTML embedding for seamless web integration",
      "Real-time 3D model generation and optimization",
      "Cross-platform compatibility (Web, iOS, Android)",
      "Automated texture mapping and mesh optimization"
    ],
    technologies: ["React", "JavaScript", "Swift", "Computer Vision", "WebGL", "Three.js", "Vite", "Bun"],
    challenges: [
      "Developing accurate photogrammetry algorithms for consumer-grade video input",
      "Optimizing 3D model file sizes for web performance",
      "Creating intuitive user experience for complex 3D workflows",
      "Implementing cross-platform video processing capabilities"
    ],
    outcome: "Awarded 'Best Beginner Hack' at TreeHacks 2024, Stanford University's premier hackathon with over 1,600 participants. The project demonstrated significant potential for commercialization and received interest from multiple tech companies for further development.",
    video: "https://www.youtube.com/embed/-RIqBdwPtAk",
    duration: "36 hours",
    teamSize: "4 developers",
    platforms: ["Web", "iOS", "Android"]
  },
  {
    id: "ekg",
    title: "E.K.G.",
    description: "An app that enables teachers to learn more about their students through in-class games! Awarded 'Greatest Societal Impact' at Stanford CS147 Expo.",
    image: "/images/EKG.png",
    tags: ["Mobile UI", "UX Research", "Ed-Tech", "Prototyping"],
    liveUrl: "#",
    liveUrlLabel: "Live Demo",
    date: "Autumn 2024",
    type: "App Prototype",
    location: "Stanford, CA",
    role: "Designer, UX Researcher",
    status: "",
    content: "E.K.G. is an educational technology solution that revolutionizes how teachers understand and connect with their students. Through carefully designed in-class games and interactive activities, the app provides valuable insights into student emotions, learning preferences, and classroom dynamics while maintaining strict privacy and building trust between educators and learners.",
    layoutKey: "ekg" as LayoutKey,
    features: [
      "Interactive classroom games that reveal student emotional states",
      "Real-time analytics dashboard for teachers",
      "Privacy-first design with anonymous data collection",
      "Customizable activities for different age groups and subjects",
      "Integration with existing classroom management systems",
      "Comprehensive reporting tools for parent-teacher conferences"
    ],
    technologies: ["Figma", "Prototyping", "User Research", "Mobile Design", "Data Visualization"],
    challenges: [
      "Balancing data collection with student privacy concerns",
      "Designing age-appropriate interfaces for diverse student populations",
      "Creating engaging games that provide meaningful educational insights",
      "Ensuring teacher adoption through intuitive design"
    ],
    outcome: "Awarded 'Greatest Societal Impact' at Stanford CS147 Human-Computer Interaction Design Expo. The project received recognition from Stanford faculty and education professionals for its potential to transform classroom dynamics and improve student-teacher relationships.",
    video: "https://www.youtube.com/embed/tci3koMFFdQ?si=9sglFPWnMZ4uA7p4",
    figmaEmbed: "https://embed.figma.com/design/MOvyvRSnpPyeI154kSgnMQ/EKG-%2B-Design-System?node-id=33525-578&embed-host=share",
    gallery: ["/images/EKG Poster.png", "/images/EKGUI.png", "/images/Problem.png", "/images/Proto.png"],
    duration: "10 weeks",
    teamSize: "4 designers",
    platforms: ["iOS", "Android"]
  },
  {
    id: "myst",
    title: "Myst",
    description: "Chrome Extension that analyzes browsing habits using AI to break echo chambers and promote diverse content consumption.",
    image: "/images/Myst Splash.png",
    tags: ["Chrome Extension", "AI", "Flask", "Python"],
    liveUrl: "https://devpost.com/software/myst-p09ai2",
    liveUrlLabel: "View on Devpost",
    githubUrl: "#",
    date: "Winter 2025",
    type: "Hackathon Project",
    location: "Stanford, CA",
    role: "Developer",
    status: "TreeHacks 2025",
    content: "",
    layoutKey: "myst" as LayoutKey,
    features: [
      "Automatic screenshot capture on tab changes and keystrokes",
      "Real-time content analysis using OpenAI GPT-4o",
      "Content classification with Mistral AI across multiple dimensions", 
      "3D blob visualization showing consumption patterns",
      "Privacy-first approach with no personal data storage",
      "Sentiment analysis and misinformation detection"
    ],
    technologies: ["JavaScript", "Python", "Flask", "HTML", "CSS", "OpenAI", "Mistral AI", "Luma Labs", "Chrome Extension API"],
    challenges: [
      "Flask backend hosting and deployment debugging",
      "Mistral API JSON formatting and error handling", 
      "Cross-device data synchronization",
      "Database management for user persistence",
      "Chrome extension architecture learning curve"
    ],
    outcome: "Successfully developed end-to-end Chrome Extension with AI-powered content analysis and 3D visualization during TreeHacks 2025 at Stanford University.",
    duration: "36-hour hackathon sprint",
    teamSize: "4 developers",
    platforms: ["Chrome Extension", "Web"]
  },
  {
    id: "cupid",
    title: "The Cupid Project",
    description: "An annual card-giving project delivering to nursing homes every Valentine's Day since 2018.",
    image: "/images/Cupid Project Splash.png",
    tags: ["Community Outreach", "Social Impact", "Design for Good"],
    liveUrl: "https://thecupidproject.org",
    liveUrlLabel: "Visit Website",
    date: "February 2018 - Present",
    type: "Community Outreach",
    location: "Longview, TX",
    role: "Founder, Lead Designer",
    status: "501(c)(3) Non-profit",
    content: "",
    gallery: ["/images/family.webp"],
    layoutKey: "cupid" as LayoutKey,
  },
  {
    id: "slatt",
    title: "SLATT",
    description: "Spotify Language Acquisition Translation Tool - your ultimate companion for exploring music lyrics in multiple languages while enjoying your favorite tracks on Spotify.",
    image: "/images/SLATT Splash.png",
    tags: ["Python", "Web Development", "Language Learning", "API Integration"],
    liveUrl: "",
    liveUrlLabel: "",
    githubUrl: "https://github.com/matthewjguck/slatt",
    date: "Winter 2023",
    type: "Personal Project",
    location: "San Francisco, CA",
    role: "Developer",
    status: "",
    content: "",
    layoutKey: "slatt" as LayoutKey,
    features: [
      "Direct Spotify account integration for real-time song detection",
      "Multi-language translation using LibreTranslate API",
      "Automatic lyric fetching from Genius API",
      "Real-time translation as songs play",
      "Language learning focus for vocabulary building",
      "Clean, user-friendly interface design"
    ],
    technologies: ["Python", "HTML", "Spotify Web API", "Genius Lyrics API", "LibreTranslate API", "Web Development"],
    challenges: [
      "Integrating multiple APIs (Spotify, Genius, LibreTranslate) seamlessly",
      "Handling real-time data synchronization between services",
      "Creating intuitive user experience for language learners",
      "Managing API rate limits and error handling"
    ],
    outcome: "Successfully created a functional language learning tool that combines music discovery with vocabulary acquisition, demonstrating effective API integration and user-centered design principles.",
    duration: "Personal project development",
    teamSize: "Solo developer",
    platforms: ["Web"],
    gallery: ["/images/slatt1.png", "/images/slatt2.png", "/images/slatt3.png"]
  },
  {
    id: "vending",
    title: "Virtual Vending Machine",
    description: "A digital, choose-your-own adventure experience that aims to \"vend\" contentment with your life. Made in Figma.",
    image: "/images/Virtual Vending.png",
    tags: ["Figma", "Interactive Design", "User Experience"],
    liveUrl: "",
    liveUrlLabel: "Try Interactive Prototype",
    date: "Autumn 2024",
    type: "Figma Experience",
    location: "Stanford, CA",
    role: "Designer",
    status: "Figma Experience",
    content: "",
    layoutKey: "vending" as LayoutKey,
    features: [
      "Interactive choose-your-own adventure gameplay",
      "Personalized content recommendation system",
      "Engaging vending machine metaphor for self-discovery",
      "Multiple branching storylines based on user choices",
      "Beautiful, intuitive interface design in Figma",
      "Accessible design principles throughout the experience"
    ],
    technologies: ["Figma", "Interactive Prototyping", "UX Design", "Behavioral Psychology", "Gamification"],
    challenges: [
      "Creating meaningful branching narratives that provide genuine value",
      "Designing an intuitive navigation system for complex choice trees",
      "Balancing entertainment with genuine therapeutic benefit",
      "Implementing accessible design for users with diverse needs"
    ],
    outcome: "The prototype successfully demonstrated the potential for gamified mental health tools and received positive feedback from users during testing. The project showcased innovative approaches to digital wellness and self-reflection tools.",
    figmaEmbed: "https://embed.figma.com/proto/MI9YHNoA6lFTO5kUhRBQQv/Guck%2C-Yang%2C-Kitch?page-id=28%3A9&node-id=339-759&viewport=3496%2C3400%2C0.03&scaling=contain&content-scaling=fixed&starting-point-node-id=362%3A86&embed-host=share",
    duration: "6 weeks",
    teamSize: "3 designers",
    platforms: ["Web", "Mobile Web"]
  },



  
  // {
  //   id: "engauge",
  //   title: "EnGauge",
  //   description: "An Event Planning and Notification platform for Stanford students.",
  //   image: "/images/EnGauge Splash.png",
  //   tags: ["Mobile App", "Social Computing", "UI/UX Design"],
  //   liveUrl: "",
  //   liveUrlLabel: "View Project",
  //   date: "Spring 2024",
  //   type: "Mobile App",
  //   location: "Stanford, CA",
  //   role: "Designer",
  //   content: "",
  //   layoutKey: "engauge" as LayoutKey,
  //   gallery: ["/images/EnGauge Spread.png", "/images/Final1.png", "/images/Final2.png", "/images/Final3.png", "/images/Final4.png", "/images/Final5.png", "/images/Final6.png", "/images/Final7.png"]
  // },
  // Additional projects below the top 6



  // {
  //   id: "daycare",
  //   title: "Diabetic Daycare",
  //   description: "A Java-based Type 1 Diabetes simulator to help non-diabetics better understand blood sugar management.",
  //   image: "/images/Diabetic Daycare Splash.png",
  //   tags: ["Java", "Game Design", "Educational Technology", "Health Awareness"],
  //   liveUrl: "#",
  //   liveUrlLabel: "Play Game",
  //   date: "Summer 2024",
  //   type: "Java Game",
  //   location: "San Francisco, CA",
  //   role: "Programming (Java), Prototyping, System & UI Design, UX Research",
  //   status: "🛠️ Under Construction 🚧",
  //   content: "I developed Diabetic Daycare, a Java-based educational Type 1 Diabetes simulator. The game utilizes a proprietary algorithmic model of insulin and blood glucose interactions to accurately simulate the experience of living with Type 1. Moving forward with this project, I plan to reach out to pediatric endocrinology clinics with diabetes education training.",
  //   gallery: ["/images/Bell Curve.png", "/images/Challenges Diabetes.png", "/images/Diabetic Daycare - Terminal.png"]
  // },
  // {
  //   id: "sustainability",
  //   title: "Normalizing Sustainable Behaviors",
  //   description: "Proposals for normalizing sustainable behaviors on Stanford's campus.",
  //   image: "/images/Norm Splash.png",
  //   tags: ["Design Research", "Sustainability", "Social Impact"],
  //   liveUrl: "#",
  //   liveUrlLabel: "View Research",
  //   date: "Spring 2024",
  //   type: "Design Proposals",
  //   location: "Stanford, CA",
  //   role: "Designer, Researcher",
  //   status: "🛠️ Under Construction 🚧",
  //   content: "A comprehensive research project focused on normalizing sustainable behaviors through design interventions on Stanford's campus.",
  //   gallery: ["/images/Norm1.png", "/images/Norm2.png", "/images/Norm3.png", "/images/Norm4.png"]
  // },
  // {
  //   id: "ontype1",
  //   title: "On Type 1",
  //   description: "On Type 1 is a series of digital prints that aims to capture various facets of the diabetic experience.",
  //   image: "/images/On Type 1 Splash.png",
  //   tags: ["Digital Art", "Health Advocacy", "Print Design"],
  //   liveUrl: "#",
  //   liveUrlLabel: "View Art Series",
  //   date: "Summer 2023",
  //   type: "Personal Project",
  //   location: "San Francisco, CA",
  //   role: "Designer",
  //   status: "🛠️ Under Construction 🚧",
  //   content: "A personal project exploring the diabetic experience through digital art and print design, aiming to raise awareness and create understanding about Type 1 diabetes.",
  //   gallery: ["/images/T1D.png", "/images/LO.png", "/images/Life Juice.png"]
  // },





  {
    id: "skyhigh",
    title: "Sky High Hypoglycemia",
    description: "A collaborative escape room designed as part of Stanford's 'DESIGN 1' course.",
    image: "/images/Sky High Hypoglycemia Splash.png",
    tags: ["Experience Design", "Collaboration", "Educational Design"],
    liveUrl: "#",
    liveUrlLabel: "View Experience",
    date: "Spring 2024",
    type: "Class Project",
    location: "Stanford, CA",
    role: "Designer",
    status: "",
    layoutKey: "skyhigh" as LayoutKey,
    content: "Sky High Hypoglycemia was a collaborative project in Stanford's DESIGN 1 Course. An immersive escape room experience designed to educate participants about hypoglycemia management.",
    gallery: ["/images/Escape Room Spread.png"]
  }
  
]
