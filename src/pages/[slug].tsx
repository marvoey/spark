import React from 'react';
import {useTheme} from '@mui/material/styles';
import {getClient} from 'services/content';
import Container from 'components/Container';
import Canvas from 'components/Canvas';

import {SimpleHeroWithVideoType} from 'views/Spark/components/SimpleHeroWithVideo/SimpleHeroWithVideo';
import {SimpleHeroWithQuoteType} from 'views/Spark/components/SimpleHeroWithQuote/SimpleHeroWithQuote';
import {SimpleCenteredFeaturesSectionType} from 'views/Spark/components/SimpleCenteredFeaturesSection/SimpleCenteredFeaturesSection';
import {Box, Typography} from '@mui/material';

export interface ComponentType<T> {
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

export type CanvasComponentTypes = ComponentType<SimpleHeroWithVideoType> | ComponentType<SimpleHeroWithQuoteType> | ComponentType<SimpleCenteredFeaturesSectionType>;

export interface OnePagerType {
  fields: {
    canvas: CanvasComponentTypes[],
    name: string,
    slug: string,
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

const OnePager = ({entry}: {entry: OnePagerType;}): JSX.Element => {
  const theme = useTheme();
  const canvas = entry.fields.canvas;
  return (
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
      <Canvas canvas={canvas} entry={entry} />
    </Container >
  );
};

export async function getServerSideProps(context) {
  const client = getClient();

  const slug = context.query.slug;

  const content_type = 'onePager';
  const entry = await client.getEntries({
    content_type,
    'fields.slug': slug,
    include: 2
  });

  return {
    props: {
      entry: entry.items[0]
    }, // will be passed to the page component as props
  };
}

export default OnePager;