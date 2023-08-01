import React from 'react';
import Slider from 'react-slick';
import { Typography, Box, Container, Button } from '@mui/material';
import palette from '@/styles/mui/palette';

const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    arrows: false,
  };

  return (
    <Box
      sx={{
        backgroundColor: palette.black.main,
        width: '100%',
        height: '100%',
        minHeight: '100vh',
      }}
    >
      {/* Background Image Slider */}
      <Box sx={{ position: 'relative', zIndex: 0 }}>
        <Slider {...settings}>
          {['thumb1', 'thumb2', 'thumb3'].map((thumb, index) => (
            <Box
              key={index}
              sx={{
                backgroundSize: 'cover',
                height: '100vh',
                backgroundImage: `url('/imgs/landingThumbnails/${thumb}.jpg')`,
              }}
            />
          ))}
        </Slider>
      </Box>

      {/* Static Overlays, Texts, and Button */}
      <Box
        sx={{
          position: 'absolute',
          top: '0%',
          paddingTop: '120px',
          paddingLeft: '90px',
          width: '100%',
          zIndex: 1,
          height: '100vh',
        }}
      >
        {/* Overlay Box 1 */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '80px',
            height: '100%',
            backgroundColor: '#110604',
          }}
        />
        {/* Overlay Box 2 with Linear Gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '80px',
            width: '300px',
            height: '100%',
            backgroundImage: `linear-gradient(to left, transparent, ${'#110604'})`,
          }}
        />
        {/* Overlay Box 3 with Vertical Gradient at the bottom */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '200px',
            backgroundImage: `linear-gradient(to top, ${palette.black.main}, transparent)`,
          }}
        />
        {/* Texts and Button */}
        <Box sx={{ zIndex: 10, position: 'relative' }}>
          <Typography variant="h1" color="white" sx={{ fontSize: '100px' }}>
            Prompt
          </Typography>
          <Typography
            variant="h1"
            color="white"
            sx={{ fontSize: '100px', marginTop: '-35px' }}
          >
            Market Place
          </Typography>
          <Typography
            variant="h1"
            color="primary"
            sx={{ fontSize: '100px', marginTop: '-35px' }}
          >
            OpenPrompt
          </Typography>
          <Box sx={{ paddingLeft: '10px', marginTop: '20px' }}>
            <Typography variant="body2">{`If you're good at prompt engineering,`}</Typography>
            <Typography variant="body2">{`there's also no clear way to make a living from your skills.`}</Typography>
          </Box>
          <Button
            variant="roundedOutlined"
            size="large"
            sx={{
              marginTop: '60px',
              paddingX: '70px',
              borderColor: palette.primary.main,
              color: palette.primary.main,
              borderWidth: '2px',
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      {/* Other Contents padded */}
      <Container
        sx={{
          paddingX: '100px',
          backgroundColor: palette.black.main,
          minHeight: '100vh',
          paddingTop: '80px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '160px' }}>
          {/*  */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Oswald',
                fontWeight: 'Medium',
                fontSize: '60px',
              }}
            >
              What is OpenPrompt?
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Oswald',
                fontSize: '40px',
                fontWeight: 300,
                marginTop: '40px',
                background: `linear-gradient(to left,${
                  palette.primary.main
                }, ${'#6843EC'})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >{`There hasn't been a direct way for users to generate income using prompts usable in Midjourney, DALL-E, Stable Diffusion, etc. However, with OpenPrompt, users can generate profits by selling their own prompts, while also having the ability to sell the copyright to the prompts with licensed usage rights as NFTs.`}</Typography>
          </Box>

          {/*  */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Noto Sans',
                fontSize: '40px',
                fontWeight: 'medium',
                marginTop: '40px',
                lineHeight: 'auto',
                textAlign: 'center',
              }}
            >
              {`A new AI prompt marketplace “OpenPrompt”`}
              <br />
              {`
            based on blockchain technology.`}
            </Typography>
          </Box>
          {/*  */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
