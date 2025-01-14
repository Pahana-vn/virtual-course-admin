import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// project-imports
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import Loader from 'components/Loader';
import AddCustomer from 'sections/apps/customer/AddCustomer';
import AuthGuard from 'utils/route-guard/AuthGuard';
import Drawer from './Drawer';
import HorizontalBar from './Drawer/HorizontalBar';
import Footer from './Footer';
import Header from './Header';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';
import { DRAWER_WIDTH, MenuOrientation } from 'config';
import useConfig from 'hooks/useConfig';

// assets

// ==============================|| MAIN LAYOUT ||============================== //

let value = window.location.search;
const params = new URLSearchParams(value);
const ispValue = params.get('isp');
const ispValueAvailable = ispValue !== null && parseInt(ispValue) === 1;

const url = ispValueAvailable ? 'https://1.envato.market/OrJ5nn' : 'https://1.envato.market/zNkqj6';

export default function MainLayout() {
  const theme = useTheme();

  const { menuMasterLoading } = useGetMenuMaster();
  const downXL = useMediaQuery(theme.breakpoints.down('xl'));
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { container, miniDrawer, menuOrientation } = useConfig();

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  // set media wise responsive drawer
  useEffect(() => {
    if (!miniDrawer) {
      handlerDrawerOpen(!downXL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downXL]);

  if (menuMasterLoading) return <Loader />;

  return (
    <AuthGuard>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Header />
        {!isHorizontal ? <Drawer /> : <HorizontalBar />}

        <Box component="main" sx={{ width: `calc(100% - ${DRAWER_WIDTH}px)`, flexGrow: 1, p: { xs: 2, md: 3 } }}>
          <Toolbar sx={{ mt: isHorizontal ? 8 : 'inherit', mb: isHorizontal ? 2 : 'inherit' }} />
          <Container
            maxWidth={container ? 'xl' : false}
            sx={{
              xs: 0,
              ...(container && { px: { xs: 0, md: 2 } }),
              position: 'relative',
              minHeight: 'calc(100vh - 110px)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Breadcrumbs />
            <Outlet />
            <Footer />
          </Container>
          {/* <Link style={{ textDecoration: 'none' }} href={url} target="_blank">
            <Button variant="contained" color="error" sx={{ zIndex: 1199, position: 'fixed', bottom: 50, right: 30 }}>
              <ListItemIcon>
                <ShoppingCart color={theme.palette.common.white} />
              </ListItemIcon>
              Buy Now
            </Button>
          </Link> */}
        </Box>
        <AddCustomer />
      </Box>
    </AuthGuard>
  );
}
