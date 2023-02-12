import { Helmet } from 'react-helmet-async';

import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTrafficBySite,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  return (
    <>
      <Helmet>
        <title>Financeiro</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Financeiro                                                                                           
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Receita" total={7500} icon={'mingcute:currency-dollar-2-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Balanço" total={7000} color="info" icon={'fluent-emoji-high-contrast:money-bag'} />
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid> */}

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Custo" total={500} color="error" icon={'fluent-emoji-high-contrast:money-with-wings'} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Custos Gerais"
              list={[
                {
                  name: 'Luz',
                  value: 700,
                  icon: <Iconify icon={'material-symbols:light'} color="#006097" width={32} />,
                },
                {
                  name: 'Água',
                  value: 500,
                  icon: <Iconify icon={'material-symbols:water-drop'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Aluguel',
                  value: 3000,
                  icon: <Iconify icon={'mdi:house-city'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Condominio',
                  value: 500,
                  icon: <Iconify icon={'bi:houses-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
