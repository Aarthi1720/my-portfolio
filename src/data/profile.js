export const profile = {
  name: "Aarthi R",
  role: "Full Stack MERN Developer",
  email: "aarthirajendran1705@gmail.com",
  github: "https://github.com/Aarthi1720",
  linkedin: "https://linkedin.com/in/aarthi-r-66944628a",
  resume: "/resume/AarthiR-Resume.pdf",
  formspree: "https://formspree.io/f/xrbawwne",

  // Achievement-focused (mentor-safe)
  stats: [
    { label: "Full-Stack MERN Apps", value: "3" },
    { label: "Capstone Score", value: "10/10" },
    { label: "Coding Challenges", value: "250+" },
  ],

  skills: {
    frontend: ["React", "JavaScript (ES6+)", "HTML", "CSS", "TailwindCSS"],
    backend: ["Node.js", "Express.js", "REST APIs"], // fixed comma bug
    database: ["MongoDB (Atlas, Compass)", "MySQL"],
    tools: ["Git", "GitHub", "Postman", "Vercel", "Render", "Netlify"],
    ai: ["ChatGPT", "Copilot"],
    extras: [
      "Stripe",
      "Cloudinary",
      "JWT",
      "jsPDF",
      "html2canvas",
      "Nodemailer",
      "Recharts",
    ],
  },

  projects: [
    {
      title: "Hotel Booking System",
      desc: "End-to-end bookings with search/filters, availability calendar, secure Stripe checkout, promo codes, loyalty coins, verified reviews, user profiles, and email confirmations.",
      tech: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "Stripe",
        "JWT",
        "Nodemailer",
      ],
      image: "/images/Project1.png",
      liveUrl: "https://hotel-booking-frontend-beige.vercel.app/",
      frontendUrl: "https://github.com/Aarthi1720/frontend",
      backendUrl: "https://github.com/Aarthi1720/backend", 
      href: "/project/hotel-booking",
    },
    {
      title: "Invoice Builder",
      desc: "Invoices/Clients/Products CRUD, company profile, real-time calculations, PDF export (jsPDF + html2canvas), and persistent backend storage.",
      tech: [
        "React",
        "TailwindCSS",
        "Context API",
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "jsPDF",
        "html2canvas",
      ],
      image: "/images/Project2.png",
      liveUrl: "https://invoice-builder-swart.vercel.app/",
      frontendUrl: "https://github.com/Aarthi1720/Invoice_Builder",
      backendUrl: "https://github.com/Aarthi1720/Invoice_Backend",
      href: "/project/invoice-builder",
    },
    {
      title: "Smart Expense Tracker",
      desc: "Personal finance manager with incomes/expenses, filters, category-wise charts (Recharts), summaries, and persistent storage on MongoDB Atlas.",
      tech: [
        "React",
        "TailwindCSS",
        "Context API",
        "Recharts",
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
      ],
      image: "/images/Project3.png",
      liveUrl: "https://smart-expense-tracker-nine.vercel.app/",
      frontendUrl: "https://github.com/Aarthi1720/Smart_Expense_Tracker",
      backendUrl: "https://github.com/Aarthi1720/Smart_Expense_Backend",
      href: "/project/expense-tracker",
    },
  ],

  certifications: [
    {
      title: "Full Stack MERN Certification",
      issuer: "GUVI Geek Networks (IIT-M Pravartak)",
      image: "/images/guvi-cert.png",
    },
  ],
};
