import { StaticQuery, graphql } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`;

function Hero({ title, className }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "cover.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 2500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <BackgroundImage
            Tag={HeroContainer}
            className={className}
            fluid={imageData}
          >
            <TitleContainer>
              <HeroTitle>{title}</HeroTitle>
            </TitleContainer>
          </BackgroundImage>
        );
      }}
    />
  );
}

export default styled(Hero)`
  height: 50vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 70vh;
  }
`;
