// components/FavoriteCharacters.js
import { VStack, Flex } from '@chakra-ui/react';
import CharacterItem from './CharacterItem';

const FavoriteCharacters = ({ favorites, toggleFavorite }) => {
  return (
    <VStack spacing={4} align="center" width="100%">
      <Flex wrap="wrap" justify="space-between" width="100%">
        {favorites.map((character) => (
          <CharacterItem
            key={character.name}
            character={character}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))}
      </Flex>
    </VStack>
  );
};

export default FavoriteCharacters;
