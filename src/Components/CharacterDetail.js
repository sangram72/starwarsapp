
import { Box, Text, Heading, VStack, Spinner ,Center,Image} from '@chakra-ui/react';

const CharacterDetail = ({ character }) => {
  if (!character) {
    return <Spinner size="xl" />;
  }

  return (
    <Center minH="100vh">
    <Box borderWidth={1} borderRadius="lg" p={4} boxShadow="md" maxWidth="600px" width="100%" bg="white"
      _hover={{ bg: 'teal.100' }}>
          {character.image && <Image src={character.image}  mb={4} height="170px" width="100%" borderRadius="10px"/>}
      <VStack spacing={1}>
        <Heading as="h3" size="lg">
          {character.name}
        </Heading>
        <Text>Height: {character.height} cm</Text>
        <Text>Mass: {character.mass} kg</Text>
        <Text>Birth Year: {character.birth_year}</Text>
        <Text>Gender: {character.gender}</Text>
        <Heading as="h3" size="md" mt={4}>
          Films
        </Heading>
        {character.films.map((film, index) => (
          <Text key={index}>{film}</Text>
        ))}
      </VStack>
    </Box>
    </Center>
  );
};

export default CharacterDetail;
