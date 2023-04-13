import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Container,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import heroImg from '../assets/img/hero-img.png';
import heroImgCover from '../assets/img/hero-img-cover.png';
import aboutImg from '../assets/img/about.png';
import HomeSlider from '@/components/HomeSlider';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>TIF Task 1</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* header */}
      <Header />

      <main className={styles.main}>
        {/* Hero */}
        <Container as='section' maxW='100%' p={0}>
          <Flex
            alignItems={{ lg: 'center' }}
            spacing={0}
            flexDirection={{ base: 'column-reverse', md: 'row' }}
          >
            <Box flex={1}>
              <Box px={{ base: 4, lg: 20 }} py={24}>
                <Heading
                  style={{ lineHeight: '1.1' }}
                  color='#0E2368'
                  as='h1'
                  w='100%'
                  textAlign={{ base: 'center', md: 'left' }}
                  fontSize={{ base: '38px', md: '42px', lg: '62px' }}
                >
                  Discover the <br />{' '}
                  <span style={{ color: '#E23744' }}>Best</span> Food <br /> and
                  Drinks
                </Heading>
                <Text
                  color='#444957'
                  mt={7}
                  fontSize={{ base: '16px', md: '18px' }}
                  maxW='400px'
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  Naturally made Healthcare Products for the better care &
                  support of your body.
                </Text>
                <Box textAlign={{ base: 'center', md: 'left' }}>
                  <Link href='#'>
                    <Button
                      mt={7}
                      py={7}
                      px={8}
                      colorScheme='red'
                      background='#E23744'
                      size='lg'
                      borderRadius={100}
                    >
                      Explore Now!
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box flex={1} position='relative'>
              <Image
                priority
                src={heroImg}
                className={styles.heroImg}
                alt='tasty foods'
              />
              <Image
                priority
                src={heroImgCover}
                className={styles.heroCoverImg}
                alt='tasty foods'
              />
            </Box>
          </Flex>
        </Container>

        {/* About us */}
        <Container
          maxW='100%'
          as='section'
          mt={{ base: 0, lg: '140px' }}
          background='linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);'
        >
          <Container as='div' maxW='1300px'>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box textAlign='center' display={{ base: 'none', md: 'block' }}>
                <Image
                  src={aboutImg}
                  alt='about us'
                  style={{ margin: 'auto' }}
                />
              </Box>
              <Flex
                justifyContent='center'
                direction='column'
                py={{ base: '150px', md: 5 }}
                alignItems={{ base: 'center', md: 'flex-start' }}
              >
                <Heading
                  style={{ lineHeight: '1.1' }}
                  color='#0E2368'
                  as='h2'
                  w='100%'
                  textAlign={{ base: 'center', md: 'left' }}
                  size={{ base: '2xl', md: '2xl' }}
                >
                  About Us
                </Heading>
                <Text
                  color='#444957'
                  mt={7}
                  fontSize={{ base: '14px', md: '18px' }}
                  maxW='460px'
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. t has survived not only five centuries.
                </Text>
                <Link href='#'>
                  <Button
                    mt={7}
                    px={8}
                    py={{ base: '0px', md: '22px' }}
                    colorScheme='red'
                    background='#E23744'
                    borderRadius={100}
                  >
                    Read More
                  </Button>
                </Link>
              </Flex>
            </SimpleGrid>
          </Container>
        </Container>

        {/* Latest Articles */}
        <Container
          maxW='1344px'
          as='section'
          my={{ base: '80px', md: '140px' }}
        >
          <Heading
            style={{ lineHeight: '1.1' }}
            color='#0E2368'
            fontWeight='600'
            letterSpacing={{ base: '0', md: 4 }}
            as='h2'
            w='100%'
            px={{ base: 0, md: '22px' }}
            textAlign={{ base: 'center', md: 'left' }}
            size={{ base: '2xl', md: '3xl' }}
          >
            Latest Articles
          </Heading>
          <Box pt={{ base: '40px', md: '80px' }}>
            <HomeSlider />
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}
