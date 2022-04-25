import React from 'react';
import { Box } from '@chakra-ui/react';

function Footer() {
  return (
    <Box p="10" textAlign="center" fontSize="m" color="white" backgroundColor="#F98E4A">
      We would like to acknowledge the Traditional Custodians of the lands
      on which this website was created, is hosted and is viewed.
      The website was created on the lands of the Wautharong
      peoples of the Kulin Nation. We pay respects to their Elders past and present,
      and acknowledge them as the original
      inspiring and ongoing contributors to STEM in Australia.
      <Box pt="3" fontWeight="bold">
        The design for this challenge was created by
        {' '}
        <a href="https://knowlegible.design/">Knowledgible Designs</a>
      </Box>
    </Box>
  );
}

export default Footer;
