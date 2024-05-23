// pages/index.js
"use client"
import { useEffect, useState } from 'react';
import { Container, VStack, Button, Spinner, Flex, Box } from '@chakra-ui/react';
import CharacterList from '../Components/CharacterList';
import FavoriteCharacters from '../Components/FavoriteCharacters';
import Navbar from '../Components/Navbar';

export default function Home() {

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
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [page, setPage] = useState('https://swapi.dev/api/people/');
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await fetch(page);
        const data = await response.json();
        setCharacters(data.results.map((character, index) => ({
          ...character,
          id: character.url.match(/\/([0-9]*)\/$/)[1], 
          image: index < 10 ? characterImages[index] : null,
        })));
        // setNextPage(data.next);
        // setPrevPage(data.previous);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (character) => {
    const index = favorites.findIndex((fav) => fav.name === character.name);
    if (index === -1) {
      const newFavorites = [...favorites, character];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(index, 1);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const toggleFavoritesVisibility = () => {
    setShowFavorites(!showFavorites);
  };

  const handleSearch = (searchTerm) => {
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCharacters(filteredCharacters);
  };

  return (
    <Box
     
      bgSize="cover"
      bgPosition="center"
      minHeight="100vh"
    >
      <Navbar showFavorites={showFavorites} toggleFavoritesVisibility={toggleFavoritesVisibility} onSearch={handleSearch} />
      <Container maxW="container.lg" py={4}>
        <VStack spacing={4}>
          {loading ? (
            <Spinner size="xl" color='white'/>
          ) : showFavorites ? (
            <FavoriteCharacters favorites={favorites} toggleFavorite={toggleFavorite} />
          ) : (
            <>
              <CharacterList characters={characters} toggleFavorite={toggleFavorite} favorites={favorites} />
             
            </>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
