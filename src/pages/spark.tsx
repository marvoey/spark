import React from 'react';
import Spark from 'views/Spark';

const mock = {
  fields: {
    topHeroHeader: 'This is the header',
    body: 'This is the body. Should be a couple of different sentences. ',
    topHeroVideo: {
      fields: {
        file: {
          url: '/videos/video.mp4',
        },
      },
    },
  }
};

const SparkPage = (): JSX.Element => {
  return <Spark entry={mock} />;
};

export default SparkPage;
