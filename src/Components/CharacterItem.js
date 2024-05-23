
"use client"
import { Box, Button, Text, Link as ChakraLink, Image, Flex, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';
import { WarningIcon, StarIcon } from '@chakra-ui/icons';


const CharacterItem = ({ character, toggleFavorite, favorites }) => {
  const isFavorite = favorites.some((fav) => fav.name === character.name);

  return (
    <Box
      p={4}
      borderWidth={1}
      bg="white"
      borderRadius="lg"
      color="black"
      width={{ base: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.33% - 12px)', lg: 'calc(25% - 12px)' }}
      minWidth="300px"
      boxShadow="md"
      _hover={{ bg: 'teal.100' }}
      mb={{ base: 4, lg: 4 }}
      mr={{ base: 0, sm: 4, md: 4, lg: 4 }}
    >
  {character.image && <Image src={character.image}  mb={4} height="170px" width="100%" borderRadius="10px"/>}
      <NextLink href={`/Character?id=${character.id}`} passHref>
  
          <Text fontWeight="bold">{character.name}</Text>
          <Text>Height: {character.height} cm</Text>
          <Text>Mass: {character.mass} kg</Text>

      </NextLink>
      <Flex mt={2}>
        <Spacer />
        <Button
          size='sm'
          colorScheme={isFavorite ? 'red' : 'blue'}
          onClick={() => toggleFavorite(character)}
        >
          {isFavorite ? <WarningIcon w={4} h={4} /> : <StarIcon w={4} h={4} />}
        </Button>
      </Flex>
    </Box>
  );
};

export default CharacterItem;
