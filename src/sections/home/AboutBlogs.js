import * as React from 'react'
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
// @mui
import { useTheme } from '@mui/material/styles';
import {
 
  IconFlagUS
} from 'material-ui-flags';
import { Box, Rating, Stack, Card, Button, Container, Typography, Grid, Divider, Tab, IconButton } from '@mui/material';
// _mock_
import { _carouselsMembers } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { CarouselArrows } from '../../components/carousel';

import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function AboutBlogs() {
  const carouselRef = useRef(null);
  const theme = useTheme();

  const settings = {
    arrows: false,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Container sx={{ pb: 10, textAlign: 'center' }}>
    
    <Grid container justify="space-between">
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={100}>

        <Typography variant="h5" sx={{ mb: 3 }}>
       Blogs
        </Typography>

        <Button
          variant="outlined"
          color="inherit"
          size="large"
          endIcon={<Iconify icon={'ic:round-arrow-right-alt'} width={20} height={20} />}
          sx={{ mx: 'auto' }}
        >
          View all
        </Button>
      </Stack>
      <Typography inline variant="body1" align="left" sx={{

        color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
      }}> Hire Bloggers Influencers</Typography>

    </Grid>
    <Box sx={{ position: 'relative' }}>
      <CarouselArrows filled onNext={handleNext} onPrevious={handlePrevious}>
        <Slider ref={carouselRef} {...settings}>
          {_carouselsMembers.map((member) => (
            <MotionInView key={member.id} variants={varFade().in} sx={{ px: 1.5, py: 10 }}>
              <MemberCard member={member} />
            </MotionInView>
          ))}
        </Slider>
      </CarouselArrows>
    </Box>

  </Container>
  );
}

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
};

function MemberCard({ member }) {
  const { name, role, avatar } = member;
  const [value, setValue] = React.useState(2);
  return (
    <Card key={name} sx={{ p: 1 }}>

      <Image src={avatar} ratio="1/1" sx={{ borderRadius: 1.5 }} />
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>

      <Grid container>
        <Grid item xs>
          {/* <IconButton><IconFlagTR /></IconButton>
        <IconButton><IconFlagDE /></IconButton> */}
          <IconButton><IconFlagUS /></IconButton>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          Lagos
        </Grid>
        <Divider orientation="vertical" flexItem>
          ''
        </Divider>
        <Grid item xs>
          $350
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Typography>

    </Card>
  );
}
