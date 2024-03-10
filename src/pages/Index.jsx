import { Box, Heading, Container, Flex, Spacer, Button, Image, SimpleGrid, Text, VStack, Link, chakra, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaRegNewspaper, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="header" bg="gray.100" p={4} align="center">
        <Heading size="lg" color="teal.500">
          Online Magazine
        </Heading>
        <Spacer />
        <Button leftIcon={<FaRegNewspaper />} colorScheme="teal" variant="solid">
          Subscribe
        </Button>
      </Flex>

      <Container maxW="container.xl" p={6}>
        <Box as="section" mb={10}>
          <Heading mb={4} size="xl">
            Featured Article
          </Heading>
          <Flex direction={{ base: "column", md: "row" }}>
            <Image src="https://images.unsplash.com/photo-1611504662471-2c1bf5b4be84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlZCUyMGFydGljbGV8ZW58MHx8fHwxNzEwMDcwODUxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured Article" borderRadius="md" w={{ base: "100%", md: "40%" }} mr={6} />
            <VStack align="start" spacing={4}>
              <Heading size="md">The Future of Technology</Heading>
              <Text>Explore the latest trends and innovations that are shaping the future.</Text>
              <Button colorScheme="teal" variant="outline">
                Read More
              </Button>
            </VStack>
          </Flex>
        </Box>

        <Box as="section" mb={10}>
          <Heading mb={4} size="xl">
            Latest Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} shadow="md" borderRadius="md" overflow="hidden">
                <Image src={`https://images.unsplash.com/photo-1620680779930-e74c15c8f7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpY2xlJTIwJTI0JTdCaW5kZXglMjAlMkIlMjAxJTdEfGVufDB8fHx8MTcxMDA3MDg1Mnww&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Article ${index + 1}`} />
                <Box p={4}>
                  <Heading size="md" mb={2}>
                    Article Title {index + 1}
                  </Heading>
                  <Text mb={4}>A brief overview of what the article is about. Catch the reader's attention!</Text>
                  <Link color="teal.500">Read More →</Link>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>

      <Flex as="footer" bg="gray.100" p={4} align="center">
        <chakra.span>© 2023 Online Magazine. All Rights Reserved.</chakra.span>
        <Spacer />
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebookF />} />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Index;
