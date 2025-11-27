import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import siteConfig from "../../data/siteConfig";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title, description, pathname, children }) => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = site?.siteMetadata ?? {};

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ""}`,
    image: `${siteUrl}/images/avatar.jpg`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description || ""} />
      <meta name="keywords" content={siteConfig.keyWords.join(", ")} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title || ""} />
      <meta property="og:description" content={seo.description || ""} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title || ""} />
      <meta name="twitter:description" content={seo.description || ""} />
      <meta name="twitter:creator" content={`@${siteConfig.twitterUsername}`} />
      <meta name="twitter:image" content={seo.image} />

      {/* Verification links */}
      {siteConfig.mastodon && <link rel="me" href={siteConfig.mastodon} />}
      {siteConfig.gravatar && <link rel="me" href={siteConfig.gravatar} />}
      <link rel="me" href={`https://github.com/${siteConfig.githubUsername}`} />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {children}
    </>
  );
};

export default SEO;
