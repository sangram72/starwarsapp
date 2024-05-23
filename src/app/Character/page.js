
"use client"
import { useEffect, useState } from 'react';
import { Container, VStack, Center, Spinner } from '@chakra-ui/react';
import CharacterDetail from '../../Components/CharacterDetail'; 
import { useSearchParams } from 'next/navigation';

const characterImages = [
  '/luke.jpeg',
  '/c3.jpg',
  '/R22.jpg',
  '/death.jpg',
  '/leia.jpeg',
  '/owen.jpg',
  '/beru.jpg',
  '/R5.jpg',
  '/biggs.jpeg',
  '/obi.jpg'
];

export default function CharacterPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const data = await response.json();
        const films = await Promise.all(data.films.map(async (filmUrl) => {
          const filmResponse = await fetch(filmUrl);
          const filmData = await filmResponse.json();
          return filmData.title;
        }));
        const characterImage = id <= 10 ? characterImages[id - 1] : null;
        setCharacter({ ...data, films, image: characterImage });
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  return (
    <Container maxW="container.md" py={4} centerContent>
      {character ? (
        <CharacterDetail character={character} />
      ) : (
        <Center minH="100vh">
          <Spinner size="xl" />
        </Center>
      )}
    </Container>
  );
}
