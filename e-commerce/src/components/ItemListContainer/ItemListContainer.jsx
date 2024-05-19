import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ItemListContainer = ({ title }) => {
  return (
    <Box bg="black" align="center" color="white" p="4">
      <Text textAlign="center" justifyContent="center" fontSize="30%" fontWeight="bold">{title}</Text>
    </Box>
  );
};

export default ItemListContainer;



