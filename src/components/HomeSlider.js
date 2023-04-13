import React, { useState, useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../assets/slider/img/grilled-tomatoes.png';
import img2 from '../assets/slider/img/meal-prep-ideas.png';
import img3 from '../assets/slider/img/meal-prep-ideas2.png';
import img4 from '../assets/slider/img/grilled-tomatoes2.png';
import img5 from '../assets/slider/img/meal-prep-ideas3.png';
import img6 from '../assets/slider/img/meal-prep-ideas4.png';

import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

export const SLIDER_DATA = [
  {
    id: 1,
    img: img1,
    title: 'Grilled  Tomatoes at Home',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    link: '#',
  },
  {
    id: 2,
    img: img2,
    title: 'Snacks for Travel',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    link: '#',
  },
  {
    id: 3,
    img: img3,
    title: 'Post-workout Recipes',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    link: '#',
  },
  {
    id: 4,
    img: img4,
    title: 'How To Grill Corn',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    link: '#',
  },
  {
    id: 5,
    img: img5,
    title: 'Crunchwrap Supreme',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    link: '#',
  },
  {
    id: 6,
    img: img6,
    title: 'Broccoli Cheese Soup',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    link: '#',
  },
];

const HomeSlider = () => {
  const slider = useRef();
  const [current, setCurrent] = useState(1);
  const next = () => {
    if (parseInt(current / 3 + 1) === SLIDER_DATA.length / 3) return null;
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    rows: 1,
    customPaging: function (i) {
      return <p>{i + 1}</p>;
    },
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
        },
      },
    ],
    afterChange: (newIndex) => {
      setCurrent(newIndex);
    },
  };

  return (
    <>
      <Slider
        ref={(c) => (slider.current = c)}
        className='myslider'
        {...settings}
      >
        {SLIDER_DATA.map((data) => {
          return (
            <Box key={data.id} px='22px' pb='60px'>
              <Box
                p={5}
                borderWidth={1}
                borderRadius={20}
                borderColor={{
                  base: '#373737',
                  md: 'rgba(147, 162, 211, 0.38)',
                }}
              >
                <Image
                  src={data.img}
                  alt={data.title}
                  style={{ width: '100%' }}
                />
                <Box p={4}>
                  <Heading
                    mt={4}
                    color='#0E2368'
                    as='h3'
                    textAlign={{ base: 'center', md: 'left' }}
                    fontSize={{ base: 'md', md: '21px' }}
                  >
                    {data.title}
                  </Heading>
                  <Text
                    color='#444957'
                    mt={4}
                    fontSize={{ base: '14px', md: '15px' }}
                    maxW='460px'
                    textAlign={{ base: 'center', md: 'left' }}
                  >
                    {data.description}
                  </Text>
                  <Box textAlign={{ base: 'center', md: 'left' }}>
                    <Link href={data.link}>
                      <Button
                        variant='outline'
                        mt={7}
                        px={8}
                        py={{ base: '0px', md: '18px' }}
                        borderColor='#444957'
                        color='#444957'
                        borderRadius={100}
                      >
                        Read More
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Slider>
      <Box textAlign='center'>
        <Button
          onClick={previous}
          variant='outline'
          borderColor='#424961'
          padding={0}
          me={6}
        >
          <HiChevronLeft fontSize='30px' />
        </Button>
        <span>{parseInt(current / 3 + 1)}</span> <span> / </span>
        <span>{SLIDER_DATA.length / 3}</span>
        <Button
          onClick={next}
          variant='outline'
          borderColor='#424961'
          padding={0}
          ms={6}
        >
          <HiChevronRight fontSize='30px' />
        </Button>
      </Box>
    </>
  );
};

export default HomeSlider;
