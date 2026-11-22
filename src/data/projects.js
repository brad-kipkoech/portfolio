// src/data/projects.js

import carelink from "../assets/carelink/cover.png";
import konvene from "../assets/konvene/cover.png";
import farmxpat from "../assets/farmxpat/cover.png";
import tenwa from "../assets/tenwa/cover.png";

export const projects = [
  {
    id: 1,
    title: "CareLink",
    category: "mobile",
    featured: true,
    status: "In Development",
    image: carelink,

    description:
      "A healthcare platform connecting caregivers and clients through secure authentication, bookings, emergency assistance and real-time notifications.",

    tech: [
      "Flutter",
      "Firebase",
      "Firestore",
      "FCM",
      "Android",
      "iOS",
    ],

    github: "",

    live: "",

    screenshots: [],
  },

  {
    id: 2,

    title: "Konvene",

    category: "mobile",

    featured: true,

    status: "Published",

    image: konvene,

    description:
      "Led the mobile development team in building and deploying a production Flutter application available on Google Play.",

    tech: [
      "Flutter",
      "Firebase",
      "Android",
      "Google Play",
    ],

    github: "",

    live:
      "https://play.google.com/store/apps/details?id=com.afyareach.konvene",

    screenshots: [],
  },

  {
    id: 3,

    title: "FarmXpat",

    category: "web",

    featured: false,

    status: "In Development",

    image: farmxpat,

    description:
      "A smart agriculture platform for farmers featuring farm management, marketplace, authentication and dashboards.",

    tech: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
    ],

    github: "",

    live: "https://farmxpat.com",

    screenshots: [],
  },

  {
    id: 4,

    title: "Tenwa Trading & Logistics",

    category: "web",

    featured: false,

    status: "Live",

    image: tenwa,

    description:
      "Corporate logistics website showcasing company services, quotations and global logistics solutions.",

    tech: [
      "React",
      "Tailwind",
      "FastAPI",
      "SEO",
    ],

    github: "",

    live: "https://tenwatradingandlogistics.com",

    screenshots: [],
  },
  {
    id: 5,

    title: "fuatilia",

    category: "web",

    featured: false,

    status: "not live",
    

    description:
     " AI cancer care navigator so that every woman who screens positive for cervical cancer in Kenya reaches treatment(hackathon MVP, synthetic data).",
    
    tech: [
      "React",
      "Tailwind",
      "FastAPI",
      "SEO",
    ],

    screenshots: []

  }
];