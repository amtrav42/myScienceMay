import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Image,
} from '@chakra-ui/react';
import ScheduleData from '../../data/schedule';

function Schedule() {
  return (
    ScheduleData.map((schedule) => (
      <Box>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Text flex="1" textAlign="left" fontWeight="bold">
                  {`${schedule.day} the ${schedule.date} - ${schedule.title}`}
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              {schedule.detail}
              <Image src={schedule.imageURL} alt={schedule.imageAlt} boxSize={['180px', '250px']} fit="contain" margin={[3, 4]} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    ))
  );
}

export default Schedule;
