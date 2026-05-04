export const DEFAULT_DATA = {
  hero: {
    name: "Farhan",
    tagline: "AI automation & web systems that make businesses unforgettable",
    navLinks: ["About", "Services", "Projects", "Contact"]
  },
  about: {
    paragraph: "I'm Farhan Hossien, an AI automation specialist and web builder with 3 years of experience. I help businesses save time and grow faster by building smart AI agents, converting websites, and uncovering market insights that actually matter."
  },
  services: [
    {
      number: "01",
      name: "AI Agent Development",
      description: "Custom AI agents that automate business workflows — from lead follow-ups to intelligent call response systems, saving hours of manual work every day."
    },
    {
      number: "02",
      name: "Website Design & Development",
      description: "Clean, modern, conversion-focused websites built with attention to layout, speed, and user experience — from landing pages to full business platforms."
    },
    {
      number: "03",
      name: "Market & Competitor Research",
      description: "Deep market analysis, competitor mapping, and trend discovery to help you make data-driven business decisions and stay ahead of the curve."
    },
    {
      number: "04",
      name: "Call Response AI Systems",
      description: "Voice and chat AI systems that handle customer inquiries, qualify leads, and respond 24/7 — so you never miss an opportunity."
    },
    {
      number: "05",
      name: "Automation & Workflow Setup",
      description: "End-to-end automation pipelines using tools like Make, Zapier, and custom scripts — connecting your tools and eliminating repetitive tasks entirely."
    }
  ],
  projects: [
    {
      number: "01",
      category: "Client",
      name: "Nextlevel Studio",
      images: {
        col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
        col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
        col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
      }
    },
    {
      number: "02",
      category: "Personal",
      name: "Aura Brand Identity",
      images: {
        col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
        col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
        col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
      }
    },
    {
      number: "03",
      category: "Client",
      name: "Solaris Digital",
      images: {
        col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
        col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
        col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
      }
    }
  ],
  contact: {
    whatsapp: "+8801756252356",
    email: "farhanhossien@gmail.com",
    futureGoal: "Future goal: Building my own AI-powered product studio from Bangladesh 🇧🇩"
  }
};

export const getStorageData = () => {
  const hero = JSON.parse(localStorage.getItem("portfolio_hero") || JSON.stringify(DEFAULT_DATA.hero));
  const about = JSON.parse(localStorage.getItem("portfolio_about") || JSON.stringify(DEFAULT_DATA.about));
  const services = JSON.parse(localStorage.getItem("portfolio_services") || JSON.stringify(DEFAULT_DATA.services));
  const projects = JSON.parse(localStorage.getItem("portfolio_projects") || JSON.stringify(DEFAULT_DATA.projects));
  const contact = JSON.parse(localStorage.getItem("portfolio_contact") || JSON.stringify(DEFAULT_DATA.contact));

  return { hero, about, services, projects, contact };
};
