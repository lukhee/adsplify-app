import * as React from 'react';
import PropTypes from 'prop-types';
// @mui
import { ButtonGroup, Tooltip, Stack, Button, Box, Container, Typography, Grid, InputAdornment, ClickAwayListener, Divider, Chip, CardHeader, IconButton, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import ChipsArray from '../../pages/adsplify/homepage/chipsArray';
import Iconify from '../../components/Iconify';
import InputStyle from '../../components/InputStyle';
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';
// components


// ----------------------------------------------------------------------
AboutVision.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onClickAway: PropTypes.func,
};


export default function AboutVision({ query, onChange, onFocus, onClickAway }) {
  const [selected, setSelected] = React.useState(false);

  const buttons = [
    <Button key="one">My Feed</Button>,
    <Button key="two">Saved Influencers</Button>,
    <Button key="three">News Feed </Button>,
  ];
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <Container sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 5,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="https://minimal-assets-api.vercel.app/assets/images/about/vision.jpg"
          alt="about-vision"
          effect="black-and-white"
        />

        <Box
          sx={{
            bottom: { xs: 24, md: 80 },
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            position: 'absolute',
            justifyContent: 'center',
          }}
        >

          <Grid item xs={12} sm={8}>
            <MotionInView variants={varFade().inUp}>
              <Typography variant="h2" sx={{ textAlign: 'center', color: 'white' }}>
                Welcome to the Future of Advert
              </Typography>

              <Typography
                sx={{
                  textAlign: 'center',
                  mx: 'auto',
                  maxWidth: 630,
                   color: 'white'
                }}
              >
                Discover the world of adplify influencers and promoters. Find Influencers that you want to work with and create campaign with ease
              </Typography>

            </MotionInView>


            <Stack direction={{ xs: 'column', sm: 'row' }}  >
              <ClickAwayListener onClickAway={onClickAway}>
                <InputStyle
                  fullWidth
                  size="small"
                  value={query}
                  onFocus={onFocus}
                  onChange={onChange}
                  placeholder="Search..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mt: 2 }}
                />
              </ClickAwayListener>
              <ToggleButton

                value="check"
                selected={selected}
                onChange={() => {
                  setSelected(!selected);
                }}
              >
                <CheckIcon />
              </ToggleButton>
            </Stack>


            <Stack direction={{ xs: 'column', sm: 'row' }}  >
              <Typography
                sx={{
                  mx: 'auto',
                  maxWidth: 630,
                  color: 'white',
                }}
              >
                Active filter
              </Typography>
              <Fab variant="extended" size="small" color="primary" aria-label="add">

                Clear all
              </Fab>

            </Stack>

            {/* joining chips and Typography */}
            <ChipsArray />

            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'right',
                flexWrap: 'wrap',
                listStyle: 'none',
                mx: 'auto',
                maxWidth: 630,
                color: 'white'
              }}
            >
              <Fab size="small" color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              CREATE NEW CAMPAIGN
            </Typography>

          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >

        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </Box>


    </Container >
  );
}
