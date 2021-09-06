import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import { Title } from 'src/app/components/Title';
import { Layout } from 'src/app/components/Layout';
import { mediaQuery, ScreenSize } from 'src/styles/media';
import FeatureOneImg from './assets/feature_bg_1.png';
import FeatureTwoImg from './assets/feature_bg_2.png';
import FeatureThreeImg from './assets/feature_bg_3.png';
import FeatureFourImg from './assets/feature_bg_4.png';
import FeatureOneLogo from './assets/feature_logo_1.png';
import FeatureTwoLogo from './assets/feature_logo_2.png';
import FeatureThreeLogo from './assets/feature_logo_3.png';
import FeatureFourLogo from './assets/feature_logo_4.png';
import { ColorConstants } from 'src/styles/StyleConstants';
import { FeaturePanel as FeaturePanelLib } from './FeaturePanel';

export function Features() {
  return (
    <Layout>
      <Background />
      <Wrapper>
        <Title>Features</Title>
        <Box>
          <FeatureOne>
            <FeatureLogo url={FeatureOneLogo} top={`1%`} left={`15%`} />
            <TextWrapper top={`35%`} left={`35%`}>
              <SubTitle>A better way to promote</SubTitle>
              <Description>
                Give you an easy way to show your NFT collection and have
                greater chances to let the world know about you
              </Description>
            </TextWrapper>
          </FeatureOne>
          <FeatureTwo>
            <FeatureLogo url={FeatureTwoLogo} top={`1%`} left={`15%`} />
            <TextWrapper top={`35%`} left={`14%`}>
              <SubTitle>Connecting People</SubTitle>
              <Description>
                The Metroverse is a blockchain-based platform to connect users
                around the world, bring you seamlessly gaming experience to own,
                play and earn.
              </Description>
            </TextWrapper>
          </FeatureTwo>
          <FeatureThree>
            <FeatureLogo url={FeatureThreeLogo} top={`40%`} left={`10%`} />
            <TextWrapper top={`35%`} left={`42%`}>
              <SubTitle>Digital assets, Digital identities</SubTitle>
              <Description>
                Easily become The Metroverse citizen, doing in-world quests,
                collecting items and create your own virtual life.
              </Description>
            </TextWrapper>
          </FeatureThree>
          <FeatureFour>
            <FeatureLogo url={FeatureFourLogo} top={`15%`} left={`42%`} />
            <TextWrapper top={`50%`} left={`42%`}>
              <SubTitle>Build by users</SubTitle>
              <Description>
                An open world with unlimited creativity, build your own land and
                governance inside The Metroverse.
              </Description>
            </TextWrapper>
          </FeatureFour>
        </Box>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;

const Box = styled.div`
  width: 100%;
  min-height: 100rem;

  position: relative;
  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    margin-top: 5rem;
  `}
`;

const SubTitle = styled.div`
  font-family: 'Acrom-Bold';
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 3.4rem;
  text-transform: capitalize;
  color: ${ColorConstants.WHITE};
  margin-bottom: 3rem;
`;

const Description = styled.div`
  font-family: 'Acrom-Light';
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${ColorConstants.WHITE};
`;

const TextWrapper = styled('div')<{ top: any; left: any }>`
  width: 100%;
  height: 100%;
  max-width: 30rem;
  max-height: 30rem;
  position: absolute;
  top: ${p => p.top};
  left: ${p => p.left};

  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    position: relative;
    top: 0;
    left: 0;
    max-width: 30rem;
    max-height: 25rem;
  `}
`;

const FeatureLogo = styled('div')<{ url: string; top: any; left: any }>`
  position: absolute;
  background-image: url(${p => p.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 30%;
  height: 30%;
  z-index: 10;
  top: ${p => p.top};
  left: ${p => p.left};

  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    position: relative;
    top: 0;
    left: 0;
    margin-right: 2rem;
  `}
`;

const featurePanelCss = css`
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;

  ${mediaQuery.lessThan(ScreenSize.PHONE)`
    position: relative;
    background-image: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `}

  ${mediaQuery.between(ScreenSize.PHONE, ScreenSize.TABLET)`
    position: relative;
    background-image: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `}
`;

const FeatureOne = styled(FeaturePanelLib)`
  background-image: url(${FeatureOneImg});
  top: 5%;
  left: 40%;
  height: 58rem;
  width: 60rem;
  z-index: 5;

  ${featurePanelCss}
  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    background-color: #7852DF;
  `}
`;

const FeatureTwo = styled(FeaturePanelLib)`
  background-image: url(${FeatureTwoImg});
  top: 15%;
  left: 10%;
  height: 58rem;
  width: 60rem;
  z-index: 4;

  ${featurePanelCss}
  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    background-color: #21A78E;
  `}
`;

const FeatureThree = styled(FeaturePanelLib)`
  background-image: url(${FeatureThreeImg});
  top: 40%;
  left: 0%;
  height: 60rem;
  width: 65rem;
  z-index: 3;

  ${mediaQuery.lessThan(ScreenSize.LAPTOP)`
    width: 62rem;
  `}

  ${featurePanelCss}
  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    background-color: #D29C34;
  `}
`;

const FeatureFour = styled(FeaturePanelLib)`
  background-image: url(${FeatureFourImg});
  top: 42%;
  right: 0%;
  height: 58rem;
  width: 80rem;
  z-index: 2;

  ${mediaQuery.lessThan(ScreenSize.LAPTOP)`
    width: 75rem;

    div:nth-child(1) {
      margin-left: 3rem;
    }
  `}

  ${featurePanelCss}
  ${mediaQuery.lessThan(ScreenSize.TABLET)`
    background-color: #C76EB4;
    div:nth-child(1) {
      margin-left: 0;
    }
  `}
`;

const Background = styled.div`
  background-color: #18669e;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: calc(100% + 30rem);
  position: absolute;
  top: -20rem;
  z-index: -4;
  transform: skewY(2deg);
`;
