import { createClient } from 'contentful';

const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: 'master', // defaults to 'master' if not set
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
  })

export async function getAllModulesREST() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   });
  const modules = await client.getEntries({ content_type: "module3" });
  return modules.items;
}