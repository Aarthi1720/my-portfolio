export const profile = {
  name: "Aarthi R",
  role: "Full Stack MERN Developer",
  email: "aarthirajendran1705@gmail.com",
  github: "https://github.com/Aarthi1720",
  linkedin: "https://linkedin.com/in/aarthi-r-66944628a",
  resume: "/resume/AarthiR-Resume.pdf", // put your PDF in /public
  formspree: "https://formspree.io/f/xrbawwne",

  stats: [
    { label: "Projects Shipped", value: "15+" },
    { label: "Capstone Score", value: "10/10" },
    { label: "Codekata Problems", value: "250+" },
  ],

  skills: {
    frontend: ["React", "JavaScript (ES6+)", "HTML", "CSS", "TailwindCSS"],
    backend: ["Node.js", "Express.js, REST APIs"],
    database: ["MongoDB (Atlas, Compass)", "MySQL"],
    tools: ["Git", "GitHub", "Postman", "Vercel", "Render", "Netlify"],
    ai: ["ChatGPT", "Copilot"], // new category
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
      desc: "Full-stack booking app with search & filters, availability calendar, Stripe payments, promo codes, loyalty coins, verified reviews, user profiles, and email confirmations.",
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
      demo: "https://hotel-booking-frontend-beige.vercel.app/",
      repo: "https://github.com/Aarthi1720/frontend",
      href: "/project/hotel-booking",
    },
    {
      title: "Invoice Builder",
      desc: "Invoices/Clients/Products CRUD, company profile, real-time totals, PDF export with jsPDF + html2canvas, persistent backend storage.",
      tech: [
        "React",
        "TailwindCSS",
        "Context API",
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
      ],
      image: "/images/Project2.png",
      demo: "https://invoice-builder-swart.vercel.app/",
      repo: "https://github.com/Aarthi1720/Invoice_Builder",
      href: "/project/invoice-builder",
    },
    {
      title: "Smart Expense Tracker",
      desc: "Personal finance tracker with add/edit incomes & expenses, filters, category-wise reports, charts (Recharts), summary cards, and persistent storage on MongoDB Atlas.",
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
      demo: "https://smart-expense-tracker-nine.vercel.app/",
      repo: "https://github.com/Aarthi1720/Smart_Expense_Tracker",
      href: "/project/expense-tracker",
    },
  ],
};
