import React from 'react';

import MainSimple from 'layouts/MainSimple';
import {SimpleHeroWithQuote, SimpleHeroWithVideo} from './components';
import Features from './components/Features';
import FeaturesWithMasonryCardsAndCheckIcons from './components/FeaturesWithMasonryCardsAndCheckIcons';
import BlogCardsWithFullBackgroundImage
  from './components/BlogCardsWithFullBackgroundImage';

import {getClient} from 'services/content';
import {BLOCKS, INLINES} from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const Spark = ({entry}): JSX.Element => {
  console.log('entry in spark component', entry);

  const simpleHeroWithVideo = {
    header: entry.fields.topHeroHeader,
    body: entry.fields.body,
    video: entry.fields.topHeroVideo.fields.file.url
  };

  return (
    <MainSimple>
      <SimpleHeroWithVideo content={simpleHeroWithVideo} />
      <SimpleHeroWithQuote />
      <Features />
      <FeaturesWithMasonryCardsAndCheckIcons />
      <BlogCardsWithFullBackgroundImage />
    </MainSimple>
  );
};

export default Spark;
