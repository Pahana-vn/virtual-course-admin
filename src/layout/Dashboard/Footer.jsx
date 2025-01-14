import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

export default function Footer() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
      <Typography variant="caption">&copy; Virtual Course ♥ crafted by Team Group 2</Typography>
      <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
        <Link component={RouterLink} to="" target="_blank" variant="caption" color="text.primary">
          Nhan
        </Link>
        <Link
          component={RouterLink}
          to=""
          target="_blank"
          variant="caption"
          color="text.primary"
        >
          Chuong
        </Link>
        <Link component={RouterLink} to="" target="_blank" variant="caption" color="text.primary">
          Sang
        </Link>
      </Stack>
    </Stack>
  );
}
