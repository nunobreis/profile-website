import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { node } from 'prop-types';

import BackgroundImage from 'gatsby-background-image';

const HeroBackgroundImage = ({ children, ...props }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "london.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage Tag="div" fluid={imageData} {...props}>
      {children}
    </BackgroundImage>
  );
};

HeroBackgroundImage.propTypes = {
  children: node,
};

export default HeroBackgroundImage;
