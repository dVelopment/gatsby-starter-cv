export interface Skill {
  name: string;
  level: number;
}

export interface DatePeriod {
  month: string;
  year: string;
}

export interface Job {
  company: string;
  begin: DatePeriod;
  duration: string | null;
  occupation: string;
  description: string;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  keyWords: string[];
  authorName: string;
  twitterUsername: string;
  githubUsername: string;
  authorAvatar: string;
  authorDescription: string;
  skills: Skill[];
  jobs: Job[];
  social: SocialLinks;
  siteUrl: string;
  pathPrefix: string;
  siteCover: string;
  googleAnalyticsId: string;
  background_color: string;
  theme_color: string;
  display: string;
  icon: string;
  headerLinks: Array<{ label: string; url: string }>;
  mastodon?: string;
  gravatar?: string;
}
