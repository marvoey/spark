/* eslint-disable no-undef */
import {createClient} from 'contentful';

const isDev = process.env.NODE_ENV ? process.env.NODE_ENV : true;
const spaceId = process.env.CONTENTFUL_SPACE_ID ? process.env.CONTENTFUL_SPACE_ID : process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN ? process.env.CONTENTFUL_DELIVERY_TOKEN : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;
const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT ? process.env.CONTENTFUL_ENVIRONMENT : process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;

console.log();
export function getClient() {
  return createClient({
    accessToken: isDev ? previewToken : deliveryToken,
    space: spaceId,
    host: isDev ? 'preview.contentful.com' : 'cdn.contentful.com',
    environment: environment ? environment : 'master',
  });
}

