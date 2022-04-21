import * as React from 'react';
import {
  Heading, Container, Text, Link, Flex, Image,
} from '@chakra-ui/react';
import Footer from '../components/footer/footer';
import Faq from '../components/faq/faq';

// styles

// markup
function IndexPage() {
  return (
    <main>
      <title>Home Page</title>
      <header>

        <Heading as="h1" textAlign="center" size="2xl" color="#F98E4A">
          #MyScienceMay
        </Heading>
        <Flex justify="center">
          <Image src="/static/images/avidResearchLogo.png" alt="Avid Research Logo" boxSize={['120px', '150px', '200px']} fit="contain" margin={[3, 4, 5]} />
          <Image src="/static/images/letsTalkScicommLogo.png" alt="Let's talk SciComm Logo" boxSize={['120px', '150px', '200px']} fit="contain" margin={[3, 4, 5]} />
        </Flex>
      </header>
      <Text textAlign="center" m="5">
        A social media challenge from
        <Link href="https://anchor.fm/letstalkscicomm" color="#F98E4A" fontWeight="bold"> Let&apos;s Talk SciComm </Link>
        and
        <Link href="https://avidresearch.com.au/" color="#F98E4A" fontWeight="bold"> Avid Research   </Link>
        to help you find connections and collaborations for your science
      </Text>
      <Text textAlign="center" m="5">
        Join us on Twitter with the
        <b> #MyScienceMay </b>
        hashtag
      </Text>
      <Flex justify="center" direction={['column', 'row']} align="center">
        <Link href="https://twitter.com/LetsTalkSciComm" color="#00B2A9" m="3" fontWeight="bold">@LetsTalkSciComm</Link>
        <Link href="https://twitter.com/avid_podcast" color="#00B2A9" m="3" fontWeight="bold">@avid_podcast</Link>
      </Flex>
      <Heading as="h3" textAlign="center" fontWeight="bold" fontSize="xl" p="5">
        Schedule
      </Heading>
      <ol>
        <li>
          Monday
        </li>
        <li>
          Tuesday
        </li>
        <li>
          Wednesday
        </li>
      </ol>
      <div>Download the Schedule</div>
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
