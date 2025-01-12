import { createClient } from 'contentful';

const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: 'master',
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
  })

export async function getAllModulesREST(module) {
  const modules = await client.getEntries({ content_type: module });
  return modules.items;
}