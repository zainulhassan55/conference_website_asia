export const conference = {
  name: "AISCN",
  fullName: "International Conference on AI, Security, Computing, and Networking",
  edition: "2027",
  tagline: "All accepted and presented papers of AISCN 2027 will be submitted for inclusion in the IEEE Xplore Digital Library subject to compliance with IEEE quality and publication requirements.",
  ieeeLogo: `${import.meta.env.BASE_URL}ieee_logo.png`,
  ieeeSmcLogo: `${import.meta.env.BASE_URL}smc_logo.png`,
  auLogo: `${import.meta.env.BASE_URL}au_logo.png`,
  ccriLogo: `${import.meta.env.BASE_URL}ccri_logo.png`,
  scopusLogo: `${import.meta.env.BASE_URL}scopus_logo.svg`,
  compendexLogo: `${import.meta.env.BASE_URL}compendex_logo.png`,
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
    cmt3Url: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FAISCN2027",
  },
  logo: `${import.meta.env.BASE_URL}new_logo.jpeg`,
};

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Authors",
    children: [
      { label: "Call for Papers", href: "/call-for-papers" },
      { label: "Submission", href: "/submission" },
      { label: "Registration", href: "/register" },
    ],
  },
  { label: "Chair Message", href: "/chair-message" },
  {
    label: "Program",
    children: [
      { label: "Committee", href: "/committee" },
      { label: "Tutorials & Workshops", href: "/tutorials" },
      { label: "Keynote Speakers", href: "/speakers" },
      { label: "Conference Topics", href: "/tracks" },
      { label: "Awards", href: "/awards" },
      { label: "Venue", href: "/venue" },
    ],
  },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Important Dates", href: "/dates" },
  { label: "Contact Us", href: "/contact" },
];

export const callForPapersIntro =
  "We solicit original research and technical papers not published elsewhere. The papers can be theoretical, practical and application oriented on the following conference tracks but not limited to:";

export const navLinks = navItems.flatMap((item) =>
  item.children ? item.children : [item]
);

export const aboutContent = {
  paragraphs: [
    "The International Conference on AI, Security, Computing, and Networking (AISCN 2027) is a premier international forum that brings together researchers, academicians, industry experts, practitioners, and policymakers to exchange ideas, present cutting-edge research, and discuss emerging trends in Artificial Intelligence, Cyber Security, Computing Technologies, Communication Systems, and Computer Networks.",
    "AISCN 2027 aims to foster interdisciplinary collaboration and provide a platform for sharing innovative solutions to address the challenges and opportunities arising from next-generation intelligent systems and digital transformation. The conference will feature keynote speeches by distinguished experts, technical paper presentations, industry sessions, tutorials, workshops, and networking opportunities.",
    "Researchers from academia, industry, government organizations, and research laboratories are invited to submit original and unpublished research contributions.",
  ],
  highlights: [
    { title: "International Forum", desc: "Premier international forum with global research visibility", color: "from-ieee-blue to-ieee-light" },
    { title: "6 Research Tracks", desc: "AI, Security, Computing, Networking, IoT, and Data Science", color: "from-gold to-gold-light" },
    { title: "Global Community", desc: "Researchers, industry experts, and policymakers worldwide", color: "from-ieee-dark to-ieee-blue" },
    { title: "Awards & Recognition", desc: "Best Paper, Student Paper, Presentation, and Poster awards", color: "from-slate-700 to-slate-900" },
  ],
};

