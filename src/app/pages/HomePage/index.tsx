import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { CharacterContainer } from './components/Character';
import { Features } from './components/Features';
import { Roadmap } from './Roadmap';
import { Land } from './Land';
// import { Advisors } from './components/Advisors';
// import { Team } from './components/Team';
import { Footer } from './components/Footer';

export function HomePage() {
  return (
    <Wrapper>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="The Metroverse Homepage" />
      </Helmet>
      <NavBar />
      <Banner />
      <CharacterContainer />
      <Land />
      <Features />
      <Roadmap />
      {/* <Advisors /> */}
      {/* <Team /> */}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
