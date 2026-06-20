export const conference = {
  name: "ICISEA",
  fullName: "International Conference on Intelligent Systems and Engineering Applications",
  edition: "2026",
  tagline: "Advancing Innovation Through Intelligent Systems",
  ieeeApproved: true,
  dates: {
    start: "October 15, 2026",
    end: "October 17, 2026",
    display: "October 15–17, 2026",
  },
  location: {
    city: "New Delhi",
    country: "India",
    venue: "India International Convention & Expo Centre",
    display: "New Delhi, India",
  },
  contact: {
    email: "icisea2026@conference.org",
    phone: "+91 11 2345 6789",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Dates", href: "#dates" },
  { label: "Call for Papers", href: "#cfp" },
  { label: "Speakers", href: "#speakers" },
  { label: "Tracks", href: "#tracks" },
  { label: "Committee", href: "#committee" },
  { label: "Register", href: "#register" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

export const importantDates = [
  { label: "Paper Submission Deadline", date: "May 31, 2026", status: "upcoming" },
  { label: "Notification of Acceptance", date: "July 15, 2026", status: "upcoming" },
  { label: "Camera-Ready Submission", date: "August 15, 2026", status: "upcoming" },
  { label: "Early Bird Registration", date: "September 1, 2026", status: "upcoming" },
  { label: "Conference Dates", date: "October 15–17, 2026", status: "highlight" },
];

export const tracks = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Deep learning, NLP, computer vision, and intelligent decision systems.",
    icon: "brain",
  },
  {
    title: "Internet of Things & Cyber-Physical Systems",
    description: "Smart sensors, edge computing, and connected infrastructure.",
    icon: "network",
  },
  {
    title: "Software Engineering & Cloud Computing",
    description: "DevOps, microservices, distributed systems, and cloud-native apps.",
    icon: "cloud",
  },
  {
    title: "Data Science & Big Data Analytics",
    description: "Data mining, visualization, predictive analytics, and knowledge discovery.",
    icon: "chart",
  },
  {
    title: "Cybersecurity & Privacy",
    description: "Network security, cryptography, threat detection, and privacy-preserving AI.",
    icon: "shield",
  },
  {
    title: "Robotics & Automation",
    description: "Autonomous systems, industrial automation, and human-robot interaction.",
    icon: "robot",
  },
];

export const speakers = [
  {
    name: "Prof. Dr. Rajesh Kumar",
    title: "Director of AI Research",
    affiliation: "Indian Institute of Technology Delhi",
    topic: "The Future of Trustworthy AI Systems",
  },
  {
    name: "Dr. Sarah Mitchell",
    title: "Senior Research Scientist",
    affiliation: "MIT Computer Science & AI Lab",
    topic: "Scalable Machine Learning for Real-World Applications",
  },
  {
    name: "Prof. Wei Zhang",
    title: "Chair of Intelligent Systems",
    affiliation: "Tsinghua University, China",
    topic: "Edge Intelligence and IoT Ecosystems",
  },
  {
    name: "Dr. Ahmed Hassan",
    title: "Chief Technology Officer",
    affiliation: "IEEE Fellow, Google Research",
    topic: "Responsible AI: Ethics, Governance, and Impact",
  },
];

export const committee = {
  general: [
    { name: "Prof. Gupta", role: "General Chair", affiliation: "University Department" },
    { name: "Dr. Priya Sharma", role: "Co-General Chair", affiliation: "National Institute of Technology" },
  ],
  program: [
    { name: "Prof. Michael Chen", role: "Program Chair", affiliation: "Stanford University" },
    { name: "Dr. Ananya Patel", role: "Program Co-Chair", affiliation: "IIT Bombay" },
    { name: "Prof. James Wilson", role: "Technical Chair", affiliation: "University of Cambridge" },
  ],
  organizing: [
    { name: "Dr. Vikram Singh", role: "Organizing Chair", affiliation: "Delhi Technological University" },
    { name: "Ms. Neha Gupta", role: "Publicity Chair", affiliation: "Conference Secretariat" },
    { name: "Mr. Arjun Mehta", role: "Finance Chair", affiliation: "Conference Secretariat" },
  ],
};

export const registrationTiers = [
  {
    name: "Student",
    early: "₹3,500",
    regular: "₹5,000",
    features: ["Full conference access", "Conference proceedings", "Lunch & refreshments", "Certificate of participation"],
  },
  {
    name: "Academic",
    early: "₹7,000",
    regular: "₹9,500",
    features: ["Full conference access", "Conference proceedings", "Gala dinner", "Networking sessions", "Certificate of participation"],
    popular: true,
  },
  {
    name: "Industry",
    early: "₹12,000",
    regular: "₹15,000",
    features: ["Full conference access", "Conference proceedings", "Gala dinner", "Exhibition access", "Priority seating", "Certificate of participation"],
  },
];

export const stats = [
  { value: "500+", label: "Expected Participants" },
  { value: "30+", label: "Countries Represented" },
  { value: "200+", label: "Paper Submissions" },
  { value: "50+", label: "Expert Reviewers" },
];
