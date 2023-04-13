import React from 'react';
import { getClient } from 'services/content';
import Container from 'components/Container';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { OnePagerType } from './[slug]';
import Fluid from 'layouts/Fluid';

const Index = ({ entries }: { entries: OnePagerType[]; }): JSX.Element => {
  console.log('entries:', entries);
  return (
    <Fluid>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Box marginBottom={'30px'}>
            <Typography
              variant={'h3'}
              fontWeight={700}
              align={'center'}
              gutterBottom
            >
              Still a lot to do but it is starting
              <br />
              to come together.
            </Typography>
            <Typography variant={'h6'} color={'text.secondary'} align={'center'}>
              A couple of components have been built out. Below you
              <br />
              should see a list of links to a couple of one pagers.
            </Typography>
          </Box>
          <Box>
            <List>
              {entries.map(entry => {
                return (
                  <ListItem key={entry.sys.id} disablePadding>
                    <Link href={`/${entry.fields.slug}`}>
                      {entry.fields.name}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Container>
      </Box>
    </Fluid>
  );
};

export async function getServerSideProps() {
  const client = getClient();

  const content_type = 'onePager';
  const entries = await client.getEntries({
    content_type,
    include: 2
  });

  return {
    props: {
      entries: entries.items
    }, // will be passed to the page component as props
  };
}

export default Index;