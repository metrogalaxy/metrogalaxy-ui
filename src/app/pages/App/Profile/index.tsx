import * as React from 'react';
import { Flex, Icon, Text, Grid, GridItem, Stack } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { PageLayout } from '../components';
import { ProfilePanel } from './ProfilePanel';
import { Settings } from './Settings';

const TabProfile = 'profile';
const TabSettings = 'settings';

export function Profile() {
  const [tab, setTab] = React.useState<string>(TabProfile);

  const handleChangeTab = (value: string) => {
    setTab(value);
  };

  return (
    <PageLayout title="User Profile" content="User Profile">
      <Flex alignItems="center" mb={{ base: 6, sm: 8 }}>
        <Icon as={AiOutlineUser} width="32px" height="32px" color="green.200" />
        <Text textStyle="appTitle" textTransform="capitalize" ml={2}>
          My Account
        </Text>
      </Flex>
      <Grid templateColumns={{ base: '1fr 4fr' }}>
        <GridItem>
          <Stack gap={4}>
            <Text
              textStyle="appNormal"
              color={tab === TabProfile ? 'green.200' : 'white'}
              onClick={() => handleChangeTab(TabProfile)}
              cursor="pointer"
            >
              Profile
            </Text>
            <Text
              textStyle="appNormal"
              color={tab === TabSettings ? 'green.200' : 'white'}
              onClick={() => handleChangeTab(TabSettings)}
              cursor="pointer"
            >
              Settings
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          {tab === TabProfile ? <ProfilePanel /> : <Settings />}
        </GridItem>
      </Grid>
    </PageLayout>
  );
}
