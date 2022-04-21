import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import FaqData from '../../data/faq';

function Faq() {
  return (
    FaqData.map((faq) => (
      <Box>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    ))
  );
}

export default Faq;
