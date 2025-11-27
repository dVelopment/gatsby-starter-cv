import type { SiteConfig } from "../types/siteConfig";

const siteConfig: SiteConfig = {
  siteTitle: "Hi! I'm Daniel!",
  siteDescription: "I'm Daniel and I'm a full-stack JavaScript engineer!",
  keyWords: ["daniel holzmann", "web developer", "developer"],
  authorName: "Daniel Holzmann",
  twitterUsername: "",
  githubUsername: "dVelopment",
  authorAvatar: "/images/avatar.jpg",
  authorDescription: `Developer, web enthusiast, engineering leader.<br />
  I started coding for fun as a teenager. As an adult, it grew into finally being my main occupation.<br />
  At age 30, after years of experience and autodidact training, I started studying
  <strong>Software Engineering</strong> at the <strong>University of Applied Sciences Upper Austria in Hagenberg</strong>.<br />
  I have years of experience leading engineering teams and now work with <strong>JavaScript, TypeScript, Rust, and Solid.js/React</strong>.`,
  skills: [
    { name: "JavaScript", level: 95 },
    { name: "Node.js", level: 95 },
    { name: "Rust", level: 90 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "Solid.js", level: 85 },
    { name: "React", level: 80 },
    { name: "Git", level: 80 },
  ],
  jobs: [
    {
      company: "Sitelevel.ai",
      begin: { month: "Mar", year: "2025" },
      duration: null,
      occupation: "Head of Engineering",
      description:
        "Leading engineering efforts and building AI-powered solutions.",
    },
    {
      company: "Bond Vet",
      begin: { month: "May", year: "2018" },
      duration: "6 years 10 months",
      occupation: "Principal Software Architect",
      description:
        "Led the engineering team and was responsible for developing all in-house and client facing websites and apps.",
    },
    {
      company: "Veho Technologies",
      begin: { month: "Jan", year: "2017" },
      duration: "1 year 3 months",
      occupation: "Lead Developer",
      description: "Development of web, Android and iOS apps.",
    },
    {
      company: "atipso",
      begin: { month: "Feb", year: "2011" },
      duration: "5 years",
      occupation: "Lead Developer",
      description: "Consultant/Technical lead as a freelancer.",
    },
    {
      company: "d.velopment.at",
      begin: { month: "Feb", year: "2006" },
      duration: null,
      occupation: "CEO",
      description: "Freelance web developer, specialized on React and Node.js",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/daniel-holzmann-bb35235b",
    github: "https://github.com/dVelopment",
    email: "daniel@danielholzmann.com",
  },
  siteUrl: "https://danielholzmann.com",
  pathPrefix: "/",
  siteCover: "/images/cover.jpeg",
  googleAnalyticsId: "UA-159299329-1",
  background_color: "#0A0A0F",
  theme_color: "#00FF41",
  display: "minimal-ui",
  icon: "src/images/icon.png",
  headerLinks: [{ label: "Daniel Holzmann", url: "/" }],
  mastodon: "https://wien.rocks/@dVelopment",
  gravatar: "https://gravatar.com/h2online",
};

export default siteConfig;
