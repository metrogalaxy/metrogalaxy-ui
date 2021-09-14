import * as React from 'react';
import styled from 'styled-components/macro';
import { Row as RowLib, Col as ColLib } from 'react-bootstrap';
import { Layout as LayoutLib } from 'src/app/components/Layout';
import { Title as TitleLib } from 'src/app/components/Title';
import AvatarImg from './assets/avatar.png';
import { Avatar } from 'src/app/components/Avatar';

interface AdvisorInfo {
  name: string;
  description: string;
  avatarUrl: string;
}

const listAdvisorsDefault: AdvisorInfo[] = [
  {
    name: 'Quang Le',
    description:
      'Ut non enim fermentum, aliquet dolor eget, vulputate ante. Donec iaculis consequat vehicula. Vestibulum consequat mauris',
    avatarUrl: AvatarImg,
  },
  {
    name: 'Quang Le',
    description:
      'Ut non enim fermentum, aliquet dolor eget, vulputate ante. Donec iaculis consequat vehicula. Vestibulum consequat mauris',
    avatarUrl: AvatarImg,
  },
  {
    name: 'Quang Le',
    description:
      'Ut non enim fermentum, aliquet dolor eget, vulputate ante. Donec iaculis consequat vehicula. Vestibulum consequat mauris',
    avatarUrl: AvatarImg,
  },
];

export function Advisors() {
  const [listAdvisors] = React.useState<AdvisorInfo[]>(listAdvisorsDefault);

  const listAdvisorComponents = listAdvisors.map((item, index) => (
    <Col
      key={index}
      data-aos="flip-right"
      data-aos-once="true"
      data-aos-duration="1500"
      xs={6}
      lg={4}
    >
      <Avatar
        title={item.name}
        description={item.description}
        avatarUrl={item.avatarUrl}
      />
    </Col>
  ));
  return (
    <Layout>
      <Background />
      <Title data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
        Advisors
      </Title>
      <Row>{listAdvisorComponents}</Row>
    </Layout>
  );
}

const Layout = styled(LayoutLib)`
  margin: 0;
  padding-bottom: 5rem;
`;

const Title = styled(TitleLib)`
  margin-bottom: 10rem;
`;

const Row = styled(RowLib)`
  width: 100%;
  max-width: 120rem;
`;

const Col = styled(ColLib)`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  background-color: #787878;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
`;
