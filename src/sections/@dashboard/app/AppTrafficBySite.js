// @mui
import PropTypes from 'prop-types';
import { Box, Card, Paper, Typography, CardContent, Button, Grid } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

AppTrafficBySite.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppTrafficBySite({ title, list, ...other }) {
  return (
    <Card {...other}>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <h3 style={{marginLeft: 24}}>{title}</h3>
        <Button
          size="small"
        >
          <Iconify icon={'ic:baseline-plus'} color="#006097" />
        </Button>
      </Grid>
      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {list.map((site) => (
            <Paper key={site.name} variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
              <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

              <Typography variant="h6">{fShortenNumber(site.value)}</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {site.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