export const importantDates = [
  { label: "Opening Paper Submission", date: "01 July 2026", status: "upcoming" },
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
      "Prof. N. P. Padhy, Director, Malaviya National Institute of Technology Jaipur, India",
      "Prof. Goutam Sutradhar, Director, National Institute of Technology Jamshedpur, India",
    ],
  },
  {
    title: "General Chairs",
    members: [
      "Brij Gupta, Asia University, Taiwan",
      "V. P. Meena, NIT Jamshedpur and Chair, Student Chapter Educational Program Subcommittee (Regions 1–10), IEEE Systems Council, USA",
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
      "Zain Ul Hassan, Asia University, Taiwan",
    ],
  },
  {
    title: "International Advisory Committee",
    members: [
      "Mr. Deepak Mathur, 2024 IEEE Vice President, MGA",
      "Prof. Rajesh Kumar, MNIT Jaipur",
      "Prof. Radhakant Padhi, Indian Institute of Science, Bengaluru",
      "Dr. Fred Schindler, Candidate, IEEE 2027 President Elect",
      "Dr. S. K. Varshney, Professor Emeritus, Vinayaka Missions Research Foundation; Former Advisor, DST, Government of India",
      "Dr. Aloknath De, Founder & CEO, TechCrafter.cps",
      "Dr. Rahul Kumar Dubey, Bosch Global Software Technologies, Bengaluru, India",
      "Dr. Tapan Misra, Founding Director & Chief Scientist, Sisir Radar",
      "Prof. Dr. Karthikeyan S., Chairman, Institution of Engineers (India)",
      "Prof. Francesco Benedetto, Università degli Studi Roma Tre, Italy",
      "Prof. Saroj Kumar Sarangi, National Institute of Technology Jamshedpur",
      "Prof. Ersan Kabalcı, Nevşehir Hacı Bektaş Veli University, Türkiye",
      "Prof. Bhim Singh, Emeritus Professor & ANRF National Science Chair, IIT Delhi, India",
      "Prof. Dr. Valliappan Raju, GISMA University of Applied Sciences, Germany",
      "Prof. Asheesh K. Singh, MNNIT Allahabad, India",
      "Dr. Ranjan Kumar Behera, Indian Institute of Technology Patna",
      "Prof. Ramesh C. Bansal, University of Sharjah",
      "Prof. Pankaj Rai, Director, BIT Sindri, India",
      "Prof. Premalata Jena, Indian Institute of Technology Roorkee, India",
      "Mr. Manish Advani, Advisor to Chairman, RSB Global",
      "Prof. Sanjeev Kumar Shrivastava – Professor, ECE and Associate Director (Skilling & Research), Dayananda Sagar University, Bengaluru",
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

export const speakers = [
  {
    name: "TBA",
    title: "Keynote Speaker",
    affiliation: "To be announced",
    topic: "To be announced",
  },
];

export const welcomeMessage = {
  opening: "Dear Researchers, Academicians, Industry Professionals, and Students,",
  paragraphs: [
    "It is our great pleasure to welcome you to the International Conference on AI, Security, Computing, and Networking (AISCN 2027), to be held in hybrid mode during April 9–11, 2027, at Asia University, Taichung, Taiwan.",
    "It is our privilege to invite researchers, academicians, industry experts, practitioners, and students from around the world to participate in AISCN 2027. Organized by Asia University, Taiwan, and the International Center for AI and Cyber Security Research and Innovations (CCRI), Asia University, Taiwan, the conference serves as a premier international platform for the dissemination of innovative research and the exchange of ideas in the fields of Artificial Intelligence, Cyber Security, Computing, and Networking.",
    "AISCN 2027 (Conference Record #73131, ISBN: 979-8-3195-2578-9) is technically co-sponsored by the IEEE Systems, Man, and Cybernetics Society (IEEE SMC). The conference is dedicated to fostering interdisciplinary collaboration and advancing the frontiers of intelligent systems, machine learning, secure computing, cyber resilience, communication networks, data analytics, and emerging digital technologies.",
    "The technical program of AISCN 2027 will feature keynote addresses from distinguished scholars and industry leaders, high-quality paper presentations, special sessions, tutorials, and networking opportunities. These activities are designed to encourage the exchange of knowledge, stimulate innovation, and establish meaningful collaborations among participants from academia, industry, and government organizations.",
    "We are committed to maintaining the highest standards of technical excellence and scholarly integrity. All accepted and presented papers will be submitted for inclusion in the IEEE Xplore Digital Library, subject to compliance with IEEE quality standards and publication requirements.",
    "We sincerely thank the authors, reviewers, technical program committee members, keynote speakers, sponsors, and volunteers for their valuable contributions and unwavering support. Their dedication is instrumental to the success of AISCN 2027.",
    "We warmly welcome you to Taichung and look forward to your participation in AISCN 2027. We are confident that the conference will provide an inspiring environment for learning, collaboration, and innovation, while fostering long-lasting professional relationships and advancing research that addresses global challenges.",
    "We look forward to meeting you at AISCN 2027.",
  ],
  chairs: [
    {
      name: "Prof. Brij B. Gupta",
      lines: [
        "Director, International Center for AI and Cyber Security Research and Innovations (CCRI)",
        "Asia University, Taiwan",
        "General Chair, AISCN 2027",
        "Founder,  AISCN Series"
      ],
    },
    {
      name: "Dr. Veerpratap Meena",
      lines: [
        "Assistant Professor, Department of Electrical Engineering",
        "National Institute of Technology Jamshedpur, India",
        "Chair, Student Chapter Educational Program Subcommittee (Regions 1–10), IEEE Systems Council, USA",
        "General Chair, AISCN 2027",
        "Founder,  AISCN Series"
      ],
    },
  ],
};

export const workshopProposal = {
  importantDates: [
    { label: "Workshop Proposal Submission", date: "August 30, 2026" },
    { label: "Proposal Acceptance Notification", date: "September 20, 2026" },
  ],
  scope: [
    "AISCN 2027 invites proposals for workshops to be held in conjunction with the main conference. The workshops intend to cover specialized topics through a combination of regular papers, panel discussions, keynotes, hands-on workshops, conference white papers, and possibly poster presentations. Workshops are expected to highlight current topics related to technical issues that encourage active participation from students, academia, government, and industry professionals.",
    "The workshop organizers must submit a proposal in the specified template, clearly describing: the motivation, scope/topics, the workshop format (i.e., duration of presentations, number of expected presentations, whether there are regular paper presentations, panel discussion, hands-on session or joint Q&A session) and whether the proposal is for a full-day (6 hours) or half-day (3 hours). If the proposal is successful, the workshop organizers will be required to set up the call for papers, organize the peer reviews and manage the workshop paper acceptance. Accepted and presented workshop papers will appear in the conference proceedings.",
  ],
  templateFields: [
    "Workshop Title",
    "Aim and Scope (150–300 words)",
    "Topics Of Interest",
    "Chair details and Biography",
    "Potential Contributors",
  ],
};

