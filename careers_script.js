const jobsData = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        department: "engineering",
        experience: "senior",
        location: "bangalore",
        type: "Full-time",
        salary: "₹15-25 LPA",
        posted: "2 days ago",
        description: "Join our engineering team to build scalable web applications using modern technologies like React, Node.js, and cloud platforms.",
        tags: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
        requirements: [
            "5+ years of full-stack development experience",
            "Expertise in React, Node.js, and TypeScript",
            "Experience with cloud platforms (AWS/Azure/GCP)",
            "Strong understanding of database design and optimization",
            "Experience with microservices architecture"
        ],
        responsibilities: [
            "Design and develop scalable web applications",
            "Collaborate with cross-functional teams",
            "Mentor junior developers",
            "Participate in architectural decisions",
            "Ensure code quality and best practices"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health insurance for family",
            "Flexible working hours",
            "Learning and development budget",
            "Modern office with latest tech"
        ]
    },
    {
        id: 2,
        title: "Machine Learning Engineer",
        department: "ai-ml",
        experience: "mid",
        location: "remote",
        type: "Full-time",
        salary: "₹12-20 LPA",
        posted: "1 week ago",
        description: "Build and deploy ML models to solve complex business problems using cutting-edge AI technologies.",
        tags: ["Python", "TensorFlow", "PyTorch", "MLOps", "Docker"],
        requirements: [
            "3+ years of ML engineering experience",
            "Strong Python programming skills",
            "Experience with TensorFlow/PyTorch",
            "Knowledge of MLOps practices",
            "Experience with cloud ML platforms"
        ],
        responsibilities: [
            "Develop and deploy ML models",
            "Build data pipelines",
            "Optimize model performance",
            "Collaborate with data scientists",
            "Implement MLOps best practices"
        ],
        benefits: [
            "Remote work flexibility",
            "Conference attendance budget",
            "Latest ML tools and platforms",
            "Research publication support",
            "Stock options"
        ]
    },
    {
        id: 3,
        title: "DevOps Engineer",
        department: "cloud",
        experience: "mid",
        location: "hybrid",
        type: "Full-time",
        salary: "₹10-18 LPA",
        posted: "3 days ago",
        description: "Manage cloud infrastructure and CI/CD pipelines to ensure reliable and scalable deployments.",
        tags: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins"],
        requirements: [
            "3+ years of DevOps experience",
            "Strong knowledge of AWS/Azure/GCP",
            "Experience with Kubernetes and Docker",
            "Infrastructure as Code (Terraform/CloudFormation)",
            "CI/CD pipeline management"
        ],
        responsibilities: [
            "Manage cloud infrastructure",
            "Build and maintain CI/CD pipelines",
            "Monitor system performance",
            "Implement security best practices",
            "Automate deployment processes"
        ],
        benefits: [
            "Hybrid work model",
            "Certification reimbursement",
            "On-call compensation",
            "Latest DevOps tools",
            "Career growth opportunities"
        ]
    },
    {
        id: 4,
        title: "Data Scientist",
        department: "data",
        experience: "senior",
        location: "bangalore",
        type: "Full-time",
        salary: "₹18-28 LPA",
        posted: "5 days ago",
        description: "Extract insights from complex datasets and build predictive models to drive business decisions.",
        tags: ["Python", "R", "SQL", "Tableau", "Statistics"],
        requirements: [
            "5+ years of data science experience",
            "Advanced degree in Statistics/Mathematics/CS",
            "Expertise in Python/R and SQL",
            "Experience with big data technologies",
            "Strong statistical modeling skills"
        ],
        responsibilities: [
            "Analyze complex datasets",
            "Build predictive models",
            "Create data visualizations",
            "Present insights to stakeholders",
            "Collaborate with engineering teams"
        ],
        benefits: [
            "Competitive compensation",
            "Research opportunities",
            "Data science conferences",
            "Flexible schedule",
            "Innovation time"
        ]
    },
    {
        id: 5,
        title: "UX/UI Designer",
        department: "design",
        experience: "mid",
        location: "bangalore",
        type: "Full-time",
        salary: "₹8-15 LPA",
        posted: "1 week ago",
        description: "Create intuitive and beautiful user experiences for our web and mobile applications.",
        tags: ["Figma", "Sketch", "Prototyping", "User Research", "Design Systems"],
        requirements: [
            "3+ years of UX/UI design experience",
            "Proficiency in Figma, Sketch, Adobe Creative Suite",
            "Strong portfolio demonstrating design process",
            "Experience with user research methods",
            "Knowledge of front-end technologies"
        ],
        responsibilities: [
            "Design user interfaces and experiences",
            "Conduct user research and testing",
            "Create and maintain design systems",
            "Collaborate with product and engineering",
            "Present design concepts to stakeholders"
        ],
        benefits: [
            "Creative work environment",
            "Design conference tickets",
            "Latest design tools",
            "Portfolio development support",
            "Flexible creative time"
        ]
    },
    {
        id: 6,
        title: "Product Manager",
        department: "product",
        experience: "senior",
        location: "bangalore",
        type: "Full-time",
        salary: "₹20-35 LPA",
        posted: "4 days ago",
        description: "Drive product strategy and roadmap while working closely with engineering and design teams.",
        tags: ["Product Strategy", "Analytics", "Roadmapping", "User Research", "Agile"],
        requirements: [
            "5+ years of product management experience",
            "Strong analytical and strategic thinking",
            "Experience with product analytics tools",
            "Technical background preferred",
            "Excellent communication skills"
        ],
        responsibilities: [
            "Define product vision and strategy",
            "Manage product roadmap",
            "Analyze user feedback and metrics",
            "Coordinate with cross-functional teams",
            "Drive product launches"
        ],
        benefits: [
            "High impact role",
            "Equity participation",
            "Product conferences",
            "Leadership development",
            "Strategic decision making"
        ]
    },
    {
        id: 7,
        title: "Frontend Developer",
        department: "engineering",
        experience: "mid",
        location: "remote",
        type: "Full-time",
        salary: "₹8-16 LPA",
        posted: "6 days ago",
        description: "Build responsive and performant user interfaces using modern frontend technologies.",
        tags: ["React", "TypeScript", "CSS", "Next.js", "Tailwind"],
        requirements: [
            "3+ years of frontend development experience",
            "Expertise in React and TypeScript",
            "Strong CSS and responsive design skills",
            "Experience with modern build tools",
            "Knowledge of web performance optimization"
        ],
        responsibilities: [
            "Develop responsive web applications",
            "Implement pixel-perfect designs",
            "Optimize application performance",
            "Write clean, maintainable code",
            "Collaborate with designers and backend developers"
        ],
        benefits: [
            "Remote work flexibility",
            "Latest frontend tools",
            "Code review culture",
            "Professional development",
            "Open source contributions"
        ]
    },
    {
        id: 8,
        title: "Backend Developer",
        department: "engineering",
        experience: "mid",
        location: "bangalore",
        type: "Full-time",
        salary: "₹10-18 LPA",
        posted: "1 week ago",
        description: "Design and build robust backend systems and APIs that power our applications.",
        tags: ["Node.js", "Python", "PostgreSQL", "Redis", "Microservices"],
        requirements: [
            "3+ years of backend development experience",
            "Strong knowledge of Node.js or Python",
            "Experience with databases and caching",
            "Understanding of microservices architecture",
            "API design and development skills"
        ],
        responsibilities: [
            "Design and develop APIs",
            "Build scalable backend systems",
            "Optimize database performance",
            "Implement security best practices",
            "Monitor and debug applications"
        ],
        benefits: [
            "Technical challenges",
            "System design ownership",
            "Performance optimization focus",
            "Mentorship opportunities",
            "Technology conferences"
        ]
    },
    {
        id: 9,
        title: "Sales Development Representative",
        department: "sales",
        experience: "entry",
        location: "bangalore",
        type: "Full-time",
        salary: "₹6-12 LPA + Commission",
        posted: "2 days ago",
        description: "Generate leads and build relationships with potential clients to drive business growth.",
        tags: ["Sales", "Lead Generation", "CRM", "Communication", "B2B"],
        requirements: [
            "1-2 years of sales experience",
            "Excellent communication skills",
            "Experience with CRM tools",
            "Strong networking abilities",
            "Goal-oriented mindset"
        ],
        responsibilities: [
            "Generate qualified leads",
            "Conduct outbound sales activities",
            "Build client relationships",
            "Manage sales pipeline",
            "Achieve sales targets"
        ],
        benefits: [
            "Commission-based earnings",
            "Sales training programs",
            "Career advancement opportunities",
            "Travel opportunities",
            "Performance bonuses"
        ]
    },
    {
        id: 10,
        title: "Quality Assurance Engineer",
        department: "engineering",
        experience: "mid",
        location: "bangalore",
        type: "Full-time",
        salary: "₹7-14 LPA",
        posted: "3 days ago",
        description: "Ensure software quality through comprehensive testing strategies and automation.",
        tags: ["Testing", "Automation", "Selenium", "API Testing", "Quality"],
        requirements: [
            "3+ years of QA experience",
            "Experience with test automation tools",
            "Knowledge of testing methodologies",
            "API testing experience",
            "Strong attention to detail"
        ],
        responsibilities: [
            "Design and execute test plans",
            "Develop automated test scripts",
            "Perform manual and automated testing",
            "Report and track defects",
            "Ensure quality standards"
        ],
        benefits: [
            "Quality-focused culture",
            "Automation tools training",
            "Process improvement opportunities",
            "Cross-team collaboration",
            "Professional certifications"
        ]
    },
    {
        id: 11,
        title: "Mobile App Developer",
        department: "engineering",
        experience: "mid",
        location: "remote",
        type: "Full-time",
        salary: "₹9-17 LPA",
        posted: "5 days ago",
        description: "Develop native and cross-platform mobile applications for iOS and Android.",
        tags: ["React Native", "Flutter", "iOS", "Android", "Mobile"],
        requirements: [
            "3+ years of mobile development experience",
            "Experience with React Native or Flutter",
            "Knowledge of native iOS/Android development",
            "App store deployment experience",
            "Mobile UI/UX best practices"
        ],
        responsibilities: [
            "Develop mobile applications",
            "Implement mobile UI designs",
            "Optimize app performance",
            "Handle app store submissions",
            "Debug and fix mobile issues"
        ],
        benefits: [
            "Mobile-first development",
            "Remote work flexibility",
            "Latest mobile technologies",
            "App store recognition",
            "Cross-platform expertise"
        ]
    },
    {
        id: 12,
        title: "Cybersecurity Analyst",
        department: "engineering",
        experience: "mid",
        location: "bangalore",
        type: "Full-time",
        salary: "₹10-18 LPA",
        posted: "1 week ago",
        description: "Protect our systems and data through security monitoring, analysis, and incident response.",
        tags: ["Security", "Monitoring", "Incident Response", "Compliance", "Risk"],
        requirements: [
            "3+ years of cybersecurity experience",
            "Knowledge of security frameworks",
            "Experience with security tools",
            "Incident response experience",
            "Security certifications preferred"
        ],
        responsibilities: [
            "Monitor security events",
            "Investigate security incidents",
            "Implement security controls",
            "Conduct risk assessments",
            "Ensure compliance standards"
        ],
        benefits: [
            "Critical security role",
            "Security training and certifications",
            "Incident response experience",
            "Latest security tools",
            "Industry recognition"
        ]
    },
    {
        id: 13,
        title: "Technical Writer",
        department: "engineering",
        experience: "mid",
        location: "remote",
        type: "Full-time",
        salary: "₹6-12 LPA",
        posted: "4 days ago",
        description: "Create comprehensive technical documentation and developer resources.",
        tags: ["Documentation", "Technical Writing", "API Docs", "Content", "Communication"],
        requirements: [
            "3+ years of technical writing experience",
            "Strong writing and communication skills",
            "Experience with documentation tools",
            "Understanding of software development",
            "Ability to explain complex concepts"
        ],
        responsibilities: [
            "Write technical documentation",
            "Create API documentation",
            "Develop user guides and tutorials",
            "Maintain documentation websites",
            "Collaborate with engineering teams"
        ],
        benefits: [
            "Remote work flexibility",
            "Documentation ownership",
            "Cross-team collaboration",
            "Writing skill development",
            "Technical learning opportunities"
        ]
    },
    {
        id: 14,
        title: "Business Analyst",
        department: "product",
        experience: "mid",
        location: "bangalore",
        type: "Full-time",
        salary: "₹8-15 LPA",
        posted: "6 days ago",
        description: "Analyze business processes and requirements to drive digital transformation.",
        tags: ["Analysis", "Requirements", "Process Improvement", "Stakeholder Management", "Documentation"],
        requirements: [
            "3+ years of business analysis experience",
            "Strong analytical and problem-solving skills",
            "Experience with requirements gathering",
            "Knowledge of business process modeling",
            "Excellent communication skills"
        ],
        responsibilities: [
            "Gather and document requirements",
            "Analyze business processes",
            "Facilitate stakeholder meetings",
            "Create functional specifications",
            "Support testing and implementation"
        ],
        benefits: [
            "Business impact",
            "Stakeholder interaction",
            "Process improvement focus",
            "Cross-functional collaboration",
            "Professional development"
        ]
    },
    {
        id: 15,
        title: "Digital Marketing Specialist",
        department: "sales",
        experience: "mid",
        location: "remote",
        type: "Full-time",
        salary: "₹6-12 LPA",
        posted: "1 week ago",
        description: "Drive digital marketing initiatives to increase brand awareness and generate leads.",
        tags: ["SEO", "SEM", "Social Media", "Content Marketing", "Analytics"],
        requirements: [
            "3+ years of digital marketing experience",
            "Experience with Google Analytics and AdWords",
            "Social media marketing expertise",
            "Content creation and optimization",
            "Data-driven marketing approach"
        ],
        responsibilities: [
            "Develop digital marketing strategies",
            "Manage SEO/SEM campaigns",
            "Create and optimize content",
            "Analyze marketing metrics",
            "Generate leads and conversions"
        ],
        benefits: [
            "Remote work flexibility",
            "Marketing tool access",
            "Creative campaign development",
            "Performance bonuses",
            "Industry conferences"
        ]
    },
    {
        id: 16,
        title: "Software Development Intern",
        department: "engineering",
        experience: "intern",
        location: "bangalore",
        type: "Internship",
        salary: "₹30,000-50,000/month",
        posted: "2 days ago",
        description: "Learn and contribute to real-world software projects while working with experienced developers.",
        tags: ["JavaScript", "React", "Learning", "Mentorship", "Projects"],
        requirements: [
            "Currently pursuing CS/IT degree",
            "Basic programming knowledge",
            "Familiarity with web technologies",
            "Strong willingness to learn",
            "Good communication skills"
        ],
        responsibilities: [
            "Assist in software development",
            "Write and test code",
            "Participate in team meetings",
            "Learn development best practices",
            "Work on assigned projects"
        ],
        benefits: [
            "Mentorship program",
            "Real project experience",
            "Learning opportunities",
            "Potential full-time offer",
            "Flexible schedule"
        ]
    },
    {
        id: 17,
        title: "Data Engineer",
        department: "data",
        experience: "mid",
        location: "remote",
        type: "Full-time",
        salary: "₹12-20 LPA",
        posted: "5 days ago",
        description: "Build and maintain data pipelines and infrastructure for analytics and ML.",
        tags: ["Python", "Spark", "Kafka", "ETL", "Data Warehousing"],
        requirements: [
            "3+ years of data engineering experience",
            "Strong Python and SQL skills",
            "Experience with big data technologies",
            "ETL pipeline development",
            "Cloud data platforms knowledge"
        ],
        responsibilities: [
            "Build data pipelines",
            "Design data architecture",
            "Optimize data processing",
            "Ensure data quality",
            "Support analytics teams"
        ],
        benefits: [
            "Data platform ownership",
            "Remote work flexibility",
            "Big data technologies",
            "Learning opportunities",
            "Impact on business decisions"
        ]
    },
    {
        id: 18,
        title: "AI Research Scientist",
        department: "ai-ml",
        experience: "senior",
        location: "bangalore",
        type: "Full-time",
        salary: "₹25-40 LPA",
        posted: "1 week ago",
        description: "Conduct cutting-edge AI research and develop innovative machine learning solutions.",
        tags: ["AI Research", "Deep Learning", "NLP", "Computer Vision", "Publications"],
        requirements: [
            "PhD in AI/ML or related field",
            "5+ years of research experience",
            "Strong publication record",
            "Expertise in deep learning",
            "Experience with research frameworks"
        ],
        responsibilities: [
            "Conduct AI research",
            "Publish research papers",
            "Develop novel algorithms",
            "Collaborate with academic institutions",
            "Mentor research team"
        ],
        benefits: [
            "Research-focused role",
            "Publication support",
            "Conference presentations",
            "Academic collaborations",
            "Innovation opportunities"
        ]
    },
    {
        id: 19,
        title: "Cloud Solutions Architect",
        department: "cloud",
        experience: "senior",
        location: "bangalore",
        type: "Full-time",
        salary: "₹20-35 LPA",
        posted: "3 days ago",
        description: "Design and implement cloud architecture solutions for enterprise clients.",
        tags: ["Cloud Architecture", "AWS", "Azure", "Solution Design", "Enterprise"],
        requirements: [
            "5+ years of cloud architecture experience",
            "Expert knowledge of AWS/Azure/GCP",
            "Enterprise solution design",
            "Cloud migration experience",
            "Strong client-facing skills"
        ],
        responsibilities: [
            "Design cloud solutions",
            "Lead architecture discussions",
            "Guide cloud migrations",
            "Ensure best practices",
            "Support sales activities"
        ],
        benefits: [
            "Architecture ownership",
            "Client interaction",
            "Cloud certifications",
            "Technical leadership",
            "Industry recognition"
        ]
    },
    {
        id: 20,
        title: "HR Business Partner",
        department: "sales",
        experience: "mid",
        location: "bangalore",
        type: "Full-time",
        salary: "₹8-15 LPA",
        posted: "4 days ago",
        description: "Partner with business leaders to drive HR strategy and employee engagement.",
        tags: ["HR Strategy", "Employee Relations", "Talent Management", "Culture", "Leadership"],
        requirements: [
            "3+ years of HR experience",
            "Business partnering experience",
            "Strong interpersonal skills",
            "Knowledge of HR best practices",
            "Change management experience"
        ],
        responsibilities: [
            "Partner with business leaders",
            "Drive HR initiatives",
            "Manage employee relations",
            "Support talent development",
            "Ensure compliance"
        ],
        benefits: [
            "Strategic HR role",
            "Leadership interaction",
            "Culture building",
            "Professional development",
            "People impact"
        ]
    },
    {
        id: 21,
        title: "Systems Administrator",
        department: "engineering",
        experience: "mid",
        location: "bangalore",
        type: "Full-time",
        salary: "₹7-14 LPA",
        posted: "6 days ago",
        description: "Manage and maintain IT infrastructure, servers, and network systems.",
        tags: ["Linux", "Windows Server", "Networking", "Infrastructure", "Monitoring"],
        requirements: [
            "3+ years of system administration",
            "Linux and Windows server experience",
            "Network configuration knowledge",
            "Monitoring and troubleshooting skills",
            "Security best practices"
        ],
        responsibilities: [
            "Manage server infrastructure",
            "Monitor system performance",
            "Implement security measures",
            "Troubleshoot issues",
            "Maintain documentation"
        ],
        benefits: [
            "Infrastructure ownership",
            "Technical challenges",
            "On-call compensation",
            "Certification support",
            "Stable operations role"
        ]
    },
    {
        id: 22,
        title: "Blockchain Developer",
        department: "engineering",
        experience: "senior",
        location: "remote",
        type: "Full-time",
        salary: "₹18-30 LPA",
        posted: "1 week ago",
        description: "Develop blockchain solutions and smart contracts for decentralized applications.",
        tags: ["Blockchain", "Solidity", "Web3", "Smart Contracts", "DeFi"],
        requirements: [
            "3+ years of blockchain development",
            "Expertise in Solidity and Web3",
            "Smart contract development",
            "DeFi protocol knowledge",
            "Security best practices"
        ],
        responsibilities: [
            "Develop smart contracts",
            "Build DApps",
            "Implement blockchain solutions",
            "Ensure security standards",
            "Research new technologies"
        ],
        benefits: [
            "Cutting-edge technology",
            "Remote work flexibility",
            "Crypto incentives",
            "Innovation opportunities",
            "Industry leadership"
        ]
    },
    {
        id: 23,
        title: "Site Reliability Engineer",
        department: "cloud",
        experience: "senior",
        location: "bangalore",
        type: "Full-time",
        salary: "₹15-25 LPA",
        posted: "2 days ago",
        description: "Ensure system reliability, performance, and scalability of our production infrastructure.",
        tags: ["SRE", "Monitoring", "Automation", "Performance", "Reliability"],
        requirements: [
            "4+ years of SRE/DevOps experience",
            "Strong automation skills",
            "Monitoring and alerting expertise",
            "Performance optimization",
            "Incident management experience"
        ],
        responsibilities: [
            "Ensure system reliability",
            "Implement monitoring solutions",
            "Automate operational tasks",
            "Optimize system performance",
            "Lead incident response"
        ],
        benefits: [
            "High-impact reliability role",
            "Automation focus",
            "On-call compensation",
            "Technical leadership",
            "System optimization"
        ]
    },
    {
        id: 24,
        title: "Content Marketing Manager",
        department: "sales",
        experience: "mid",
        location: "remote",
        type: "Full-time",
        salary: "₹8-15 LPA",
        posted: "5 days ago",
        description: "Lead content strategy and creation to drive brand awareness and lead generation.",
        tags: ["Content Strategy", "Content Creation", "SEO", "Brand Marketing", "Lead Generation"],
        requirements: [
            "3+ years of content marketing experience",
            "Strong writing and editing skills",
            "SEO and content optimization",
            "Brand marketing experience",
            "Analytics and measurement"
        ],
        responsibilities: [
            "Develop content strategy",
            "Create engaging content",
            "Optimize for SEO",
            "Manage content calendar",
            "Measure content performance"
        ],
        benefits: [
            "Creative content role",
            "Remote work flexibility",
            "Brand building impact",
            "Content ownership",
            "Marketing tool access"
        ]
    },
    {
        id: 25,
        title: "IT Support Specialist",
        department: "engineering",
        experience: "entry",
        location: "bangalore",
        type: "Full-time",
        salary: "₹4-8 LPA",
        posted: "3 days ago",
        description: "Provide technical support and assistance to employees and maintain IT equipment.",
        tags: ["IT Support", "Help Desk", "Hardware", "Software", "Troubleshooting"],
        requirements: [
            "1-2 years of IT support experience",
            "Hardware and software troubleshooting",
            "Customer service skills",
            "Basic networking knowledge",
            "IT certifications preferred"
        ],
        responsibilities: [
            "Provide technical support",
            "Troubleshoot IT issues",
            "Maintain IT equipment",
            "Document support tickets",
            "Assist with IT projects"
        ],
        benefits: [
            "Entry-level opportunity",
            "Technical skill development",
            "Certification support",
            "Team collaboration",
            "Career growth path"
        ]
    }
];

