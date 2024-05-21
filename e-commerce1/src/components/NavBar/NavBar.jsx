import React, { useState } from "react";
import { Flex, Text, Link, Image, Box } from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import logo from '../../Imgenes/logo.png'; // Ruta relativa correcta

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex as="nav" align="center" justify="space-between" bg="black" color="white" p="4">
      <Flex align="center">
        <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <MenuButton 
            as={Text} 
            fontWeight="bold" 
            bg="black" 
            color="white" 
            border="1px solid white" 
            px="4" 
            py="2" 
            borderRadius="md"
            onClick={() => setIsOpen(!isOpen)}
            _focus={{ outline: "none" }}
          >
            Menú
          </MenuButton>
          <MenuList 
            bg="black" // Establece el fondo del menú como negro
            color="white" 
            border="1px solid white" 
            borderRadius="md"
            transformOrigin="top right"
            transform={isOpen ? "scale(1)" : "scale(0)"}
            transition="transform 0.3s ease-in-out"
            position="absolute"
            zIndex="1"
          >
            <MenuItem>
              <Link href="#" color="black">Inicio</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" color="black">Productos</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#" color="black">Contacto</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Image src={logo} alt="Logo" boxSize="14%" objectFit="contain" /> {/* Tamaño del logo ajustado */}
      <CartWidget />
    </Flex>
  );
};

export default NavBar;



