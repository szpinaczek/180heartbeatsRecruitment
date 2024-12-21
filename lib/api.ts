export const MODULE1_GRAPHQL_FIELDS = `
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

export const MODULE3_GRAPHQL_FIELDS = `
  sys {
    id
  }
  slug
  moduleTitle
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

function extractModuleEntries(fetchResponse: any, contentType: string) {
  return fetchResponse?.data?.[contentType]?.items;
}

export async function getAllModules(
  isDraftMode = false,
  query: string,
  contentType: string
) {
  const modules = await fetchGraphQL(
    `query {
        ${contentType}(where:{slug_exists: true}, order: date_ASC, limit: 5, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${query}
          }
        }
      }`,
    isDraftMode
  );
  return extractModuleEntries(modules, contentType);
}

// export async function getModule(
//   slug: string,
//   isDraftMode = false
// ) {
//   const module = await fetchGraphQL(
//     `query {
//         module3Collection(where:{slug: "${slug}"}, limit: 1, preview: ${
//       isDraftMode ? "true" : "false"
//     }) {
//           items {
//             ${MODULE3_GRAPHQL_FIELDS}
//           }
//         }
//       }`,
//     isDraftMode
//   );
//   return extractModuleEntries(module)[0];
// }