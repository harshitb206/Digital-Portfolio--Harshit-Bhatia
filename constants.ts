
import { Project, SkillCategory, Experience, Achievement, Education, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '001',
    title: 'Ghar Ghar Gyaan',
    type: 'Empowerment Through Access',
    date: 'Apr \'25',
    description: 'Developed a comprehensive legal and welfare information hub featuring an eligibility checker, citizens\' rights information, SMS/voice support via Twilio, and automated document generation.',
    stack: ['Streamlit', 'Flask', 'Twilio', 'gTTS', 'Google Cloud Translation API'],
    status: 'STABLE',
    link: 'https://github.com/harshitb206/GharGharGyaan.git',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '002',
    title: 'Legal Document Analyzer',
    type: 'AI-Powered with Fraud Detection',
    date: 'Apr \'25',
    description: 'Developed an AI-NLP tool for legal document analysis with forgery detection and auto-reports on missing terms, suspicious language, and layout anomalies.',
    stack: ['NLP', 'Python', 'Flask', 'OpenCV'],
    status: 'STABLE',
    link: 'https://github.com/harshitb206/Safe_docs.git',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '003',
    title: 'Drowsiness Detection System',
    type: 'AI/ML & IoT Winner',
    date: 'Feb \'25',
    description: 'Award-winning project from Innogeeks 3.0. A real-time system using vision tracking and IoT sensors to detect driver fatigue and prevent accidents.',
    stack: ['Python', 'OpenCV', 'TensorFlow', 'Arduino', 'IoT'],
    status: 'STABLE',
    link: 'https://github.com/harshitb206',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '004',
    title: 'Expenza',
    type: 'AI Money Tracker',
    description: 'Smart financial intelligence engine for expense classification and future spending prediction.',
    stack: ['ML', 'Python', 'Flask', 'Pandas'],
    status: 'STABLE',
    link: 'https://github.com/harshitb206/Expenza.git',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '005',
    title: 'Car Price Prediction',
    type: 'Regression Analysis',
    description: 'Advanced machine learning model developed during internship to predict vehicle market value based on various technical parameters.',
    stack: ['Scikit-Learn', 'Regression', 'NumPy', 'Pandas'],
    status: 'STABLE',
    link: 'https://github.com/harshitb206',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '006',
    title: 'Sign Language Interpreter',
    type: 'Computer Vision',
    description: 'A deep learning project aimed at bridging communication gaps by translating hand gestures into text in real-time.',
    stack: ['Mediapipe', 'Keras', 'Python', 'OpenCV'],
    status: 'PENDING',
    link: 'https://github.com/harshitb206',
    image: 'https://images.unsplash.com/photo-1516010515152-789f81f14304?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '007',
    title: 'HIP',
    type: 'Intelligence Protocol',
    description: 'The Handshake Intelligence Protocol - a system-level agent for coordinating multi-process communication.',
    stack: ['Systems', 'C++', 'Networking'],
    status: 'STABLE',
    link: 'https://github.com/harshitb206/HIP.git',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2024',
    link: 'https://www.linkedin.com/in/harshit-bhatia206/',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Python for Data Science & AI',
    issuer: 'IBM',
    date: '2023',
    link: 'https://www.linkedin.com/in/harshit-bhatia206/',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: '2024',
    link: 'https://www.linkedin.com/in/harshit-bhatia206/',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Advanced Computer Vision',
    issuer: 'LinkedIn Learning',
    date: '2024',
    link: 'https://www.linkedin.com/in/harshit-bhatia206/',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['C/C++', 'Java', 'Python']
  },
  {
    title: 'Core CS & Problem Solving',
    skills: ['DSA', 'OOP', 'OS', 'DBMS', 'Computer Organization', 'Software Engineering']
  },
  {
    title: 'Web Technologies',
    skills: ['HTML/CSS', 'Tailwind CSS', 'JavaScript', 'MongoDB', 'Oracle SQL']
  },
  {
    title: 'ML/AI',
    skills: ['Scikit-Learn', 'OpenCV', 'Pipelines', 'Generative AI']
  },
  {
    title: 'Other Tools',
    skills: ['Git/GitHub', 'Google Cloud', 'VS Code', 'Google Colab', 'Twilio']
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Innogeeks 3.0 National Hackathon',
    position: '1st Prize',
    prize: '₹70,000',
    details: 'Developed a cutting-edge AI/ML & IoT-based Drowsiness Detection System using real-time sensors and vision tracking.'
  },
  {
    title: 'Hackowasp 7.0 Ideathon - TIET',
    position: '2nd Prize',
    details: 'Built "Ghar Ghar Gyaan," an AI-powered legal & health rights advisor delivering multilingual support via web, SMS, and voice.'
  },
  {
    title: 'Hack-O-Mania’25 – NMIMS Chandigarh',
    position: '3rd Prize',
    prize: '₹5,000',
    details: 'Developed an AI-Powered Legal Document Analyzer with Fraud Detection for analyzing contracts and identifying fraudulent clauses.'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'ML Intern',
    organization: 'Sensation Software Pvt. Ltd. Mohali',
    duration: 'Jun \'25 - Jul \'25',
    description: [
      'Machine learning model development.',
      'Worked on real-world projects including Car price prediction and Money AI Tracker, implementing regression and classification models.',
      'Explored deployment of ML models using Flask and Streamlit.'
    ]
  },
  {
    role: 'Co-secretary',
    organization: 'Technometer Club Amity University, Punjab',
    duration: 'Aug \'24 - Present',
    description: [
      'Collaborated on strategic planning and event execution as a core team member of the Technometer society at AUP.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Tech. in Computer Engineering',
    institution: 'Amity University Mohali',
    location: 'Punjab',
    duration: 'Completing Jun \'27',
    details: '7.11 CGPA'
  },
  {
    degree: '12th Grade, Non-Medical Sciences',
    institution: 'St. Xavier’s Sr. Secondary School',
    location: 'Chandigarh',
    duration: '2023',
    details: '86%'
  },
  {
    degree: '10th Grade',
    institution: 'St. Xavier’s Sr. Secondary School',
    location: 'Mohali',
    duration: '2021',
    details: '94%'
  }
];
