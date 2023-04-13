import React from 'react';
import { Container, Box, SimpleGrid, Button } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../assets/img/logo.png';
import Link from 'next/link';

const Header = () => {
  return (
    <Box position='absolute' w='100%' as='header' zIndex={999}>
      <Container maxW='1300px' mx='auto' py={{ base: 4, lg: 8 }}>
        <SimpleGrid columns={2} spacing={5}>
          <Box>
            <Link href='/'>
              <Image src={logo} alt='Logo' className='logo' />
            </Link>
          </Box>
          <Box textAlign='end'>
            <Link href='#'>
              <Button
                py={5}
                color='white'
                colorScheme='white'
                variant='outline'
                borderRadius={100}
                _hover={{
                  bg: '#ffffff',
                  color: '#E23744',
                  borderColor: '#ffffff',
                }}
              >
                Get In Touch
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Header;
