const MODULE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  slug
  moduleTitle
  mainImage {
    url
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
      next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse: any) {
  return fetchResponse?.data?.heartbeatsRecruitmentCollection?.items;
}

export async function getAllArticles(
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
        heartbeatsRecruitmentCollection(where:{slug_exists: true}, order: date_DESC, limit: 100, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${MODULE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(articles);
}

export async function getArticle(
  slug: string,
  isDraftMode = false
) {
  const article = await fetchGraphQL(
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
  return extractArticleEntries(article)[0];
}