"use client"

import { useState, useEffect } from 'react';

type ContentfulData = {
  data: any[];
  isLoading: boolean;
  error: Error | null;
};

export default async function useContentfulData(
  spaceId: string,
  accessToken: string,
  contentType: string,
  query: { [key: string]: any } = {},
): Promise<ContentfulData> {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `https://cdn.contentful.com/spaces/${spaceId}/entries`;
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        };

        const response = await fetch(endpoint, {
          method: 'GET',
          headers,
          body: JSON.stringify({
            content_type: contentType,
            ...query,
          }),
        });

        if (!response.ok) {
          throw new Error(`Błąd podczas pobierania danych: ${response.status}`);
        }

        const data = await response.json();
        setData(data.items);
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [spaceId, accessToken, contentType, query]);

  return { data, isLoading, error };
}

// // Przykładowe użycie w komponencie Next.js:
// function MyComponent() {
//   const { data, isLoading, error } = useContentfulData(
//     'YOUR_SPACE_ID',
//     'YOUR_ACCESS_TOKEN',
//     'blogPost'
//   );

//   if (isLoading) {
//     return <p>Ładowanie danych...</p>;
//   }

//   if (error) {
//     return <p>Wystąpił błąd: {error.message}</p>;
//   }

//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.sys.id}>
//           <h2>{item.fields.title}</h2>
//           <p>{item.fields.body}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default MyComponent;
