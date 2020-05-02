import { Col, Container, Row } from 'react-awesome-styled-grid';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';

import About from '../components/about';
import Hero from '../components/hero';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import React from 'react';
import Repositories from '../components/repositories';
import SEO from '../components/SEO';
import Skills from '../components/skills';
import Timeline from '../components/timeline';
import Wrapper from '../components/wrapper';
import siteConfig from '../../data/siteConfig';
import styled from 'styled-components';

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`;

function Home({ location, className }) {
  // validate siteConfig settings
  if (siteConfig.googleAnalyticsId === 'UA-000000000-1') {
    console.error(
      'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.',
    );
  }

  const query = graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `;

  const title = siteConfig.siteTitle;
  const { keywords } = siteConfig;
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout location={location}>
            <SEO title={title} keywords={keywords} />

            <Hero title={title} />

            <Wrapper className={className}>
              <Container className="page-content" fluid>
                <Row>
                  <Col xs={4} className="avatar">
                    <Img
                      fixed={data.file.childImageSharp.fixed}
                      className="avatar__image"
                      alt="Daniel Holzmann"
                    />
                    <div className="social">
                      {siteConfig.social.github && (
                        <a
                          className="social-link github"
                          href={siteConfig.social.github}
                        >
                          <FaGithub className="social-icon" size="32" />
                        </a>
                      )}
                      {siteConfig.social.linkedin && (
                        <a
                          className="social-link linkedin"
                          href={siteConfig.social.linkedin}
                        >
                          <FaLinkedin className="social-icon" size="32" />
                        </a>
                      )}
                      {siteConfig.social.twitter && (
                        <a
                          className="social-link twitter"
                          href={siteConfig.social.twitter}
                        >
                          <FaTwitter className="social-icon" size="32" />
                        </a>
                      )}
                      {siteConfig.social.email && (
                        <a
                          className="social-link email"
                          href={`mailto:${siteConfig.social.email}`}
                        >
                          <FaEnvelope className="social-icon" size="32" />
                        </a>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} sm={4}>
                    <About title="About" text={siteConfig.authorDescription} />
                  </Col>
                  <Col xs={4} sm={4}>
                    <Skills title="Skills" skills={siteConfig.skills} />
                  </Col>
                </Row>
                <Separator />
                <Timeline />
                <Separator />
                <Repositories />
              </Container>
            </Wrapper>
          </Layout>
        );
      }}
    />
  );
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`;
