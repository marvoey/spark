import React from 'react';
import PropTypes from 'prop-types';
import Spark from 'views/Spark';

import {getClient} from 'services/content';

const SparkPage = ({entry}): JSX.Element => {
  console.log('entry via slug', entry);
  return <Spark entry={entry} />;
};

export async function getServerSideProps(context) {
  const client = getClient();

  const slug = context.query.slug ? context.query.slug : 'coles-group';

  const entries = await client.getEntries({
    'content_type': 'onePager',
    include: 2
  });

  const content_type = 'onePager';
  const entry = await client.getEntries({
    content_type,
    'fields.slug': slug,
    include: 2
  });

  return {
    props: {
      entries,
      entry: entry.items[0]
    }, // will be passed to the page component as props
  };
}

SparkPage.propTypes = {
  entry: PropTypes.object,
};
export default SparkPage;
