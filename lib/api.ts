const MODULE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  slug
  moduleTitle
  mainImage {
    url
  }
  secondaryImage {
    url
  }
    moduleDescription {
        json
        links {
          assets {
            block {
              url
              description
            }
          }
        }
      }
`;

async function fetchGraphQL(query: any, preview = false) {
  return fetch(
   `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["modules"] },
    }
  ).then((response) => response.json());
}

function extractModuleEntries(fetchResponse: any) {
  return fetchResponse?.data?.heartbeatsRecruitmentCollection?.items;
}

export async function getAllModules(
  isDraftMode = false
) {
  const modules = await fetchGraphQL(
    `query {
        heartbeatsRecruitmentCollection(where:{slug_exists: true}, order: date_DESC, limit: 5, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${MODULE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractModuleEntries(modules);
}

export async function getModule(
  slug: string,
  isDraftMode = false
) {
  const module = await fetchGraphQL(
    `query {
        heartbeatsRecruitmentCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${MODULE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractModuleEntries(module)[0];
}