import React from 'react';
import {Typography} from '@mui/material';

import SimpleHeroWithVideo, {SimpleHeroWithVideoType} from 'views/Spark/components/SimpleHeroWithVideo/SimpleHeroWithVideo';
import SimpleHeroWithQuote, {SimpleHeroWithQuoteType} from 'views/Spark/components/SimpleHeroWithQuote/SimpleHeroWithQuote';
import SimpleCenteredFeaturesSection from 'views/Spark/components/SimpleCenteredFeaturesSection/SimpleCenteredFeaturesSection';
import BlogCardsWithFullBackgroundImage from 'views/Spark/components/BlogCardsWithFullBackgroundImage/BlogCardsWithFullBackgroundImage';
import FeaturesWithMasonryCardsAndCheckIcons from 'views/Spark/components/FeaturesWithMasonryCardsAndCheckIcons/FeaturesWithMasonryCardsAndCheckIcons';

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

const Canvas = ({canvas}: {canvas: (ComponentType<SimpleHeroWithVideoType> | ComponentType<SimpleHeroWithQuoteType> | ComponentType<SimpleCenteredFeaturesSectionType>)[];}): JSX.Element => {
  console.log('canvas:', canvas);

  return (
    <>
      {canvas.map(item => {
        if('video' in item.fields) {
          return (
            <SimpleHeroWithVideo key={item.sys.id} content={item.fields} />
          );
        }
        else if('quote' in item.fields) {
          return (
            <>
              <SimpleHeroWithQuote content={item.fields} />
            </>
          );
        }
        else if(item.sys.contentType.sys.id == 'simpleCenteredFeaturesSection') {
          return (
            <>
              <SimpleCenteredFeaturesSection />
            </>
          );
        }
        else if(item.sys.contentType.sys.id == 'featuresWithMasonryCards') {
          return (
            <>
              <Typography variant="body1">
                Some name this is hardcoded
              </Typography>
              <Typography variant='subtitle1'>
                featuresWithMasonryCards
              </Typography>
            </>
          );
        }
        else if(item.sys.contentType.sys.id == 'blogCardsWithFullBackgroundImage') {
          return (
            <>
              <BlogCardsWithFullBackgroundImage />
            </>
          );
        }
        else if(item.sys.contentType.sys.id == 'featuresWithMasonryCardsAndCheckIcons') {
          return (
            <>
              <FeaturesWithMasonryCardsAndCheckIcons />
            </>
          );
        }
      })}
    </>
  );
};

export default Canvas;
