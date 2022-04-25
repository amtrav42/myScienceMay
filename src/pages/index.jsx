import * as React from 'react';
import {
  Heading, Container, Text, Link, Flex, Image, Box,
} from '@chakra-ui/react';
import Footer from '../components/footer/footer';
import Faq from '../components/faq/faq';
import Schedule from '../components/schedule/schedule';

// styles

// markup
function IndexPage() {
  return (
    <main>
      <title>Home Page</title>
      <header>

        <Flex justify="center">
          <Image src="https://mysciencemay.s3.amazonaws.com/monthPrompts.png" alt="List of prompts for SciComm September, see below for details" fit="contain" margin={[3, 4, 5]} boxSize={['300px', '400px', '500px']} />

        </Flex>
      </header>
      <Box backgroundColor="RGBA(0, 178, 169, 1)" p="5">
        <Text textAlign="center" m="5" color="white" fontSize="lg">
          A social media challenge from
          <Link href="https://anchor.fm/letstalkscicomm" fontWeight="bold" target="_blank"> Let&apos;s Talk SciComm </Link>
          and
          <Link href="https://avidresearch.com.au/" fontWeight="bold" target="_blank"> Avid Research   </Link>
          to help you find connections and collaborations for your science
        </Text>
        <Text textAlign="center" m="5" color="white" fontSize="lg">
          Join us on Twitter with the
          <b> #MyScienceMay </b>
          hashtag
        </Text>
        <Flex justify="center" direction={['column', 'row']} align="center">
          <Link href="https://twitter.com/LetsTalkSciComm" color="white" m="3" fontWeight="bold" fontSize="2xl">@LetsTalkSciComm</Link>
          <Link href="https://twitter.com/avid_podcast" color="white" m="3" fontWeight="bold" fontSize="2xl">@avid_podcast</Link>
        </Flex>
      </Box>
      <Flex justifyContent="center" align="center" direction="column">
        <Heading as="h3" textAlign="center" fontWeight="bold" fontSize="2xl" p="5">
          Detailed Schedule
        </Heading>
      </Flex>
      <Container border="solid 1px #00B2A9" borderRadius="5px">
        <Schedule />
      </Container>
      <div>
        <Heading as="h3" textAlign="center" fontWeight="bold" fontSize="2xl" p="5">
          FAQs
        </Heading>
        <Container border="solid 1px #00B2A9" borderRadius="5px">
          <Faq />
        </Container>
      </div>
      <Flex justify="center">
        <Link href="https://avidresearch.com.au/" fontWeight="bold" target="_blank"><Image src="https://mysciencemay.s3.amazonaws.com/avidResearchLogo.png" alt="Avid Research Logo" boxSize={['120px', '150px']} fit="contain" margin={[3, 4]} /></Link>
        <Link href="https://anchor.fm/letstalkscicomm" fontWeight="bold" target="_blank"><Image src="https://mysciencemay.s3.amazonaws.com/letsTalkScicommLogo.png" alt="Let's talk SciComm Logo" boxSize={['120px', '150px']} fit="contain" margin={[3, 4]} /></Link>
      </Flex>
      <Footer />
    </main>
  );
}

export default IndexPage;
