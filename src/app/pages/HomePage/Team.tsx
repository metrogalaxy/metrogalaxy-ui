import * as React from 'react';
import styled from 'styled-components/macro';
import { Row as RowLib, Col as ColLib } from 'react-bootstrap';
import { Layout as LayoutLib } from 'src/app/components/Layout';
import { Title as TitleLib } from 'src/app/components/Title';
import AvatarImg from './assets/avatar.png';
import { Avatar } from 'src/app/components/Avatar';

interface TeamInfo {
  name: string;
  description: string;
  avatarUrl: string;
}

const listIteamDefault: TeamInfo[] = [
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
      'Blockchain expert. Ut non enim fermentum, aliquet dolor eget, vulputate ante. Donec iaculis consequat vehicula. Vestibulum consequat mauris',
    avatarUrl: AvatarImg,
  },
];

export function Team() {
  const [listTeam, setListTeam] = React.useState<TeamInfo[]>(listIteamDefault);

  const listTeamComponent = listTeam.map((item, index) => (
    <Col key={index}>
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
      <Title>Team</Title>
      <Row xs={2} sm={3}>
        {listTeamComponent}
      </Row>
    </Layout>
  );
}

const Layout = styled(LayoutLib)`
  padding-top: 10rem;
  margin: 0 0 10rem;
`;

const Title = styled(TitleLib)`
  margin-bottom: 10rem;
`;

const Row = styled(RowLib)`
  max-width: 120rem;
`;

const Col = styled(ColLib)`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  background-color: #565656;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: calc(100% + 10rem);
  position: absolute;
  z-index: -1;
`;