let allJobs = [...jobsData];
let filteredJobs = [...jobsData];

const searchInput = document.getElementById('searchInput');
const departmentFilter = document.getElementById('departmentFilter');
const experienceFilter = document.getElementById('experienceFilter');
const locationFilter = document.getElementById('locationFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const jobsGrid = document.getElementById('jobsGrid');
const jobsCount = document.getElementById('jobsCount');
const totalJobsSpan = document.getElementById('totalJobs');
const noResults = document.getElementById('noResults');
const jobModal = document.getElementById('jobModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const loading = document.getElementById('loading');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
    initScrollToTop();
});

function initializeApp() {
    console.log('Initializing app with', jobsData.length, 'jobs');
    renderJobs();
    updateJobCount();
    setupEventListeners();
    addAnimations();
}

function setupEventListeners() {
    
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    departmentFilter.addEventListener('change', applyFilters);
    experienceFilter.addEventListener('change', applyFilters);
    locationFilter.addEventListener('change', applyFilters);
    clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    closeModal.addEventListener('click', closeJobModal);
    jobModal.addEventListener('click', function(e) {
        if (e.target === jobModal) {
            closeJobModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeJobModal();
        }
    });
}

function handleSearch() {
    applyFilters();
}

function applyFilters() {
    showLoading();
    
    setTimeout(() => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedDepartment = departmentFilter.value;
        const selectedExperience = experienceFilter.value;
        const selectedLocation = locationFilter.value;
        
        filteredJobs = allJobs.filter(job => {
            const matchesSearch = !searchTerm || 
                job.title.toLowerCase().includes(searchTerm) ||
                job.description.toLowerCase().includes(searchTerm) ||
                job.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            
            const matchesDepartment = !selectedDepartment || job.department === selectedDepartment;
            const matchesExperience = !selectedExperience || job.experience === selectedExperience;
            const matchesLocation = !selectedLocation || job.location === selectedLocation;
            
            return matchesSearch && matchesDepartment && matchesExperience && matchesLocation;
        });
        
        renderJobs();
        updateJobCount();
        hideLoading();
    }, 500);
}

