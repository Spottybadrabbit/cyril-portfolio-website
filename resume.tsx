import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Cyril Lutterodt",
  initials: "CL",
  url: "https://cyrillutterodt.com",
  location: "London, United Kingdom",
  locationLink: "https://www.google.com/maps/place/London",
  description:
    "Software Engineer · AI Builder · Former VC Managing Partner · Forbes 30 Under 30. Shipping 30 AI apps in public.",
  summary:
    "I'm a software engineer who has built drone companies, AI health startups, and raised £5.8M for Europe's first Black-led VC fund — Black Seed. " +
    "I've been a Research Assistant at UT Arlington working with NVIDIA, NASA, and the NIH, filed 3 patents, and published peer-reviewed papers on robotics and AI. " +
    "After a period of rebuilding — therapy, chess, and daily gym sessions — I'm back building in public. " +
    "Currently shipping 30 AI apps in 30 days under the brand **Vibe Code with C** (@dayinthelifeofatechie), " +
    "documenting every win, failure, and lesson in real time.",
  avatarUrl: "/me.jpg",
  skills: [
    "TypeScript",
    "Python",
    "C++",
    "React",
    "Next.js",
    "Node.js",
    "Claude Code",
    "AI/ML",
    "Computer Vision",
    "Deep Learning",
    "CUDA",
    "TensorRT",
    "ROS",
    "Robotics",
    "Embedded Systems",
    "Sensor Fusion",
    "Venture Capital",
    "Fund Management",
    "Fundraising",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "[redacted]",
    tel: "[redacted]",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cyrillutterodt",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cyril-lutterodt",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/dayinthelifeofatechie",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/dayinthelifeofatechie",
        icon: Icons.instagram,
        navbar: false,
      },
      Youtube: {
        name: "YouTube",
        url: "https://youtube.com/@dayinthelifeofatechie",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:[redacted]",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Vibe Code with C",
      href: "https://instagram.com/dayinthelifeofatechie",
      badges: ["Active", "Building in Public"],
      location: "London, UK",
      title: "Founder & AI Builder",
      logoUrl: "/vibecode.png",
      start: "2025",
      end: "Present",
      description:
        "Shipping 30 AI apps in 30 days — publicly, daily, documented. " +
        "Built Squanchy (squanchy.codes) — an AI tool that converts Intercom bug reports into structured Linear issues and PR drafts. " +
        "Won 1st place at the Intercom × Vercel 'Prompt to Production' Hackathon in London. " +
        "Growing the @dayinthelifeofatechie brand across Instagram, TikTok, YouTube, and LinkedIn with daily build logs, tutorials, and founder content. " +
        "Series tag: #VibeCodeWithC",
    },
    {
      company: "Black Seed GP LLP",
      href: "https://blackseed.vc",
      badges: ["Forbes 30 Under 30", "First Black Fund in Europe"],
      location: "London, UK",
      title: "President & Managing Partner",
      logoUrl: "/blackseed.png",
      start: "Sep 2021",
      end: "Feb 2024",
      description:
        "Co-founded and led Europe's first Black-led venture capital fund, raising £5.8M for the first close. " +
        "Built the investment strategy, deal sourcing pipeline (Affinity.co), and portfolio management infrastructure (Carta, Tatyct.io, FCA Appointed Rep). " +
        "Secured £500,000+ in pro-bono legal support. Grew revenue 400% via strategic corporate partnerships. " +
        "Featured in Financial Times, BBC News, TechCrunch, Wired, Sifted, and Business Insider. " +
        "Moderated London Tech Week panel 'Risk or Premium? Does DEI Reduce Risk and Drive Alpha?' with BlackRock and Kinnivek. " +
        "Ran weekly Executive Partner deal screening calls and managed relationships with 2,000+ Black founders.",
    },
    {
      company: "ZOI",
      href: "#",
      badges: ["NVIDIA GTC 2021", "NHS Trust"],
      location: "London, UK",
      title: "Co-Founder & CEO",
      logoUrl: "/zoi.png",
      start: "Aug 2020",
      end: "Aug 2021",
      description:
        "Co-founded ZOI — a tele-diagnostic AI startup building a remote, non-invasive screening and triaging tool for diseases and infections. " +
        "Pioneered Asclepius, an AI-powered tele-diagnostic tool leveraging deep learning for disease diagnosis. " +
        "Presented at NVIDIA GTC 2021: 'New Techniques for Triaging COVID-19 Risk.' " +
        "Partnered with NHS Trust as a contactless vital signs detection solution. " +
        "Deployed machine and deep learning algorithms within NVIDIA's end-to-end ecosystem using TensorRT, Deep Learning SDK, and GPU Cloud. " +
        "Implemented a novel neuro-fuzzy inference system (ANFIS) for explainable AI in predictive healthcare analytics. " +
        "Selected through Entrepreneur First (EF LD14) — top 50–100 from 10,000+ applicants.",
    },
    {
      company: "Neu Robotics",
      href: "#",
      badges: ["3 Patents", "NVIDIA Jetson", "GPS-Denied AI"],
      location: "Arlington, TX, USA",
      title: "CEO & Co-Founder",
      logoUrl: "/neuRobotics.png",
      start: "Aug 2016",
      end: "Mar 2020",
      description:
        "Invented the world's first asymmetrical 3D-printed carbon-fibre drone with real-time video analytics — the AoX. " +
        "Filed 3 patents including an asymmetrical X-shaped drone design and UAV localization using video. " +
        "Designed AI-driven path-planning and obstacle-avoidance algorithms for fully autonomous flight in GPS-denied environments using computer vision and dead-reckoning navigation. " +
        "Architected real-time operating systems (RTOS) on NVIDIA Jetson TX1 for edge-deployed onboard AI inference (object detection, spatial mapping, trajectory prediction). " +
        "Pioneered swarm coordination algorithms for multi-drone collaborative UAV behavior. " +
        "Managed a global team of 10 engineers across 2 states from ideation to market launch.",
    },
    {
      company: "University of Texas at Arlington",
      href: "http://heracleia.uta.edu/",
      badges: ["NASA", "NIH", "NSF", "Lockheed Martin"],
      location: "Arlington, TX, USA",
      title: "Research Assistant — HCI & Robotics Lab",
      logoUrl: "/uta.png",
      start: "Oct 2013",
      end: "May 2015",
      description:
        "Conducted AI and robotics research at the Heracleia Human-Centred Computing Lab. " +
        "Built soft-robotics solutions for Human-Computer Interaction applications. " +
        "Delivered robotic hardware and software to Lockheed Martin, NSF, and the National Institute of Health. " +
        "Contributed to $1–2M RFPs as technical lead for business development. " +
        "Published 3 peer-reviewed papers (IEEE and ACM) across robotics, HCI, and medical AI. " +
        "Led team coordination for the University Rover Challenge, placing in the top 10 globally — working with the Elon Musk Foundation and NASA to build a low-cost Mars lunar rover.",
    },
  ],

  education: [
    {
      school: "London Business School",
      href: "https://www.london.edu",
      degree: "Venture Capital Fellow",
      logoUrl: "/lbs.png",
      start: "Jan 2023",
      end: "Jul 2023",
    },
    {
      school: "Entrepreneur First (EF LD14)",
      href: "https://www.joinef.com",
      degree: "Cohort Member",
      logoUrl: "/ef.png",
      start: "Apr 2020",
      end: "Jul 2020",
    },
    {
      school: "The University of Texas at Arlington",
      href: "https://www.uta.edu",
      degree: "Bachelor of Science — Software Engineering & Psychology",
      logoUrl: "/uta.png",
      start: "Jan 2012",
      end: "Jan 2018",
    },
    {
      school: "Richmond Upon Thames College",
      href: "https://www.rutc.ac.uk",
      degree: "A Levels — Business, Graphics, Computing, Photography",
      logoUrl: "/rutc.png",
      start: "Jan 2010",
      end: "Jan 2012",
    },
  ],

  projects: [
    {
      title: "Squanchy",
      href: "https://squanchy.codes",
      dates: "2025",
      active: true,
      description:
        "AI tool that converts Intercom bug reports into structured Linear issues and PR drafts — automatically. " +
        "Eliminates the broken handoff between support and engineering. Won 1st place at the Intercom × v0 by Vercel 'Prompt to Production' Hackathon in London.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Intercom API",
        "Linear API",
        "Claude AI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://squanchy.codes",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Columbus to Finance",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Dealflow management tool for investors. Ingests pitch decks from Gmail, standardises them with multimodal LLMs, and enables AI-powered chat over private pipeline data and public market data via Crunchbase and web crawling.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Claude API",
        "Crunchbase API",
        "Gmail API",
        "Vercel",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Spoon",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Conversation analysis tool that connects to Granola meeting notes via MCP agents to extract action items and follow-ups from meetings automatically.",
      technologies: [
        "TypeScript",
        "Claude Code",
        "MCP",
        "Granola API",
        "Node.js",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Growth Engine",
      href: "#",
      dates: "2025",
      active: false,
      description:
        "Autonomous go-to-market system inspired by a real case study of scaling a company to significant ARR using Claude Code. Automates outreach, pipeline management, and follow-up workflows.",
      technologies: [
        "Claude Code",
        "TypeScript",
        "Next.js",
        "AI Agents",
        "Automation",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AoX Drone — Neu Robotics",
      href: "#",
      dates: "2016–2020",
      active: false,
      description:
        "The world's first asymmetrical 3D-printed carbon-fibre drone with real-time video analytics, sensor fusion, and autonomous GPS-denied navigation. 3 patents filed. Built with NVIDIA Jetson TX1.",
      technologies: [
        "C++",
        "Python",
        "CUDA",
        "ROS",
        "TensorRT",
        "NVIDIA Jetson TX1",
        "Computer Vision",
        "Sensor Fusion",
      ],
      links: [
        {
          type: "Patents",
          href: "https://patents.google.com/?inventor=Cyril+Lutterodt",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Asclepius — ZOI",
      href: "#",
      dates: "2020–2021",
      active: false,
      description:
        "Non-invasive AI-based tele-diagnostic tool for remote disease and infection screening. Presented at NVIDIA GTC 2021 and deployed as a contactless vital signs solution with NHS Trust.",
      technologies: [
        "Python",
        "NVIDIA GPU Cloud",
        "TensorRT",
        "Deep Learning",
        "ANFIS",
        "Edge Computing",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "1st Place — Intercom × Vercel Hackathon",
      dates: "2025",
      location: "London, UK",
      description:
        "Built Squanchy — an AI tool converting Intercom bug reports into structured Linear issues and PR drafts — in 2 hours using v0 by Vercel. Won first place. Hosted by Maya Avendaño and the Intercom team.",
      image: "/intercom-vercel.png",
      mlh: "",
      links: [
        {
          title: "Live App",
          href: "https://squanchy.codes",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "University Rover Challenge — Top 10 Global",
      dates: "2016",
      location: "University of Texas at Arlington",
      description:
        "Led and managed a team of 20 students to place top 10 globally. Built a low-cost Mars lunar rover in partnership with the Elon Musk Foundation and NASA.",
      image: "/uta.png",
      mlh: "",
      links: [],
    },
  ],

  // ── PATENTS ─────────────────────────────────────────────────────────────
  // NOTE: These are not in the default Magic UI template.
  // Add a Patents section to src/app/page.tsx to display these.
  patents: [
    {
      title: "Mobile platform (e.g. drone/UAV) performing localization and mapping using video",
      number: "US Patent",
      href: "https://patents.google.com/?inventor=Cyril+Lutterodt",
      year: "2018",
    },
    {
      title: "Drone with V-shape",
      number: "US Patent",
      href: "https://patents.google.com/?inventor=Cyril+Lutterodt",
      year: "2018",
    },
    {
      title: "Asymmetrical X-shaped drone",
      number: "US Patent",
      href: "https://patents.google.com/?inventor=Cyril+Lutterodt",
      year: "2018",
    },
  ],

  // ── PUBLICATIONS ─────────────────────────────────────────────────────────
  // NOTE: These are not in the default Magic UI template.
  // Add a Publications section to src/app/page.tsx to display these.
  publications: [
    {
      title: "Guided physical therapy through the use of the Barrett WAM robotic arm",
      authors: "S Phan, A Lioulemes, C Lutterodt, et al.",
      venue: "IEEE International Conference on Haptic, Audio and Visual Environments, 2014",
      citations: 23,
      href: "https://ieeexplore.ieee.org/abstract/document/6954326/",
      year: "2014",
    },
    {
      title: "A multimodal adaptive dialogue manager for depressive and anxiety disorder screening: a Wizard-of-Oz experiment",
      authors: "K Tsiakas, L Watts, C Lutterodt, et al.",
      venue: "Proceedings of the 8th ACM International Conference on PErvasive Technologies Related to Assistive Environments, 2015",
      citations: 10,
      href: "https://dl.acm.org/doi/abs/10.1145/2769493.2769572",
      year: "2015",
    },
    {
      title: "Creating custom fitted point of goggles through facial metrics",
      authors: "C Lutterodt, S Phan, F Makedon",
      venue: "Proceedings of the 7th International Conference on PErvasive Technologies Related to Assistive Environments (PETRA), 2014",
      citations: 0,
      href: "https://dl.acm.org/doi/pdf/10.1145/2674396.2674448",
      year: "2014",
    },
    {
      title: "Safety challenges in using AR.Drone to collaborate with humans in indoor environments",
      authors: "A Lioulemes, G Galatas, V Metsis, C Lutterodt, et al.",
      venue: "Proceedings of the 7th International Conference on PErvasive Technologies (PETRA), 2014",
      citations: 26,
      href: "https://dl.acm.org/doi/abs/10.1145/2674396.2674457",
      year: "2014",
    },
  ],

  // ── AWARDS ──────────────────────────────────────────────────────────────
  awards: [
    "Forbes 30 Under 30 Europe — 2023",
    "Forbes 30 Under 30 All Star Alumni — 2024",
    "Hurun UK 30 Under 30 — 2024",
    "TED X UTA: The 4th Industrial Revolution — The Rise of the Machines",
    "World Economic Forum — UN SDG Summit",
  ],
} as const;
