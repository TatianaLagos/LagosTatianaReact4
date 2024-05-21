import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa'; // Utilizando el ícono del carrito de compras de React Icons

const CartWidget = () => {
  return (
    <IconButton
      icon={<FaShoppingCart />} 
      aria-label="Carrito de Compras"
      bg="black" 
      color="white" 
    />
  );
};

export default CartWidget;

