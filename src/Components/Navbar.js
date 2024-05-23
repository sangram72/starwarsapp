import React from 'react';
import { Box, Flex, Link as ChakraLink, Text, Button, Input } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = ({ showFavorites, toggleFavoritesVisibility, onSearch }) => {
  return (
    <Box bg="black" color="white" py={4} width="100%" >
      <Flex justify="space-between" align="center" px={{ base: 4, md: 8 }} maxW="container.lg" mx="auto" wrap="wrap">
        <Link href="/" passHref>
          <ChakraLink>
            <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }}>Star Wars Characters</Text>
          </ChakraLink>
        </Link>
        <Flex mt={{ base: 2, md: 0 }} align="center">
          <Input
            type="text"
            placeholder="Search"
            size="sm"
            onChange={(e) => onSearch(e.target.value)}
            mr={2}
          />
          {showFavorites ? (
            <Button size="sm" color="white" variant="outline" onClick={toggleFavoritesVisibility}>
              Hide Favorites
            </Button>
          ) : (
            <Button size="sm" color="white" variant="outline" onClick={toggleFavoritesVisibility}>
              Favorites
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
