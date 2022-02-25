// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
// sections


import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../../../sections/about';
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../../../sections/home';
import AboutBlogs from '../../../sections/home/AboutBlogs'
import AboutFeatured from '../../../sections/home/AboutFeatured'
import AboutInstagram from '../../../sections/home/AboutInstagram'
import AboutTikTok from '../../../sections/home/AboutTikTok'
import AboutRadioStation from '../../../sections/home/AboutRadioStation'
import AboutCategories from '../../../sections/home/AboutCategories';
import Page from '../../../components/Page';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Dashboard">
      <RootStyle>

        <AboutVision />

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
<AboutCategories/>
        <AboutFeatured />
        <AboutInstagram />
        <AboutTikTok />
        <AboutBlogs />
        <AboutRadioStation />
      </RootStyle>
    </Page>
  );
}
