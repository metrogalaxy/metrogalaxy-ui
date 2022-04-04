import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { LandingPageBanner } from './LandingPageBanner';
import { PageLayout } from 'src/app/components/Layout';
import { Welcome } from './Welcome';
import { MetronionIntro } from './MetronionIntro';
import { Features } from './Features';
import { Roadmap } from './Roadmap';
import { City } from './City';

export function LandingPage() {
  return (
    <PageLayout isShowConnectWallet={false}>
      <Helmet>
        <title>MetroGalaxy Homepage</title>
        <meta name="description" content="The MetroGalaxy Homepage" />
      </Helmet>
      <LandingPageBanner />
      <Welcome />
      <MetronionIntro />
      <Features />
      <City />
      <Roadmap />
    </PageLayout>
  );
}
