import React from 'react';
import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../assets/img/logo.png';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container as='footer' px={0} py={10} maxW='100%' backgroundColor='#F8F8F8'>
      <Container maxW='1300px' py={{ base: 0, md: 10 }}>
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={10}>
          <Flex direction='column' justifyContent='center'>
            <Link href='#'>
              <Image src={logo} alt='logo' className='footer-logo' />
            </Link>
          </Flex>
          <Box>
            <Heading
              mt={4}
              color='#0E2368'
              as='h3'
              textAlign='left'
              fontSize='18px'
              fontWeight='600'
              letterSpacing={1}
            >
              Conatct Us
            </Heading>
            <Text
              color='#646874'
              mt={{ base: 2, md: 4 }}
              fontSize={{ base: '10px', md: '15px' }}
              lineHeight={{ base: '16px', md: '23px' }}
              maxW={{ base: '90%', md: '220px' }}
              textAlign='left'
            >
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </Text>
            <Text
              color='#646874'
              mt={{ base: 2, md: 4 }}
              fontSize={{ base: '10px', md: '15px' }}
              lineHeight={{ base: '16px', md: '23px' }}
              textAlign='left'
            >
              example2020@gmail.com
            </Text>
            <Text
              color='#646874'
              mt={{ base: 2, md: 4 }}
              fontSize={{ base: '10px', md: '15px' }}
              lineHeight={{ base: '16px', md: '23px' }}
              textAlign='left'
            >
              (904) 443-0343
            </Text>
          </Box>
          <Box></Box>
          <Box>
            <Heading
              mt={4}
              color='#0E2368'
              as='h3'
              textAlign='left'
              fontSize='18px'
              fontWeight='600'
              letterSpacing={1}
            >
              More
            </Heading>
            <Link href='#'>
              <Text
                color='#646874'
                mt={{ base: 2, md: 4 }}
                fontSize={{ base: '10px', md: '15px' }}
                lineHeight={{ base: '16px', md: '23px' }}
                maxW={{ base: '90%', md: '220px' }}
                textAlign='left'
              >
                About Us
              </Text>
            </Link>
            <Link href='#'>
              <Text
                color='#646874'
                mt={{ base: 2, md: 4 }}
                fontSize={{ base: '10px', md: '15px' }}
                lineHeight={{ base: '16px', md: '23px' }}
                maxW={{ base: '90%', md: '220px' }}
                textAlign='left'
              >
                Products
              </Text>
            </Link>
            <Link href='#'>
              <Text
                color='#646874'
                mt={{ base: 2, md: 4 }}
                fontSize={{ base: '10px', md: '15px' }}
                lineHeight={{ base: '16px', md: '23px' }}
                maxW={{ base: '90%', md: '220px' }}
                textAlign='left'
              >
                Career
              </Text>
            </Link>
            <Link href='#'>
              <Text
                color='#646874'
                mt={{ base: 2, md: 4 }}
                fontSize={{ base: '10px', md: '15px' }}
                lineHeight={{ base: '16px', md: '23px' }}
                maxW={{ base: '90%', md: '220px' }}
                textAlign='left'
              >
                Contact Us
              </Text>
            </Link>
          </Box>

          <Flex
            direction={{ base: 'column-reverse', md: 'column' }}
            justifyContent='space-between'
          >
            <Box textAlign={{ base: 'center', md: 'end' }}>
              <Heading
                display={{ base: 'none', md: 'block' }}
                mt={4}
                mb='20px'
                color='#0E2368'
                as='h3'
                fontSize='18px'
                fontWeight='600'
                letterSpacing={1}
              >
                Social Links
              </Heading>
              <Link href='#'>
                <FaInstagram
                  style={{ display: 'inline-block', marginRight: 20 }}
                  color='#0E2368'
                  fontSize='21px'
                />
              </Link>
              <Link href='#'>
                <FaTwitter
                  style={{ display: 'inline-block', marginRight: 20 }}
                  color='#0E2368'
                  fontSize='21px'
                />
              </Link>
              <Link href='#'>
                <FaFacebookF
                  style={{ display: 'inline-block' }}
                  color='#0E2368'
                  fontSize='21px'
                />
              </Link>
            </Box>
            <Text
              color='#646874'
              mt={{ base: 0, md: 4 }}
              mb={{ base: 4, md: 0 }}
              fontSize={{ base: '10px', md: '15px' }}
              lineHeight={{ base: '16px', md: '23px' }}
              textAlign={{ base: 'center', md: 'end' }}
            >
              &copy; 2022 Food Truck Example
            </Text>
          </Flex>
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default Footer;
