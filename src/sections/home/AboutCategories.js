import * as React from 'react'
import { Box, Stack, Button, Container, Typography, Grid} from '@mui/material';
// _mock_
import ChipsIcon from '../../pages/adsplify/homepage/chipsIcon';
// components
import Iconify from '../../components/Iconify';


// ----------------------------------------------------------------------

export default function AboutFeatured() {

  return (
    <Container sx={{ pb: 10, textAlign: 'center' }}>
    
      <Grid container justify="space-between">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={100}>

          <Typography variant="h5" sx={{ mb: 3 }}>
          Categories 
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
        }}> Hire influencers by categories on all platforms
        </Typography>

      </Grid> <br/>
      <Box sx={{ position: 'relative' }}>
    {/* joining chips and Typography */}
    <ChipsIcon />
    </Box>

    </Container>
  );
}
