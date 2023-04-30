import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { LandingPageBanner } from './LandingPageBanner';
import { PageLayout } from 'src/app/components/Layout';
import { Welcome } from './Welcome';
import { MetronionIntro } from './MetronionIntro';
import { Features } from './Features';
import { Roadmap } from './Roadmap';
import { City } from './City';
import { Box } from '@chakra-ui/layout';

export function HomePage() {
  return (
    <PageLayout>
      <Helmet>
        <title>MetroGalaxy Homepage</title>
        <meta name="description" content="The MetroGalaxy Homepage" />
      </Helmet>
      {/* For fullfil gap absolute navbar */}
      <Box height={92} />
      <LandingPageBanner />
      <Welcome />
      <MetronionIntro />
      <Features />
      <City />
      <Roadmap />
    </PageLayout>
  );
}
