import React from 'react';
import Spark from 'views/Spark';

import {getClient} from 'services/content';

const SparkPage = ({entry}): JSX.Element => {
  console.log('entry via slug', entry);
  return <Spark entry={entry.items[0]} />;
};

export async function getServerSideProps(context) {
  const client = getClient();

  const slug = context.query.slug ? context.query.slug : 'coles-group';

  const content_type = 'onePager';
  const entry = await client.getEntries({
    content_type,
    'fields.slug': slug,
    include: 2
  });

  return {
    props: {
      entry
    }, // will be passed to the page component as props
  };
}

export default SparkPage;
