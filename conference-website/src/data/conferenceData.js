export const conference = {
  name: "AISCN",
  fullName: "International Conference on AI, Security, Computing, and Networking",
  edition: "2027",
  tagline: "Fostering Interdisciplinary Collaboration for Next-Generation Intelligent Systems",
  ieeeApproved: true,
  dates: {
    start: "April 9, 2027",
    end: "April 11, 2027",
    display: "April 9–11, 2027",
  },
  location: {
    city: "Taichung",
    country: "Taiwan",
    venue: "Asia University",
    address: "500 Liufeng Rd., Wufeng District, Taichung City 413, Taiwan",
    display: "Asia University, Taichung, Taiwan",
    mapQuery: "Asia+University,+500+Liufeng+Rd,+Wufeng+District,+Taichung+City,+Taiwan",
    mapLink: "https://maps.google.com/?q=Asia+University+Taichung+Taiwan",
  },
  contact: {
    email: "aiscn2027@cyber-conf.com",
    sponsorshipEmail: "aiscn2027@cyber-conf.com",
  },
  submission: {
    deadline: "15 December 2026",
    maxPages: 6,
    language: "English",
    platform: "Microsoft CMT",
    templateUrl: "https://www.ieee.org/conferences/publishing/templates.html",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Dates", href: "#dates" },
  { label: "Call for Papers", href: "#cfp" },
  { label: "Submission", href: "#submission" },
  { label: "Tracks", href: "#tracks" },
  { label: "Awards", href: "#awards" },
  { label: "Committee", href: "#committee" },
  { label: "Register", href: "#register" },
  { label: "Sponsorship", href: "#sponsorship" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

export const aboutContent = {
  paragraphs: [
    "The International Conference on AI, Security, Computing, and Networking (AISCN 2027) is a premier international forum that brings together researchers, academicians, industry experts, practitioners, and policymakers to exchange ideas, present cutting-edge research, and discuss emerging trends in Artificial Intelligence, Cyber Security, Computing Technologies, Communication Systems, and Computer Networks.",
    "AISCN 2027 aims to foster interdisciplinary collaboration and provide a platform for sharing innovative solutions to address the challenges and opportunities arising from next-generation intelligent systems and digital transformation. The conference will feature keynote speeches by distinguished experts, technical paper presentations, industry sessions, tutorials, workshops, and networking opportunities.",
    "Researchers from academia, industry, government organizations, and research laboratories are invited to submit original and unpublished research contributions.",
  ],
  highlights: [
    { title: "IEEE Approved", desc: "Premier international forum with global research visibility", color: "from-ieee-blue to-ieee-light" },
    { title: "6 Research Tracks", desc: "AI, Security, Computing, Networking, IoT, and Data Science", color: "from-gold to-gold-light" },
    { title: "Global Community", desc: "Researchers, industry experts, and policymakers worldwide", color: "from-ieee-dark to-ieee-blue" },
    { title: "Awards & Recognition", desc: "Best Paper, Student Paper, Presentation, and Poster awards", color: "from-slate-700 to-slate-900" },
  ],
};

export const importantDates = [
  { label: "Opening Paper Submission", date: "20 July 2026", status: "upcoming" },
  { label: "Paper Submission Deadline", date: "15 December 2026", status: "upcoming" },
  { label: "Acceptance Notification", date: "31 January 2027", status: "upcoming" },
  { label: "Submission of Final Manuscript & Copyright", date: "15 February 2027", status: "upcoming" },
  { label: "Registration Deadline", date: "15 March 2027", status: "upcoming" },
  { label: "Conference Dates", date: "9–11 April 2027", status: "highlight" },
];

export const tracks = [
  {
    number: 1,
    title: "Artificial Intelligence and Machine Learning",
    description: "Generative AI, LLMs, deep learning, explainable AI, federated learning, and intelligent agents.",
    icon: "brain",
  },
  {
    number: 2,
    title: "Cyber Security and Privacy",
    description: "Network security, cloud & IoT security, blockchain, forensics, threat intelligence, and zero trust.",
    icon: "shield",
  },
  {
    number: 3,
    title: "Computing Technologies",
    description: "Cloud, edge, fog computing, HPC, distributed systems, quantum computing, and digital twins.",
    icon: "cloud",
  },
  {
    number: 4,
    title: "Communication and Networking",
    description: "5G/6G networks, SDN, NFV, wireless networks, vehicular networks, and AI-enabled communications.",
    icon: "network",
  },
  {
    number: 5,
    title: "Internet of Things and Cyber-Physical Systems",
    description: "Industrial IoT, smart manufacturing, healthcare, transportation, and cyber-physical security.",
    icon: "robot",
  },
  {
    number: 6,
    title: "Data Science and Emerging Technologies",
    description: "Big data analytics, knowledge graphs, metaverse, XR, quantum-safe security, and digital transformation.",
    icon: "chart",
  },
];

export const trackTopics = [
  {
    number: 1,
    title: "Artificial Intelligence and Machine Learning",
    topics: [
      "Generative AI and Foundation Models",
      "Large Language Models (LLMs)",
      "Deep Learning and Neural Networks",
      "Explainable and Trustworthy AI",
      "Federated Learning",
      "Reinforcement Learning",
      "AI for Healthcare",
      "AI for Smart Cities",
      "Intelligent Agents and Multi-Agent Systems",
    ],
  },
  {
    number: 2,
    title: "Cyber Security and Privacy",
    topics: [
      "Network Security",
      "Cloud Security",
      "IoT Security",
      "Blockchain Security",
      "Digital Forensics",
      "Malware Analysis",
      "Threat Intelligence",
      "Intrusion Detection and Prevention",
      "Privacy-Preserving Computing",
      "Zero Trust Security",
      "AI for Cyber Defense",
      "Cyber Threat Hunting",
    ],
  },
  {
    number: 3,
    title: "Computing Technologies",
    topics: [
      "Cloud Computing",
      "Edge Computing",
      "Fog Computing",
      "High-Performance Computing",
      "Distributed Systems",
      "Green Computing",
      "Sustainable Computing",
      "Quantum Computing",
      "Digital Twins",
      "Smart Computing Systems",
    ],
  },
  {
    number: 4,
    title: "Communication and Networking",
    topics: [
      "5G and 6G Networks",
      "Software Defined Networking",
      "Network Function Virtualization",
      "Wireless Networks",
      "Mobile Computing",
      "Intelligent Networking",
      "Vehicular Networks",
      "Satellite Communications",
      "Network Automation",
      "AI-Enabled Communication Systems",
    ],
  },
  {
    number: 5,
    title: "Internet of Things and Cyber-Physical Systems",
    topics: [
      "Industrial IoT",
      "Smart Manufacturing",
      "Smart Healthcare Systems",
      "Smart Transportation",
      "Intelligent Infrastructure",
      "Cyber-Physical Security",
      "Sensor Networks",
    ],
  },
  {
    number: 6,
    title: "Data Science and Emerging Technologies",
    topics: [
      "Big Data Analytics",
      "Data Mining",
      "Knowledge Graphs",
      "Information Retrieval",
      "Human-Centered AI",
      "Metaverse Technologies",
      "Extended Reality (XR)",
      "Quantum-Safe Security",
      "Sustainable Digital Transformation",
    ],
  },
];

export const awards = [
  { title: "Best Paper Award", desc: "Recognizing the highest-quality research contribution with significant impact." },
  { title: "Best Student Paper Award", desc: "Honoring outstanding research led by student authors." },
  { title: "Best Presentation Award", desc: "Celebrating exceptional clarity and delivery of research findings." },
  { title: "Best Poster Award", desc: "Acknowledging innovative and visually compelling poster presentations." },
];

export const sponsorshipBenefits = [
  "Increase brand visibility among an international audience",
  "Connect with leading researchers, academics, and industry professionals",
  "Promote products, services, research initiatives, and innovation programs",
  "Support the advancement of AI, cybersecurity, computing, and networking research",
  "Establish partnerships with universities, research centers, and technology organizations",
  "Access potential recruitment opportunities with highly skilled students and researchers",
];

export const committees = [
  {
    title: "Honorary Chairs",
    members: [
      "Jeffrey J. P. Tsai, President, Asia University, Taiwan",
      "Francesco Palmieri, University of Salerno, Italy",
    ],
  },
  {
    title: "General Chairs",
    members: [
      "Brij Gupta, Asia University, Taiwan",
      "V. P. Meena, NIT Jamshedpur and Chair, IEEE Systems Council Systems Education Technical Committee, USA",
    ],
  },
  {
    title: "Conference Chairs",
    members: [
      "Ching-Hsien Hsu, Asia University, Taiwan",
      "Kwok Tai Chui, The Open University of Hong Kong, Hong Kong",
    ],
  },
  {
    title: "Program Chairs",
    members: [
      "Shiyan Hu, Michigan Technological University, USA",
      "Chi-Wen Lung, Department of Creative Product Design, Asia University, Taiwan",
      "Arcangelo Castiglione, University of Salerno, Fisciano, Salerno, Italy",
      "Mu-Yen Chen, National Cheng Kung University, Tainan, Taiwan",
    ],
  },
  {
    title: "Publication Chairs",
    members: [
      "Chun-Yuan Lin, Asia University, Taiwan",
      "Gregorio Martinez Perez, University of Murcia (UMU), Spain",
      "Tzu-Chuen Lu, National Chin-Yi University of Technology, Taiwan",
    ],
  },
  {
    title: "Publicity Chairs",
    members: [
      "Nadia Nedjah, State University of Rio de Janeiro, Brazil",
      "Agung Mulyo Widodo, Esa Unggul University, Indonesia",
      "Mosiur Rahaman, King Mongkut's University of Technology Thonburi, Thailand",
      "Sunil Kumar Singh, CCET, Panjab University, Chandigarh, India",
    ],
  },
  {
    title: "Workshop Chairs",
    members: [
      "Vijayan Sugumaran, Oakland University, Rochester, USA",
      "Akshat Gaurav, Ronin Institute, USA",
      "Francesco Colace, University of Salerno, Italy",
    ],
  },
  {
    title: "Industry Chairs",
    members: ["Abhay Ratnaparkhi, eBuy Inc., USA"],
  },
  {
    title: "Finance Chairs",
    members: ["Vincent Shin-Hung Pan, Chaoyang University of Technology, Taiwan"],
  },
  {
    title: "Registration Chairs",
    members: ["Priyanka Chaurasia, University of Ulster, UK"],
  },
  {
    title: "Local Arrangement Chairs",
    members: [
      "Moon Jusung, Asia University, Taiwan",
      "Szu-Ting Wang, Chaoyang University of Technology, Taiwan",
    ],
  },
  {
    title: "International Advisory Committee",
    members: [
      "Michael Sheng, Macquarie University, Sydney, Australia",
      "Francesco Colace, University of Salerno, Italy",
      "Dragan Peraković, University of Zagreb, Croatia",
      "Prabin Kumar Panigrahi, Indian Institute of Management Indore, India",
      "Konstantinos Psannis, University of Macedonia, Greece",
      "Arcangelo Castiglione, University of Salerno, Fisciano, Salerno, Italy",
      "Priyanka Chaurasia, University of Ulster, UK",
      "Kwok Tai Chui, Hong Kong Metropolitan University (HKMU), Hong Kong",
      "Sunil Kumar Singh, CCET, Panjab University, Chandigarh, India",
      "Harlinda Syofyan, Universitas Esa Unggul, Jakarta, Indonesia",
      "Aminul Haque, Aligarh Muslim University, India",
      "Jee Ann Marie Guibone, Northern Bukidnon State College, Philippine",
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      "Imran Razzak, Deakin University, Australia",
      "Milad Taleby Ahvanooey, Nanjing University (NJU), P.R. China",
      "Ayan Mondal, Indian Institute of Technology Indore, India",
      "Andrea Bruno, University of Salerno, Italy",
      "Zeeshan A. Khan, National Yunlin University of Science and Technology, Taiwan",
      "Arcangelo Castiglione, University of Salerno, Fisciano, Salerno, Italy",
      "M. M. F. Tam, Hang Seng University of Hong Kong",
      "Anupama Mishra, Swami Rama Himalayan University, Dehradun, India",
      "Manish Kumar Goyal, Indian Institute of Technology Indore, India",
      "Yining Liu, Guilin University of Electronic Technology, China",
      "Ammar Almomani, Al-Balqa Applied University, Jordan",
      "Chen Chi-Hsiung, Department of Information Science and Applications, Asia University, Taiwan",
      "Balwinder Raj, National Institute of Technology Jalandhar, India",
      "Francisco José García-Peñalvo, University of Salamanca, Spain",
      "Ching-Hsien Hsu, Asia University, Taiwan",
      "Jinsong Wu, University of Chile, Chile",
      "Shingo Yamaguchi, Yamaguchi University, Japan",
      "Xiaochun Cheng, Middlesex University, London, UK",
      "Andrew Ip, University of Saskatchewan, Canada",
      "Michael Sheng, Macquarie University, Sydney, Australia",
      "Anagha Jamthe, University of Texas, Austin, USA",
      "Aniket Mahanti, The University of Auckland, New Zealand",
      "Suryadip Chakraborty, Johnson C. Smith University, USA",
      "Tu N. Nguyen, Kennesaw State University, USA",
      "Virendra Bhavsar, Univ. of New Brunswick, Canada",
      "Justin Zhang, University of North Florida, USA",
      "Chinthaka Premachandra, Shibaura Institute of Technology, Japan",
      "Mohammed Ali, University of Manchester, UK",
      "T. Perumal, Universiti Putra Malaysia (UPM), Malaysia",
      "Marjan Kuchaki Rafsanjani, Shahid Bahonar University of Kerman, Kerman, Iran",
      "Rajhans Mishra, Indian Institute of Management Indore, India",
      "Srivathsan Srinivasagopalan, AT&T, USA",
      "Sugam Sharma, Iowa State University, United States",
      "Manoj Gupta, SMVDU, Katra, Jammu and Kashmir, India",
      "Francesco Palmieri, University of Salerno, Italy",
      "T. P. Sharma, NIT Hamirpur",
      "Pethuru Raj, Vice President, Reliance Jio Infocomm. Ltd (RJIL), India",
      "Mouna Jouini, SMART Laboratory, University of Tunis, Tunisia",
      "Angela Amphawan, University Malaysia, Malaysia",
      "Phuc Do, University of Information Technology, Vietnam",
      "Ahmed A. Abd El-Latif, Menoufia University, Egypt",
    ],
  },
];

export const stats = [
  { value: "6", label: "Research Tracks" },
  { value: "40+", label: "TPC Members" },
  { value: "4", label: "Conference Awards" },
  { value: "3", label: "Conference Days" },
];
