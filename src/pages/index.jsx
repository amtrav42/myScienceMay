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

        <Heading as="h1" textAlign="center" fontSize={['xxl', '4xl', '7xl']} p={['2', '5']} background="linear-gradient(90deg, rgba(0,178,169,1) 28%, rgba(249,142,74,1) 73%)">
          #MyScienceMay
        </Heading>
        <Flex justify="center">
          <Image src="https://mysciencemay.s3.amazonaws.com/avidResearchLogo.png" alt="Avid Research Logo" boxSize={['120px', '150px']} fit="contain" margin={[3, 4]} />
          <Image src="https://mysciencemay.s3.amazonaws.com/letsTalkScicommLogo.png" alt="Let's talk SciComm Logo" boxSize={['120px', '150px']} fit="contain" margin={[3, 4]} />
        </Flex>
      </header>
      <Box backgroundColor="RGBA(0, 178, 169, .8)" p="5">
        <Text textAlign="center" m="5">
          A social media challenge from
          <Link href="https://anchor.fm/letstalkscicomm" fontWeight="bold"> Let&apos;s Talk SciComm </Link>
          and
          <Link href="https://avidresearch.com.au/" fontWeight="bold"> Avid Research   </Link>
          to help you find connections and collaborations for your science
        </Text>
        <Text textAlign="center" m="5">
          Join us on Twitter with the
          <b> #MyScienceMay </b>
          hashtag
        </Text>
      </Box>
      <Flex justify="center" direction={['column', 'row']} align="center">
        <Link href="https://twitter.com/LetsTalkSciComm" color="#00B2A9" m="3" fontWeight="bold">@LetsTalkSciComm</Link>
        <Link href="https://twitter.com/avid_podcast" color="#00B2A9" m="3" fontWeight="bold">@avid_podcast</Link>
      </Flex>
      <Flex justifyContent="center" align="center" direction="column">
        <Heading as="h3" textAlign="center" fontWeight="bold" fontSize="xl" p="5">
          Schedule
        </Heading>
        <Image src="https://mysciencemay.s3.amazonaws.com/MSM_Prompts.jpg" alt="List of prompts for SciComm September, see below for details" fit="contain" margin={[3, 4, 5]} boxSize={['300px', '400px', '500px']} />
      </Flex>
      <Container border="solid 1px #00B2A9" borderRadius="5px">
        <Schedule />
      </Container>
      <div>
        <Heading as="h3" textAlign="center" fontWeight="bold" fontSize="xl" p="5">
          FAQs
        </Heading>
        <Container border="solid 1px #00B2A9" borderRadius="5px">
          <Faq />
        </Container>
      </div>
      <Footer />
    </main>
  );
}

export default IndexPage;
