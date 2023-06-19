import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

import PortfolioContext from '../../context/context';
import HeroBackgroundImage from './HeroBackgroundImage';
import Emoji from '../Emoji/Emoji';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title = 'Hi, my name is', name = 'Nuno', subtitle = 'I am', cta = 'Know More' } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const typeWriterOptions = {
    strings: ['an Egineering Manager', 'a Senior Developer', 'a UI/UX Designer'],
    autoStart: true,
    loop: true,
    delay: 40,
    pauseFor: 500,
  };

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <HeroBackgroundImage>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title}
              <span className="text-color-main">&nbsp;{`${name}`}</span>
              <br />
              <Emoji symbol="👨‍💻" label="developer" />
              {` ${subtitle} `} {isMobile && <br />}
              <Typewriter options={typeWriterOptions} />
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || 'Know more'}
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      </section>
    </HeroBackgroundImage>
  );
};

export default Header;
