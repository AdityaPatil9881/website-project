import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Course.css'

import webBrochure from "./brochures/Full_Stack_Web_Developer.pdf";
import pythonBrochure from "./brochures/Python_Full_Stack_Developer.pdf";
import reactBrochure from "./brochures/React_Full_Stack_MERN_Developer.pdf";
import testingBrochure from "./brochures/Manual_Automation_Testing.pdf";
import aibrochure from "./brochures/Artificial_Intelligence_AI.pdf";
import data from "./brochures/Data_Science.pdf";


const brochures = {
  "web-full-stack": webBrochure,
  "python-full-stack": pythonBrochure,
  "react-full-stack": reactBrochure,
  "testing": testingBrochure,
  "ai-ml": aibrochure,
  "data-science": data,
};
console.log(brochures);
// ─────────────────────────────────────────────
// Lucide icons (inline SVG components)
// ─────────────────────────────────────────────
const iconProps = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
const iconMd   = { ...iconProps, width: 20, height: 20 }
const iconLg   = { ...iconProps, width: 24, height: 24 }

const IconArrowRight    = (p) => <svg {...iconProps} {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
const IconArrowLeft     = (p) => <svg {...iconProps} {...p}><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
const IconDownload      = (p) => <svg {...iconProps} {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
const IconCheck         = (p) => <svg {...iconProps} {...p}><polyline points="20 6 9 11 4 16"/></svg>
const IconCheckCircle2  = (p) => <svg {...iconMd} {...p}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
const IconRocket        = (p) => <svg {...iconProps} {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
const IconMenu          = (p) => <svg {...iconLg} {...p}><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
const IconX             = (p) => <svg {...iconLg} {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
const IconClock         = (p) => <svg {...iconProps} {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
const IconArrowUpRight  = (p) => <svg {...iconProps} {...p}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
const IconPlus          = (p) => <svg {...iconProps} {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
const IconStar          = (p) => <svg {...iconProps} {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const IconQuote         = (p) => <svg {...iconMd} {...p}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
const IconSparkles      = (p) => <svg {...iconProps} {...p}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
const IconLoader2       = (p) => <svg {...iconProps} {...p} style={{animation:'spin 1s linear infinite',...(p.style||{})}}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
const IconLinkedin      = (p) => <svg {...iconProps} {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const IconInstagram     = (p) => <svg {...iconProps} {...p}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const IconYoutube       = (p) => <svg {...iconProps} {...p}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
const IconFacebook      = (p) => <svg {...iconProps} {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
const IconMail          = (p) => <svg {...iconProps} {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
const IconPhone         = (p) => <svg {...iconProps} {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
const IconMapPin        = (p) => <svg {...iconProps} {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>

const IconCloud       = (p) => <svg {...iconMd} {...p}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>
const IconLineChart   = (p) => <svg {...iconMd} {...p}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
const IconBrainCircuit= (p) => <svg {...iconMd} {...p}><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5"/><path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1 1.32 4.24 3 3 0 0 1-.34 5.58 2.5 2.5 0 0 1-2.96 3.08A2.5 2.5 0 0 1 12 19.5"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>
const IconCoffee      = (p) => <svg {...iconMd} {...p}><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
const IconCode2       = (p) => <svg {...iconMd} {...p}><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
const IconGlobe       = (p) => <svg {...iconMd} {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
const IconAtom        = (p) => <svg {...iconMd} {...p}><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/></svg>
const IconShieldCheck = (p) => <svg {...iconMd} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
const IconGraduationCap=(p)=> <svg {...iconMd} {...p}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>

const IconUsers       = (p) => <svg {...iconMd} {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
const IconHammer      = (p) => <svg {...iconMd} {...p}><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>
const IconFolderGit2  = (p) => <svg {...iconMd} {...p}><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>
const IconBriefcase   = (p) => <svg {...iconMd} {...p}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
const IconCompass     = (p) => <svg {...iconMd} {...p}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
const IconPiggyBank   = (p) => <svg {...iconMd} {...p}><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h0"/></svg>
const IconBadgeCheck  = (p) => <svg {...iconMd} {...p}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><path d="m9 12 2 2 4-4"/></svg>

const COURSE_ICONS = {
  Cloud: IconCloud, LineChart: IconLineChart, BrainCircuit: IconBrainCircuit,
  Coffee: IconCoffee, Code2: IconCode2, Globe: IconGlobe,
  Atom: IconAtom, ShieldCheck: IconShieldCheck,
}
const WHY_ICONS = {
  Users: IconUsers, Hammer: IconHammer, FolderGit2: IconFolderGit2,
  Briefcase: IconBriefcase, Compass: IconCompass, PiggyBank: IconPiggyBank,
  Sparkles: IconSparkles, BadgeCheck: IconBadgeCheck,
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const courses = [
  { id: 'cloud-ai-engineer', name: 'Cloud AI Engineer Program', icon: 'Cloud', description: 'Architect multi-cloud systems and ship applied AI features with the workflows top cloud teams use in production.', duration: '6 Months', level: 'Intermediate', tags: ['AWS', 'Azure', 'MLOps'] },
  { id: 'data-science', name: 'Data Science Program', icon: 'LineChart', description: 'Turn raw, messy data into decisions — statistics, Python, machine learning and real business case studies.', duration: '5 Months', level: 'Beginner to Advanced', tags: ['Python', 'SQL', 'ML'] },
  { id: 'ai-ml', name: 'AI & Machine Learning Program', icon: 'BrainCircuit', description: 'Build, train and deploy deep learning and generative AI models that hold up outside the notebook.', duration: '6 Months', level: 'Intermediate', tags: ['Deep Learning', 'NLP', 'GenAI'] },
  { id: 'java-full-stack', name: 'Java Full Stack Development', icon: 'Coffee', description: 'Engineer enterprise-grade applications end-to-end with Java, Spring Boot and a modern React frontend.', duration: '5 Months', level: 'Beginner to Advanced', tags: ['Java', 'Spring Boot', 'React'] },
  { id: 'python-full-stack', name: 'Python Full Stack Development', icon: 'Code2', description: 'Build robust web platforms from database to deploy with Python, Django/Flask and React.', duration: '5 Months', level: 'Beginner to Advanced', tags: ['Python', 'Django', 'React'] },
  { id: 'web-full-stack', name: 'Web Development Full Stack', icon: 'Globe', description: 'Design, build and ship responsive, production-grade websites and web applications from scratch.', duration: '4 Months', level: 'Beginner', tags: ['HTML/CSS', 'JavaScript', 'Node.js'] },
  { id: 'react-full-stack', name: 'React Full Stack Development', icon: 'Atom', description: 'Go deep on React, Node.js and modern frontend architecture used to build scalable consumer apps.', duration: '4 Months', level: 'Intermediate', tags: ['React', 'Node.js', 'REST APIs'] },
  { id: 'testing', name: 'Manual & Automation Testing', icon: 'ShieldCheck', description: 'Master QA fundamentals, Selenium and automation frameworks used by quality teams at product companies.', duration: '3 Months', level: 'Beginner', tags: ['Selenium', 'Java', 'API Testing'] },
]

const syllabus = {
  'cloud-ai-engineer': [
    { term: 1, module: 'Cloud & Linux Foundations', topics: ['Linux administration and shell scripting', 'Networking fundamentals for cloud systems', 'Introduction to AWS, Azure and GCP'], tags: ['Linux', 'AWS', 'Azure'] },
    { term: 2, module: 'Python for Cloud Engineers', topics: ['Automation scripting with Python', 'Working with REST APIs and SDKs', 'Version control with Git'], tags: ['Python', 'Git'] },
    { term: 3, module: 'AWS Solutions Architecture', topics: ['EC2, S3, IAM and VPC design', 'Designing for scalability and fault tolerance', 'Cost optimisation strategies'], tags: ['AWS', 'Architecture'] },
    { term: 4, module: 'DevOps & Containers', topics: ['Docker fundamentals and image design', 'Kubernetes orchestration basics', 'CI/CD pipelines with Jenkins/GitHub Actions'], tags: ['Docker', 'Kubernetes', 'CI/CD'] },
    { term: 5, module: 'Applied AI on Cloud', topics: ['MLOps fundamentals and model lifecycle', 'Deploying models as scalable endpoints', 'Integrating GenAI APIs into cloud workflows'], tags: ['MLOps', 'GenAI'] },
  ],
  'data-science': [
    { term: 1, module: 'Statistics & Python Foundations', topics: ['Descriptive and inferential statistics', 'Python programming for data analysis', 'Working with Jupyter and data structures'], tags: ['Python', 'Statistics'] },
    { term: 2, module: 'Data Wrangling & Visualisation', topics: ['Data cleaning with Pandas and NumPy', 'Exploratory data analysis', 'Storytelling with Matplotlib and Seaborn'], tags: ['Pandas', 'NumPy'] },
    { term: 3, module: 'Machine Learning Algorithms', topics: ['Regression, classification and clustering', 'Model evaluation and tuning', 'Feature engineering techniques'], tags: ['Scikit-learn', 'ML'] },
    { term: 4, module: 'SQL & Big Data Tools', topics: ['Advanced SQL for analytics', 'Introduction to distributed data with Spark', 'Working with data warehouses'], tags: ['SQL', 'Spark'] },
    { term: 5, module: 'Capstone: End-to-End Data Project', topics: ['Defining a business problem from data', 'Building and presenting a full analysis pipeline', 'Portfolio-ready case study'], tags: ['Capstone'] },
  ],
  'ai-ml': [
    { term: 1, module: 'Python & Math for ML', topics: ['Linear algebra and probability for ML', 'NumPy, Pandas for numerical computing', 'Programming fundamentals refresher'], tags: ['Python', 'Math'] },
    { term: 2, module: 'Supervised & Unsupervised Learning', topics: ['Classification and regression models', 'Clustering and dimensionality reduction', 'Model evaluation metrics'], tags: ['ML'] },
    { term: 3, module: 'Deep Learning', topics: ['Neural network fundamentals', 'CNNs and RNNs with TensorFlow/PyTorch', 'Training and regularisation techniques'], tags: ['TensorFlow', 'PyTorch'] },
    { term: 4, module: 'NLP & Computer Vision', topics: ['Text preprocessing and embeddings', 'Transformer-based language models', 'Image classification and object detection'], tags: ['NLP', 'Computer Vision'] },
    { term: 5, module: 'GenAI, LLMs & Deployment', topics: ['Working with large language models', 'Prompt engineering and fine-tuning basics', 'Deploying models behind a production API'], tags: ['GenAI', 'LLMs'] },
  ],
  'java-full-stack': [
    { term: 1, module: 'Core Java & OOP', topics: ['Java syntax, control flow and collections', 'Object-oriented design principles', 'Exception handling and file I/O'], tags: ['Java', 'OOP'] },
    { term: 2, module: 'Advanced Java & Databases', topics: ['JDBC and database connectivity', 'MySQL fundamentals and schema design', 'Multithreading basics'], tags: ['MySQL', 'JDBC'] },
    { term: 3, module: 'Spring Boot & REST APIs', topics: ['Building REST APIs with Spring Boot', 'Dependency injection and Spring data', 'Authentication with Spring Security'], tags: ['Spring Boot', 'REST'] },
    { term: 4, module: 'Frontend with React', topics: ['React components, props and state', 'Connecting frontend to Spring Boot APIs', 'Form handling and routing'], tags: ['React'] },
    { term: 5, module: 'Deployment & System Design Basics', topics: ['CI/CD for full stack applications', 'Cloud deployment fundamentals', 'Designing for scale: an introduction'], tags: ['Deployment'] },
  ],
  'python-full-stack': [
    { term: 1, module: 'Python Programming Essentials', topics: ['Conditionals, loops and functions', 'Object-oriented Python', 'Working with Git and version control'], tags: ['Python', 'Git'] },
    { term: 2, module: 'Django / Flask Web Development', topics: ['Routing, views and templates', 'Models and ORM fundamentals', 'Building REST APIs'], tags: ['Django', 'Flask'] },
    { term: 3, module: 'Database Design & APIs', topics: ['Relational database design', 'Authentication and authorisation', 'API testing with Postman'], tags: ['PostgreSQL', 'APIs'] },
    { term: 4, module: 'Frontend with React', topics: ['Component-driven UI development', 'State management and hooks', 'Connecting to Python backends'], tags: ['React'] },
    { term: 5, module: 'Deployment & Capstone Project', topics: ['Deploying full stack apps to the cloud', 'Performance and security checklist', 'Building a portfolio capstone project'], tags: ['Capstone'] },
  ],
  'web-full-stack': [
    { term: 1, module: 'HTML, CSS & Responsive Design', topics: ['Semantic HTML and modern CSS', 'Flexbox, Grid and responsive layouts', 'Design fundamentals for the web'], tags: ['HTML', 'CSS'] },
    { term: 2, module: 'JavaScript & DOM Mastery', topics: ['JavaScript fundamentals and ES6+', 'DOM manipulation and events', 'Asynchronous JavaScript and APIs'], tags: ['JavaScript'] },
    { term: 3, module: 'Backend with Node.js & Express', topics: ['Building servers with Node.js', 'Routing and middleware with Express', 'RESTful API design'], tags: ['Node.js', 'Express'] },
    { term: 4, module: 'Databases', topics: ['MongoDB fundamentals', 'MySQL fundamentals', 'Connecting databases to your backend'], tags: ['MongoDB', 'MySQL'] },
    { term: 5, module: 'Full Stack Capstone Project', topics: ['Planning and building a complete application', 'Deployment to production', 'Portfolio presentation'], tags: ['Capstone'] },
  ],
  'react-full-stack': [
    { term: 1, module: 'JavaScript & ES6+ Foundations', topics: ['Modern JavaScript syntax and patterns', 'Working with arrays, objects and modules', 'Asynchronous programming with Promises'], tags: ['JavaScript'] },
    { term: 2, module: 'React Fundamentals & Hooks', topics: ['Components, props and JSX', 'useState, useEffect and custom hooks', 'Forms and controlled components'], tags: ['React'] },
    { term: 3, module: 'State Management & Routing', topics: ['Context API and global state', 'Client-side routing', 'Performance optimisation in React'], tags: ['React Router'] },
    { term: 4, module: 'Node.js & API Integration', topics: ['Building APIs with Node.js and Express', 'Connecting React to backend services', 'Authentication flows'], tags: ['Node.js'] },
    { term: 5, module: 'Deployment & Performance', topics: ['Build optimisation and code splitting', 'Deploying to the cloud', 'Monitoring and performance tuning'], tags: ['Deployment'] },
  ],
  testing: [
    { term: 1, module: 'Software Testing Fundamentals', topics: ['SDLC and STLC concepts', 'Types and levels of testing', 'Writing effective test cases'], tags: ['QA Fundamentals'] },
    { term: 2, module: 'Manual Testing & Test Design', topics: ['Test case and test plan design', 'Defect lifecycle and bug reporting', 'Functional and regression testing'], tags: ['Manual Testing'] },
    { term: 3, module: 'Selenium WebDriver with Java', topics: ['Automating browsers with Selenium', 'Locators, waits and page object model', 'Building a test automation framework'], tags: ['Selenium', 'Java'] },
    { term: 4, module: 'API Testing', topics: ['REST API fundamentals', 'Testing APIs with Postman', 'Automating API tests'], tags: ['Postman', 'API Testing'] },
    { term: 5, module: 'CI/CD for Test Automation', topics: ['Integrating tests into CI/CD pipelines', 'Reporting and dashboards', 'Best practices for automation at scale'], tags: ['CI/CD'] },
  ],
}

const benefits = [
  'Live Online Training', 'Real Industry Projects', 'Capstone Projects',
  'Resume Building', 'Mock Interviews', 'Career Guidance',
  'Placement Assistance', 'Course Completion Certificate', 'Industry Mentorship',
]

const whyUs = [
  { title: 'Industry Expert Trainers', icon: 'Users' },
  { title: 'Hands-On Learning', icon: 'Hammer' },
  { title: 'Real Projects', icon: 'FolderGit2' },
  { title: 'Placement Support', icon: 'Briefcase' },
  { title: 'Career Guidance', icon: 'Compass' },
  { title: 'Affordable Learning', icon: 'PiggyBank' },
  { title: 'Latest Industry Curriculum', icon: 'Sparkles' },
  { title: 'Certification Programs', icon: 'BadgeCheck' },
]

const testimonials = [
  { name: 'Priya Sharma',    course: 'Data Science Program',            initials: 'PS', rating: 5, review: 'The mentors broke down every concept with real datasets, not just slides. I shipped my first ML project before the course even ended.' },
  { name: 'Rohan Mehta',     course: 'Cloud AI Engineer Program',        initials: 'RM', rating: 5, review: 'Going from zero cloud experience to deploying a production pipeline in six months felt impossible — the structured terms made it click.' },
  { name: 'Ananya Iyer',     course: 'React Full Stack Development',     initials: 'AI', rating: 5, review: 'Mock interviews were the turning point. By the time I sat for real interviews, nothing felt unfamiliar.' },
  { name: 'Karthik Reddy',   course: 'Java Full Stack Development',      initials: 'KR', rating: 4, review: 'Solid curriculum and genuinely helpful placement support. My capstone project is still the centerpiece of my portfolio.' },
  { name: 'Sneha Kulkarni',  course: 'AI & Machine Learning Program',    initials: 'SK', rating: 5, review: 'The GenAI and LLM modules were ahead of what I was seeing anywhere else. Directly relevant to the role I landed.' },
  { name: 'Aditya Patil',    course: 'Manual & Automation Testing',      initials: 'AP', rating: 5, review: 'Clear explanations, practical Selenium projects, and trainers who actually answered every question on live sessions.' },
]

const faqs = [
  { question: 'Who can join this course?',         answer: 'Our programs are designed for students, graduates and working professionals. Each course lists a recommended starting level, but our mentors help you ramp up regardless of your background.' },
  { question: 'Is certification provided?',         answer: 'Yes. Every learner who completes the program receives a LearnSkillX Course Completion Certificate recognised by our hiring partners.' },
  { question: 'Are projects included?',             answer: 'Yes. Each program includes hands-on industry projects through every term, plus a capstone project you can showcase in interviews and on your portfolio.' },
  { question: 'Is placement assistance available?', answer: 'Yes. We provide resume building support, mock interviews, interview preparation and placement assistance with our hiring partner network.' },
  { question: 'What is the course duration?',       answer: 'Course duration varies by program, typically ranging from 3 to 6 months of live, instructor-led training. Exact duration is listed on each course card.' },
]

const PRICING_INCLUSIONS = [
  'Live Instructor-Led Sessions', 'Practical Projects', 'Course Completion Certificate',
  'Resume Building Support', 'Interview Preparation', 'Placement Assistance',
  'Learning Resources Access',
]

const HERO_HIGHLIGHTS = [
  'Live Instructor-Led Training', 'Industry Projects', 'Course Completion Certificate',
  'Resume Building Support', 'Interview Preparation', 'Placement Assistance',
]

const HERO_BADGES = [
  { label: 'AWS',            top: '4%',  left: '2%',  delay: 0 },
  { label: 'Azure',          top: '16%', left: '78%', delay: 0.4 },
  { label: 'Python',         top: '46%', left: '88%', delay: 0.8 },
  { label: 'Java',           top: '78%', left: '74%', delay: 1.2 },
  { label: 'React',          top: '88%', left: '12%', delay: 0.6 },
  { label: 'AI',             top: '58%', left: '0%',  delay: 1.0 },
  { label: 'Machine Learning',top: '4%', left: '40%', delay: 1.4 },
  { label: 'Docker',         top: '30%', left: '14%', delay: 0.2 },
  { label: 'Kubernetes',     top: '70%', left: '40%', delay: 1.6 },
]

const TERMINAL_LINES = [
  '$ learnskillx --init career',
  '> resolving learning path... done',
  '> mentors connected: 40+',
  '> live cohorts running: 12',
  '> alumni placed: 1,200+',
  '> status: ready to launch',
]

const NAV_LINKS = [
  { label: 'Home',    href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Syllabus',href: '#syllabus' },
  { label: 'Fees',    href: '#fees' },
  { label: 'Why Us',  href: '#why-us' },
  { label: 'FAQ',     href: '#faq' },
]

const FOOTER_LINKS    = ['Home', 'Courses', 'About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions']
const FOOTER_PROGRAMS = ['Cloud AI Engineer', 'Data Science', 'AI & Machine Learning', 'Full Stack Development']
const FOOTER_SOCIALS  = [
  { icon: IconLinkedin,  label: 'LinkedIn' },
  { icon: IconInstagram, label: 'Instagram' },
  { icon: IconYoutube,   label: 'YouTube' },
  { icon: IconFacebook,  label: 'Facebook' },
]

const QUALIFICATIONS = ["High School", "Diploma", "Bachelor's Degree", "Master's Degree", "Other"]

// ─────────────────────────────────────────────
// GRADIENT BUTTON
// ─────────────────────────────────────────────
function GradientButton({ children, icon: Icon, variant = 'primary', onClick, type = 'button', className = '' }) {
  const cls = `btn btn-${variant === 'outlineLight' ? 'outline-light' : variant} ${className}`
  return (
    <button type={type} onClick={onClick} className={cls}>
      {Icon && <Icon />}
      {children}
    </button>
  )
}

// ─────────────────────────────────────────────
// SECTION HEADING
// ─────────────────────────────────────────────
function SectionHeading({ eyebrow, title, description, align = 'center', dark = false }) {
  return (
    <div className={`section-heading ${align}`}>
      {eyebrow && <span className="section-eyebrow">// {eyebrow}</span>}
      <h2 className={`section-title ${dark ? 'dark' : 'light'}`}>{title}</h2>
      {description && <p className={`section-desc ${dark ? 'dark' : 'light'}`}>{description}</p>}
    </div>
  )
}

// ─────────────────────────────────────────────
// TERMINAL PANEL
// ─────────────────────────────────────────────
function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState(0)
  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return
    const t = setTimeout(() => setVisibleLines(v => v + 1), 550)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <div className="terminal-panel">
      <div className="terminal-dots">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="terminal-label">learnskillx.sh</span>
      </div>
      <div className="terminal-body">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <span key={i} className={line.startsWith('$') ? 'terminal-cmd' : 'terminal-out'}>{line}</span>
        ))}
        {visibleLines < TERMINAL_LINES.length && <span className="terminal-cursor animate-blink" />}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// NAVBAR — with ← Back to Home button
// ─────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()          // ← added

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar-root ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className={`navbar-inner ${scrolled ? 'scrolled' : ''}`}>

          {/* Logo */}
          <a href="#home" className="navbar-logo font-display">
            Learn<span className="text-gradient">SkillX</span>
          </a>

          {/* Nav links */}
          <nav className="navbar-nav">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          {/* Right side — Back to Home + Register */}
          <div className="navbar-cta" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* ← Back to Home button */}
            <button
              onClick={() => navigate('/')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#cbd5e1',
                padding: '7px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.color = '#cbd5e1'
              }}
            >
              <IconArrowLeft style={{ width: 14, height: 14 }} />
              Back to Home
            </button>

            {/* Register Now */}
            <a href="#register">
              Register Now <IconArrowRight style={{ display: 'inline', verticalAlign: 'middle', width: 14, height: 14 }} />
            </a>
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
            className="navbar-hamburger"
          >
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="navbar-mobile">
            <div className="navbar-mobile-inner">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              ))}
              {/* Back to Home in mobile menu too */}
              <button
                onClick={() => { setOpen(false); navigate('/') }}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#cbd5e1',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <IconArrowLeft style={{ width: 14, height: 14 }} />
                Back to Home
              </button>
              <a href="#register" onClick={() => setOpen(false)} className="navbar-mobile-cta">Register Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="blob animate-blob" style={{ width:'28rem', height:'28rem', top:'-10rem', left:'-10rem', background:'rgba(79,70,229,0.25)', filter:'blur(110px)' }} />
      <div className="blob animate-blob" style={{ width:'26rem', height:'26rem', top:'5rem', right:'-8rem', background:'rgba(6,182,212,0.20)', filter:'blur(110px)', animationDelay:'4s' }} />
      <div className="blob animate-blob" style={{ width:'24rem', height:'24rem', bottom:'-8rem', left:'33%', background:'rgba(124,58,237,0.20)', filter:'blur(110px)', animationDelay:'8s' }} />
      <div className="grid-overlay" style={{ maskImage:'radial-gradient(ellipse 60% 60% at 50% 0%, black, transparent)' }} />

      <div className="container" style={{ position:'relative' }}>
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow font-mono">
              <IconRocket style={{ width:14, height:14, color:'var(--color-cyan-300)', flexShrink:0 }} />
              LearnSkillX Professional Training Programs
            </div>
            <h1 className="hero-h1 font-display">
              Become Industry Ready with{' '}
              <span className="text-gradient">LearnSkillX</span>
            </h1>
            <p className="hero-desc">
              Master the most in-demand technologies through live training,
              hands-on projects, certifications and career-focused learning.
            </p>
            <ul className="hero-highlights">
              {HERO_HIGHLIGHTS.map(item => (
                <li key={item} className="hero-highlight-item">
                  <span className="hero-highlight-icon">
                    <IconCheck style={{ width:12, height:12 }} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="hero-buttons">
              <GradientButton
                icon={IconArrowRight}
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Courses
              </GradientButton>
            
            </div>
          </div>

          <div className="hero-right">
            <div style={{ position:'absolute', inset:0 }}>
              {HERO_BADGES.map(badge => (
                <span
                  key={badge.label}
                  className="hero-badge animate-float"
                  style={{ top: badge.top, left: badge.left, animationDelay: `${badge.delay}s` }}
                >
                  {badge.label}
                </span>
              ))}
            </div>
            <TerminalPanel />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// COURSE CARD
// ─────────────────────────────────────────────
function CourseCard({ course }) {
  const Icon = COURSE_ICONS[course.icon] || IconGraduationCap
  return (
    <div className="course-card">
      <div className="course-card-glow" />
      <div className="course-card-icon"><Icon /></div>
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <div className="course-card-footer">
        <span className="course-card-duration font-mono">
          <IconClock style={{ width:14, height:14 }} />
          {course.duration}
        </span>
        <a href="#syllabus" className="course-card-link font-display">
          Learn More
          <IconArrowUpRight style={{ width:14, height:14 }} />
        </a>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// COURSES SECTION
// ─────────────────────────────────────────────
function CoursesSection() {
  return (
    <section id="courses" className="courses-section">
      <div className="blob animate-blob" style={{ width:'28rem', height:'28rem', top:'-10rem', right:'-10rem', background:'rgba(79,70,229,0.25)', filter:'blur(110px)' }} />
      <div className="blob animate-blob" style={{ width:'26rem', height:'26rem', top:'5rem', left:'-8rem', background:'rgba(6,182,212,0.20)', filter:'blur(110px)', animationDelay:'4s' }} />
      <div className="blob animate-blob" style={{ width:'24rem', height:'24rem', bottom:'-8rem', left:'50%', background:'rgba(124,58,237,0.20)', filter:'blur(110px)', animationDelay:'8s' }} />
      <div className="grid-overlay" style={{ maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }} />
      <div className="container" style={{ position:'relative' }}>
        <SectionHeading
          eyebrow="Programs"
          title="Explore Our Courses"
          description="Eight career-focused programs, built around live mentorship and projects that mirror real industry work."
          dark
        />
        <div className="courses-grid">
          {courses.map(course => <CourseCard key={course.id} course={course} />)}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// SYLLABUS SECTION
// ─────────────────────────────────────────────

function SyllabusSection() {
  const [activeCourse, setActiveCourse] = useState(courses[0].id);

  const handleBrochure = () => {
    const pdf = brochures[activeCourse];

    if (pdf) {
      window.open(pdf, "_blank");
    } else {
      alert("Brochure not available.");
    }
  };

  const terms = syllabus[activeCourse] || [];

  return (
    <section id="syllabus" className="syllabus-section">
      <div
        className="blob animate-blob"
        style={{
          width: "30rem",
          height: "30rem",
          top: 0,
          right: 0,
          background: "rgba(79,70,229,0.15)",
          filter: "blur(120px)",
        }}
      />

      <div
        className="blob animate-blob"
        style={{
          width: "26rem",
          height: "26rem",
          bottom: 0,
          left: 0,
          background: "rgba(6,182,212,0.10)",
          filter: "blur(120px)",
          animationDelay: "6s",
        }}
      />

      <div
        className="blob animate-blob"
        style={{
          width: "22rem",
          height: "22rem",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "rgba(124,58,237,0.10)",
          filter: "blur(110px)",
          animationDelay: "11s",
        }}
      />

      <div
        className="grid-overlay"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      <div className="container syllabus-max" style={{ position: "relative" }}>
        <SectionHeading
          eyebrow="Curriculum"
          title="Explore Our Syllabus"
          description="A term-by-term roadmap for every program — pick a course below to see exactly what you'll learn."
          dark
        />

        <div className="syllabus-dl-btn">
          <GradientButton
            icon={IconDownload}
            variant="primary"
            onClick={handleBrochure}
          >
            Download Brochure (PDF)
          </GradientButton>
        </div>

        <div className="syllabus-switcher scrollbar-none">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveCourse(course.id)}
              className={`syllabus-tab font-display ${
                activeCourse === course.id ? "active" : ""
              }`}
            >
              {course.name}
            </button>
          ))}
        </div>

        <div className="syllabus-timeline">
          <div className="syllabus-timeline-line" />

          <div className="syllabus-terms">
            {terms.length > 0 ? (
              terms.map((term) => (
                <div key={term.term} className="syllabus-term">
                  <div className="syllabus-term-num font-mono">
                    {String(term.term).padStart(2, "0")}
                  </div>

                  <div className="syllabus-card">
                    <span className="syllabus-term-label font-mono">
                      Term {String(term.term).padStart(2, "0")}
                    </span>

                    <h3 className="syllabus-module font-display">
                      {term.module}
                    </h3>

                    <ul className="syllabus-topics">
                      {term.topics.map((topic) => (
                        <li key={topic} className="syllabus-topic">
                          <IconCheck
                            style={{
                              width: 16,
                              height: 16,
                              color: "var(--color-emerald-300)",
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>

                    <div className="syllabus-tags">
                      {term.tags.map((tag) => (
                        <span key={tag} className="syllabus-tag font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No syllabus available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
// ─────────────────────────────────────────────
// BENEFITS SECTION
// ─────────────────────────────────────────────
function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="blob animate-blob" style={{ width:'28rem', height:'28rem', top:'-10rem', left:'-10rem', background:'rgba(79,70,229,0.20)', filter:'blur(110px)' }} />
      <div className="blob animate-blob" style={{ width:'26rem', height:'26rem', bottom:'-8rem', right:'-8rem', background:'rgba(6,182,212,0.15)', filter:'blur(110px)', animationDelay:'5s' }} />
      <div className="grid-overlay" style={{ maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }} />
      <div className="container" style={{ position:'relative' }}>
        <SectionHeading
          eyebrow="Included"
          title="Course Benefits"
          description="Every program ships with the same career-focused support system, end to end."
          dark
        />
        <div className="benefits-grid">
          {benefits.map(benefit => (
            <div key={benefit} className="benefit-item">
              <span className="benefit-icon"><IconCheckCircle2 /></span>
              <span className="benefit-label font-display">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// WHY US SECTION
// ─────────────────────────────────────────────
function WhyUsSection() {
  return (
    <section id="why-us" className="whyus-section">
      <div className="blob animate-blob" style={{ width:'30rem', height:'30rem', top:'2.5rem', right:'-10rem', background:'rgba(124,58,237,0.20)', filter:'blur(120px)' }} />
      <div className="blob animate-blob" style={{ width:'26rem', height:'26rem', bottom:'-8rem', left:'2.5rem', background:'rgba(79,70,229,0.20)', filter:'blur(110px)', animationDelay:'6s' }} />
      <div className="grid-overlay" style={{ maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }} />
      <div className="container" style={{ position:'relative' }}>
        <SectionHeading
          eyebrow="The LearnSkillX Edge"
          title="Why LearnSkillX"
          description="A learning experience designed around outcomes, not just content."
          dark
        />
        <div className="whyus-grid">
          {whyUs.map(item => {
            const Icon = WHY_ICONS[item.icon] || IconSparkles
            return (
              <div key={item.title} className="whyus-card">
                <span className="whyus-icon"><Icon /></span>
                <p className="whyus-title font-display">{item.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PRICING SECTION
// ─────────────────────────────────────────────
function PricingSection() {
  return (
    <section id="fees" className="pricing-section">
      <div className="blob" style={{ width:'34rem', height:'34rem', top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'rgba(124,58,237,0.20)', filter:'blur(130px)' }} />
      <div className="blob animate-blob" style={{ width:'22rem', height:'22rem', top:'-5rem', right:'-5rem', background:'rgba(79,70,229,0.15)', filter:'blur(100px)', animationDelay:'3s' }} />
      <div className="blob animate-blob" style={{ width:'22rem', height:'22rem', bottom:'-5rem', left:'-5rem', background:'rgba(6,182,212,0.10)', filter:'blur(100px)', animationDelay:'7s' }} />
      <div className="grid-overlay" style={{ maskImage:'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)' }} />
      <div className="container" style={{ position:'relative' }}>
        <SectionHeading eyebrow="Investment" title="Course Fee" dark />
        <div className="pricing-card">
          <div className="pricing-top-glow" />
          <span className="pricing-badge font-mono">
            <IconSparkles style={{ width:14, height:14 }} />
            Best Value Program
          </span>
          <p className="pricing-label font-mono">Total Course Fee</p>
          <p className="pricing-price font-display">₹20,000</p>
          <div className="pricing-divider" />
          <ul className="pricing-inclusions">
            {PRICING_INCLUSIONS.map(item => (
              <li key={item} className="pricing-inclusion-item">
                <span className="pricing-inclusion-icon">
                  <IconCheck style={{ width:12, height:12 }} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pricing-btn-wrap">
            <GradientButton
              className="btn-full"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register Now
            </GradientButton>
          </div>
          <div className="pricing-bottom-glow" />
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// REGISTRATION FORM
// ─────────────────────────────────────────────
const INITIAL_FORM = { fullName:'', email:'', mobile:'', course:'', qualification:'', college:'', city:'' }

function validate(v) {
  const e = {}
  if (!v.fullName.trim()) e.fullName = 'Full name is required.'
  if (!v.email.trim()) e.email = 'Email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!v.mobile.trim()) e.mobile = 'Mobile number is required.'
  else if (!/^[6-9]\d{9}$/.test(v.mobile.trim())) e.mobile = 'Enter a valid 10-digit mobile number.'
  if (!v.course) e.course = 'Please select a course.'
  if (!v.qualification) e.qualification = 'Please select your qualification.'
  if (!v.college.trim()) e.college = 'College name is required.'
  if (!v.city.trim()) e.city = 'City is required.'
  return e
}

function RegistrationForm() {
  const [values, setValues] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = field => e => setValues(v => ({ ...v, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 900)
  }

  const handleReset = () => { setValues(INITIAL_FORM); setErrors({}); setSubmitted(false) }

  const inputCls = hasError => `field-input${hasError ? ' error' : ''}`

  return (
    <section id="register" className="register-section">
      <div className="blob" style={{ width:'28rem', height:'28rem', bottom:'-5rem', right:'25%', background:'rgba(6,182,212,0.10)', filter:'blur(120px)' }} />
      <div className="blob animate-blob" style={{ width:'26rem', height:'26rem', top:'-8rem', left:'25%', background:'rgba(79,70,229,0.20)', filter:'blur(110px)', animationDelay:'2s' }} />
      <div className="grid-overlay" style={{ maskImage:'radial-gradient(ellipse 70% 80% at 50% 50%, black, transparent)' }} />
      <div className="container register-max" style={{ position:'relative' }}>
        <SectionHeading eyebrow="Get Started" title="Register Now" dark />
        <div className="register-card">
          {submitted ? (
            <div className="register-success">
              <span className="register-success-icon">
                <IconCheckCircle2 style={{ width:32, height:32 }} />
              </span>
              <h3 className="font-display">You're registered, {values.fullName.split(' ')[0]}!</h3>
              <p>Our admissions team will reach out on {values.mobile} within 24 hours with next steps.</p>
              <button onClick={handleReset} className="register-again font-display">
                Register another student
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="register-form">
              <label className="field-label">
                <span className="field-label-text">Full Name</span>
                <input type="text" value={values.fullName} onChange={update('fullName')} placeholder="Aditya Patil" className={inputCls(errors.fullName)} />
                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
              </label>
              <label className="field-label">
                <span className="field-label-text">Email Address</span>
                <input type="email" value={values.email} onChange={update('email')} placeholder="you@example.com" className={inputCls(errors.email)} />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </label>
              <label className="field-label">
                <span className="field-label-text">Mobile Number</span>
                <input type="tel" value={values.mobile} onChange={update('mobile')} placeholder="9876543210" className={inputCls(errors.mobile)} />
                {errors.mobile && <span className="field-error">{errors.mobile}</span>}
              </label>
              <label className="field-label">
                <span className="field-label-text">Select Course</span>
                <select value={values.course} onChange={update('course')} className={inputCls(errors.course)}>
                  <option value="">Choose a program</option>
                  {courses.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                {errors.course && <span className="field-error">{errors.course}</span>}
              </label>
              <label className="field-label">
                <span className="field-label-text">Qualification</span>
                <select value={values.qualification} onChange={update('qualification')} className={inputCls(errors.qualification)}>
                  <option value="">Select qualification</option>
                  {QUALIFICATIONS.map(q => <option key={q} value={q}>{q}</option>)}
                </select>
                {errors.qualification && <span className="field-error">{errors.qualification}</span>}
              </label>
              <label className="field-label">
                <span className="field-label-text">College Name</span>
                <input type="text" value={values.college} onChange={update('college')} placeholder="Your college / university" className={inputCls(errors.college)} />
                {errors.college && <span className="field-error">{errors.college}</span>}
              </label>
              <label className="field-label">
                <span className="field-label-text">City</span>
                <input type="text" value={values.city} onChange={update('city')} placeholder="Pune" className={inputCls(errors.city)} />
                {errors.city && <span className="field-error">{errors.city}</span>}
              </label>
              <div className="register-form-footer" style={{ gridColumn:'1 / -1' }}>
                <GradientButton type="submit" className="btn-full" style={{ maxWidth:'24rem' }}>
                  {submitting
                    ? <span style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}><IconLoader2 /> Submitting...</span>
                    : 'Register Now'
                  }
                </GradientButton>
                <span className="seats-note font-mono">Limited Seats Available</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// TESTIMONIALS SECTION
// ─────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="blob" style={{ width:'32rem', height:'20rem', top:0, left:'50%', transform:'translateX(-50%)', background:'rgba(79,70,229,0.20)', filter:'blur(120px)' }} />
      <div className="blob animate-blob" style={{ width:'24rem', height:'24rem', bottom:'-5rem', left:'-5rem', background:'rgba(124,58,237,0.15)', filter:'blur(110px)', animationDelay:'3s' }} />
      <div className="blob animate-blob" style={{ width:'22rem', height:'22rem', bottom:'2.5rem', right:'-5rem', background:'rgba(6,182,212,0.15)', filter:'blur(110px)', animationDelay:'7s' }} />
      <div className="grid-overlay" style={{ maskImage:'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)' }} />
      <div className="container" style={{ position:'relative' }}>
        <SectionHeading
          eyebrow="Alumni Speak"
          title="What Our Students Say"
          description="Real outcomes from learners who trained, built, and got hired."
          dark
        />
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.name} className="testimonial-card">
              <IconQuote className="testimonial-quote-icon" />
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <IconStar
                    key={idx}
                    style={{
                      width:16, height:16,
                      color: idx < t.rating ? 'var(--color-amber-300)' : 'var(--color-slate-600)',
                      fill:  idx < t.rating ? 'var(--color-amber-300)' : 'none',
                    }}
                  />
                ))}
              </div>
              <p className="testimonial-review">"{t.review}"</p>
              <div className="testimonial-footer">
                <span className="testimonial-avatar font-display">{t.initials}</span>
                <div>
                  <p className="testimonial-name font-display">{t.name}</p>
                  <p className="testimonial-course">{t.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// FAQ SECTION
// ─────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq-section">
      <div className="blob" style={{ width:'30rem', height:'20rem', top:'-8rem', left:'50%', transform:'translateX(-50%)', background:'rgba(124,58,237,0.15)', filter:'blur(120px)' }} />
      <div className="blob animate-blob" style={{ width:'22rem', height:'22rem', bottom:'-5rem', right:0, background:'rgba(6,182,212,0.10)', filter:'blur(110px)', animationDelay:'4s' }} />
      <div className="grid-overlay" style={{ maskImage:'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)' }} />
      <div className="container faq-max" style={{ position:'relative' }}>
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked Questions"
          description="Everything you need to know before you register."
          dark
        />
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={faq.question} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button
                className="faq-trigger"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq-question font-display">{faq.question}</span>
                <span className="faq-icon">
                  <IconPlus style={{ width:16, height:16 }} />
                </span>
              </button>
              <div className="faq-answer">
                <p className="faq-answer-inner">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="blob" style={{ width:'36rem', height:'14rem', top:0, left:'50%', transform:'translateX(-50%)', background:'rgba(79,70,229,0.10)', filter:'blur(110px)' }} />
      <div className="blob" style={{ width:'20rem', height:'16rem', bottom:0, right:0, background:'rgba(124,58,237,0.10)', filter:'blur(100px)' }} />
      <div className="grid-overlay" style={{ maskImage:'radial-gradient(ellipse 100% 60% at 50% 0%, black, transparent)' }} />
      <div className="footer-top-border" />
      <div className="container" style={{ position:'relative' }}>
        <div className="footer-grid">
          <div>
            <a href="#home" className="footer-logo font-display">
              Learn<span className="text-gradient">SkillX</span>
            </a>
            <p className="footer-tagline">
              Learn Today, Lead Tomorrow. Industry-ready training programs in Cloud, AI, Data Science and Full Stack Development.
            </p>
            <div className="footer-socials">
              {FOOTER_SOCIALS.map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="footer-social-link">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="footer-col-title font-display">
              <span className="footer-col-title-bar" />
              Quick Links
            </h4>
            <ul className="footer-links">
              {FOOTER_LINKS.map(link => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title font-display">
              <span className="footer-col-title-bar" />
              Programs
            </h4>
            <ul className="footer-links">
              {FOOTER_PROGRAMS.map(link => (
                <li key={link}><a href="#courses">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title font-display">
              <span className="footer-col-title-bar" />
              Contact
            </h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <IconMail className="footer-contact-icon" style={{ width:16, height:16 }} />
                hello@learnskillx.com
              </li>
              <li className="footer-contact-item">
                <IconPhone className="footer-contact-icon" style={{ width:16, height:16 }} />
                +91 98765 43210
              </li>
              <li className="footer-contact-item">
                <IconMapPin className="footer-contact-icon" style={{ width:16, height:16 }} />
                Pune, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-glow" />
          <p className="footer-copy">© {new Date().getFullYear()} LearnSkillX. All rights reserved.</p>
          <p className="footer-slogan font-mono">Learn Today, Lead Tomorrow</p>
        </div>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────
export default function Course() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-ink)' }}>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <CoursesSection />
        <div className="section-divider" />
        <SyllabusSection />
        <div className="section-divider" />
        <BenefitsSection />
        <div className="section-divider" />
        <WhyUsSection />
        <div className="section-divider" />
        <PricingSection />
        <div className="section-divider" />
        <RegistrationForm />
        <div className="section-divider" />
        <TestimonialsSection />
        <div className="section-divider" />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}