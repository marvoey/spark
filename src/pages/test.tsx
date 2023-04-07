import React from 'react';
import {useTheme} from '@mui/material/styles';
import {getClient} from 'services/content';
import Container from 'components/Container';
import Canvas from 'components/Canvas';

import {SimpleHeroWithVideoType} from 'views/Spark/components/SimpleHeroWithVideo/SimpleHeroWithVideo';
import {SimpleHeroWithQuoteType} from 'views/Spark/components/SimpleHeroWithQuote/SimpleHeroWithQuote';
import {Box, Typography} from '@mui/material';


interface FeatureType {
  body: string,
  name: string,
  slug: string,
}

interface SimpleCenteredFeaturesSectionType {
  features: FeatureType[],
  name: string,
  slug: string;
}

interface ComponentType<T> {
  fields: T,
  sys: {
    contentType: {
      sys: {
        id: string,
      },
    },
    id: string,
  },
}

interface TestEntryType {
  fields: {
    canvas: (ComponentType<SimpleHeroWithVideoType> | ComponentType<SimpleHeroWithQuoteType> | ComponentType<SimpleCenteredFeaturesSectionType>)[],
    name: string,
  },
  sys: {
    contentType: {
      sys: {
        id: string,
      },
    },
    id: string,
  },
}

const TestPage = ({entries, testEntry}: {entries, testEntry: TestEntryType;}): JSX.Element => {

  const theme = useTheme();
  console.log('entries:', entries);
  console.log('testEntry:', testEntry);

  const canvas = testEntry.fields.canvas;

  console.log('canvas:', canvas);

  return (
    <>
      <Container>
        <Box
          width={1}
          height={1}
          borderRight={{xs: 0, sm: `1px solid ${theme.palette.divider}`}}
          paddingRight={{xs: 0, sm: 4}}
          paddingTop={{xs: 4, sm: 0}}
          borderTop={{xs: `1px solid ${theme.palette.divider}`, sm: 0}}
        >
          <Typography variant='h3'>
            This is a test page
          </Typography>
          <Typography variant='body1'>
            But it is completely controlled to a certain extent by Contentful. The link below will take you to the space where you can rearrange things.
          </Typography>
        </Box>
      </Container>
      <Canvas canvas={canvas} />
    </>
  );
};

export async function getServerSideProps(context) {
  const client = getClient();

  const entries = await client.getEntries({
    'content_type': 'onePager',
    include: 2
  });

  const testEntry = entries.items[0];

  return {
    props: {
      entries,
      testEntry
    }, // will be passed to the page component as props
  };
}


export default TestPage;
