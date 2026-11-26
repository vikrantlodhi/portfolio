// Edit your content here. Components read everything from this file.
export const profile = {
  name: 'Vikrant Lodhi',
  role: 'Software Developer + Instructor',
  tagline: 'A Developer working at the intersection of engineering, problem-solving, and technical education.',
  status: 'IT Specialist at Ethnotech',
  email: 'vikrantlodhi3782@gmail.com',
  github: 'https://github.com/vikrantlodhi',
  linkedin: 'https://linkedin.com/in/vikrant-lodhi',
  resume: 'Vikrant_Lodhi.pdf', // file lives in /public
  web3formsKey: '78f514fc-c27c-42a1-9f2b-4dc7789ad78a',
}

export const nav = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
]

export const experience = [
  {
    when: 'Sep 2026 – Present',
    title: 'Junior IT Specialist',
    org: 'Ethnotech, Bengaluru',
    text: "Delivering instructor-led software development training sessions for 100+ participants per session, covering Java Full Stack Development, programming concepts, front-end and back-end technologies, and database management. Conducting technical demonstrations, hands-on practical sessions, and mentoring participants through coding exercises, debugging, and real-world development scenarios.",
    tags: ['Curriculum design', 'Mentoring', 'Code review', 'Web technologies'],
  },
  {
    when: 'Jun 2025 – Jul 2026',
    title: 'Technical Trainer',
    org: 'SSi Digital Academy, Indore',
    text: "Developed and maintained the company's website and learning platform, contributing to improved functionality and user experience. Conducted technical training sessions on programming languages and development tools, created course materials, assignments, lab exercises, and coding challenges. Provided technical guidance to aspiring developers by helping them understand programming concepts, debug code, troubleshoot issues, and work on practical development scenarios.",
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Code review'],
  },
  {
    when: 'Apr – May 2025',
    title: 'Junior Developer Intern',
    org: 'Innobimb Infotech, Bhopal',
    text: "Developed and maintained responsive web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS. Built interactive, user-friendly UI components and optimized application performance to enhance user experience. Worked with Node.js for web application development and Postman for API testing and integration. Identified and resolved bugs, improved application functionality, and used Git and GitHub for version control and team collaboration.",
    tags: ['React.js', 'Node.js', 'Git', 'GitHub'],
  },
]

export const education = [
  {
    when: 'Oct 2021 – May 2025',
    degree: 'Bachelor of Technology, Computer Science and Engineering',
    school: 'Truba College of Science and Technology, Bhopal',
    text: 'GPA 7.29. Relevant coursework:',
    courses: ['Object Oriented Programming', 'Database Management Systems', 'Internet and Web Technologies'],
  },
]

// Set `image` (e.g. '/images/sniptyle.png' from /public) to replace the drawn illustration.
export const projects = [
  {
    title: 'Sniptyle',
    status: 'In progress, open source',
    art: 'sniptyle',
    image: null,
    url: 'https://github.com/vikrantlodhi',
    text: 'A learning platform with beginner-friendly tutorials on web technologies, programming languages and databases. Spring Boot serves the REST API, a React front end consumes it, and PostgreSQL stores the course content.',
    tags: ['React.js', 'Spring Boot', 'Hibernate', 'PostgreSQL'],
  },
  {
    title: 'Smart Portfolio Analyzer',
    status: 'Full stack',
    art: 'analyzer',
    image: null,
    url: 'https://github.com/vikrantlodhi',
    text: 'A dashboard for tracking investments. It pulls live prices, volume and trends from stock market APIs, calculates profit and loss for each portfolio, and charts performance over time.',
    tags: ['JavaScript', 'Spring Boot', 'JDBC', 'PostgreSQL'],
  },
]

export const skills = [
  ['Languages', 'Java, JavaScript'],
  ['Backend', 'Spring Boot, Hibernate, Servlet, JSP, Apache Tomcat, RESTful APIs'],
  ['Frontend', 'React.js, HTML, CSS, Tailwind CSS, jQuery'],
  ['Data', 'PostgreSQL, JDBC'],
  ['Tools', 'Git, GitHub, IntelliJ IDEA, VS Code, ChatGPT, Claude, Copilot'],
]
