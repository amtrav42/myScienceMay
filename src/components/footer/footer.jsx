import React from 'react';
import { Box } from '@chakra-ui/react';

function Footer() {
  return (
    <>
      <Box px="10" pb="3" pt="10" textAlign="center" fontSize="sm" color="#00B2A9">
        We would like to acknowledge the Traditional Custodians of the lands
        on which this website was created, is hosted and is viewed.
        The website was created on the lands of the Wautharong
        peoples of the Kulin Nation. We pay respects to their Elders past and present,
        and acknowledge them as the original
        inspiring and ongoing contributors to STEM in Australia.
      </Box>
      <br />
      <Box pb="3" textAlign="center" fontSize="sm" color="#00B2A9">
        The design for this challenge was created by
        {' '}
        <a href="https://knowlegible.design/">Knowledgible Designs</a>
      </Box>
    </>
  );
}

export default Footer;