function clearAllFilters() {
    searchInput.value = '';
    departmentFilter.value = '';
    experienceFilter.value = '';
    locationFilter.value = '';
    filteredJobs = [...allJobs];
    renderJobs();
    updateJobCount();
}

function renderJobs() {
    console.log('Rendering', filteredJobs.length, 'jobs');
    
    if (filteredJobs.length === 0) {
        jobsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    jobsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    jobsGrid.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
    
    document.querySelectorAll('.job-card').forEach(card => {
        card.addEventListener('click', function() {
            const jobId = parseInt(this.dataset.jobId);
            openJobModal(jobId);
        });
    });
    
    setTimeout(() => {
        document.querySelectorAll('.job-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }, 100);
}

function createJobCard(job) {
    return `
        <div class="job-card" data-job-id="${job.id}">
            <div class="job-header">
                <h3 class="job-title">${job.title}</h3>
                <div class="job-company">HexaFusion Technologies</div>
            </div>
            <div class="job-meta">
                <div class="job-meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${formatLocation(job.location)}</span>
                </div>
                <div class="job-meta-item">
                    <i class="fas fa-briefcase"></i>
                    <span>${formatExperience(job.experience)}</span>
                </div>
                <div class="job-meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${job.type}</span>
                </div>
                <div class="job-meta-item">
                    <i class="fas fa-rupee-sign"></i>
                    <span>${job.salary}</span>
                </div>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-tags">
                ${job.tags.slice(0, 4).map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                ${job.tags.length > 4 ? `<span class="job-tag">+${job.tags.length - 4} more</span>` : ''}
            </div>
            <div class="job-footer">
                <button class="apply-btn" onclick="event.stopPropagation(); applyForJob(${job.id})">
                    <i class="fas fa-paper-plane"></i>
                    Apply Now
                </button>
                <span class="job-posted">${job.posted}</span>
            </div>
        </div>
    `;
}

function openJobModal(jobId) {
    const job = allJobs.find(j => j.id === jobId);
    if (!job) return;
    
    modalTitle.textContent = job.title;
    modalContent.innerHTML = `
        <div class="modal-meta">
            <div class="modal-meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${formatLocation(job.location)}</span>
            </div>
            <div class="modal-meta-item">
                <i class="fas fa-briefcase"></i>
                <span>${formatExperience(job.experience)}</span>
            </div>
            <div class="modal-meta-item">
                <i class="fas fa-clock"></i>
                <span>${job.type}</span>
            </div>
            <div class="modal-meta-item">
                <i class="fas fa-rupee-sign"></i>
                <span>${job.salary}</span>
            </div>
            <div class="modal-meta-item">
                <i class="fas fa-calendar"></i>
                <span>Posted ${job.posted}</span>
            </div>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-info-circle"></i> About This Role</h3>
            <p>${job.description}</p>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-tasks"></i> Key Responsibilities</h3>
            <ul>
                ${job.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-check-circle"></i> Requirements</h3>
            <ul>
                ${job.requirements.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-gift"></i> Benefits & Perks</h3>
            <ul>
                ${job.benefits.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-tags"></i> Skills & Technologies</h3>
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-apply">
            <button class="apply-btn" onclick="applyForJob(${job.id})">
                <i class="fas fa-paper-plane"></i>
                Apply for this Position
            </button>
        </div>
    `;
    
    jobModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeJobModal() {
    jobModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function applyForJob(jobId) {
  const popup = document.getElementById('apply-popup');
  popup.classList.remove('hidden');

  setTimeout(() => {
    popup.classList.add('hidden');
    window.open('https://forms.gle/CPU55eiZk5PipfHM9', '_blank'); // ← Use your actual form URL here
  }, 3000);
}


function updateJobCount() {
    const count = filteredJobs.length;
    jobsCount.textContent = `${count} position${count !== 1 ? 's' : ''} available`;
    if (totalJobsSpan) {
        totalJobsSpan.textContent = allJobs.length;
    }
}

function formatLocation(location) {
    const locationMap = {
        'remote': 'Remote',
        'bangalore': 'Bangalore',
        'hybrid': 'Hybrid'
    };
    return locationMap[location] || location;
}

function formatExperience(experience) {
    const experienceMap = {
        'intern': 'Internship',
        'entry': 'Entry Level',
        'mid': 'Mid Level',
        'senior': 'Senior Level'
    };
    return experienceMap[experience] || experience;
}

function showLoading() {
    loading.classList.add('active');
}

function hideLoading() {
    loading.classList.remove('active');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function addAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.job-card, .search-container').forEach(el => {
        observer.observe(el);
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function initScrollToTop() {
  const scrollToTopBtn = document.querySelector(".scroll-to-top")
  const scrollThreshold = 300

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      scrollToTopBtn.classList.add("show")
    } else {
      scrollToTopBtn.classList.remove("show")
    }
  })

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}
