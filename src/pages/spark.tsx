import React from 'react';
import Spark from 'views/Spark';

import {getClient} from 'services/content';

const SparkPage = ({entries}): JSX.Element => {
  console.log('entries', entries);
  return <Spark />;
};

export async function getServerSideProps(context) {
  const client = getClient();

  const slug = context.query.slug ? context.query.slug : 'coles-group';

  const content_type = 'onePager';
  const entries = await client.getEntries({
    content_type,
    // 'fields.slug': slug,
    include: 2
  });

  console.log('entries', entries);

  return {
    props: {
      entries
    }, // will be passed to the page component as props
  };
}

export default SparkPage;
