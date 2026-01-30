import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the CardT component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack style={{
      backgroundColor: "white",
      color: "black",
      borderRadius: '10px',
      paddingBottom: '10px',
      overflow: 'hidden'
    }} align="left">
      <Image src={imageSrc} alt={title}  height="400px" />
      <Heading as="h3" size="s" marginLeft="10px">{title} </Heading>
      <Text margin="10px 10px">{description}</Text>
      <div style={{display: "flex", flexDirection: 'row', justifyContent: 'flex-start', gap:'10px'}} >
        <Text fontWeight="semibold" marginLeft="10px" >See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" style={{ paddingTop: "4px" }}/>
      </div>
      
    </VStack>
    
  );
};

export default Card;
