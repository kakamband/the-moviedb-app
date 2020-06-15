import React, { useEffect, useState } from 'react';

import { Section } from '../../styles/shared';

import { getDocumentaries } from '../../services/api';
import Media from '../Media';

interface Item {
  poster_path: string | null;
  title: string;
  id: number;
}

const Documentary: React.FC = () => {
  const [documentaries, setDocumentaries] = useState<Item[]>([]);

  useEffect(() => {
    async function loadDocumentaries() {
      const documentaries = await getDocumentaries();
      setDocumentaries(documentaries);
    }
    loadDocumentaries();
  }, []);

  return (
    <>
      {documentaries && (
        <Section>
          <h1>Documentary</h1>
          <ul>
            {documentaries.map((item) => (
              <li key={item.id}>
                <Media item={item} type="movie" />
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
};

export default Documentary;
