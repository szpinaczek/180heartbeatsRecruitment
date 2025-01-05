"use client";
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';

// Typy dla danych z Contentful
type ContentfulEntry = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    // Dodaj inne pola z Contentful
  };
};

const ContentfulDataPage: NextPage = () => {
  const [entries, setEntries] = useState<ContentfulEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`
        );

        if (!response.ok) {
          throw new Error(`Błąd pobierania danych: ${response.status}`);
        }

        const json = await response.json();
        setEntries(json.items);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(entries);

  // Renderowanie komponentu
  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Błąd: {error.message}</div>;
  }

  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.sys.id}>{entry.fields.title}</li>
      ))}
    </ul>
  );
};

export default ContentfulDataPage;
