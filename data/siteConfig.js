module.exports = {
  siteTitle: "Hi! I'm Daniel!",
  siteDescription: 'I’m Daniel and I’m a full-stack JavaScript engineer!',
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Daniel Holzmann',
  twitterUsername: 'h2online',
  githubUsername: 'dVelopment',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Developer, web enthusiast.<br />
  I started coding for fun as a teenager. As an adult, it grew into finally being my main occupation.<br />
  At age 30, after years of experience and autodidact training, I started studying 
  <strong>Software Engineering</strong> at the <strong>University of Applied Sciences Upper Austria in Hagenberg</strong>.<br />
  Now I work as a full-stack web developer and mainly work with <strong>JavaScript, NodeJS and React/React Native</strong>.`,
  skills: [
    {
      name: 'Javascript',
      level: 95,
    },
    {
      name: 'NodeJs',
      level: 95,
    },
    {
      name: 'React',
      level: 80,
    },
    {
      name: 'React Navtive',
      level: 70,
    },
    {
      name: 'HTML',
      level: 90,
    },
    {
      name: 'CSS',
      level: 90,
    },
    {
      name: 'Git',
      level: 80,
    },
  ],
  jobs: [
    {
      company: 'Bond Vet',
      begin: {
        month: 'may',
        year: '2018',
      },
      duration: null,
      occupation: 'Lead Software Engineer',
      description:
        "I'm responsible for developing all our in-house and client facing websites and apps.",
    },
    {
      company: 'Veho technologies',
      begin: {
        month: 'jan',
        year: '2017',
      },
      duration: '1 year 3 months',
      occupation: 'Lead Developer',
      description: 'Development of web, Android and iOS apps.',
    },
    {
      company: 'Anapro',
      begin: {
        month: 'set',
        year: '2012',
      },
      duration: '5 years',
      occupation: 'Lead Developer',
      description: 'Consultant/Technical lead as a freelancer.',
    },
    /* ... */
  ],
  social: {
    twitter: 'https://twitter.com/h2online',
    linkedin: 'https://www.linkedin.com/in/daniel-holzmann-bb35235b',
    github: 'https://github.com/dVelopment',
    email: 'daniel@danielholzmann.com',
  },
  siteUrl: 'https://danielholzmann.com',
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-159299329-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Daniel Holzmann',
      url: '/',
    },
  ],
}
