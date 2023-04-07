import React from 'react';

import MainSimple from 'layouts/MainSimple';
import {SimpleHeroWithQuote, SimpleHeroWithVideo} from './components';
import Features from './components/SimpleCenteredFeaturesSection';
import FeaturesWithMasonryCardsAndCheckIcons from './components/FeaturesWithMasonryCardsAndCheckIcons';
import BlogCardsWithFullBackgroundImage
  from './components/BlogCardsWithFullBackgroundImage';

interface entryType {
  fields: {
    topHeroHeader: string,
    body: string,
    topHeroVideo: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

const Spark = ({entry}: {entry: entryType;}): JSX.Element => {
  // console.log('entry in spark component', entry);

  const simpleHeroWithVideo = {
    header: entry.fields.topHeroHeader,
    body: entry.fields.body,
    video: entry.fields.topHeroVideo.fields.file.url
  };

  return (
    <MainSimple>
      {/* <SimpleHeroWithVideo content={simpleHeroWithVideo} />
      <SimpleHeroWithQuote />
      <Features /> */}
      <FeaturesWithMasonryCardsAndCheckIcons />
      <BlogCardsWithFullBackgroundImage />
    </MainSimple>
  );
};

export default Spark;
