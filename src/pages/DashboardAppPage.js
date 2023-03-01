import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Container, Typography } from '@mui/material';

// scheduler
import Schedule from '../components/scheduler/index';

// components
// sections
import {
  AppTasks,
  AppWidgetSummary,
 
} from '../sections/@dashboard/app';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {

  return (
    <>
      <Helmet>
        <title>Página inicial</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Dados do dia
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Consultas do dia" total={15} icon={'eva:people-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Consultas realizadas"
              total={7}
              color="info"
              icon={'eva:checkmark-circle-2-fill'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Consultas cancelas" total={1} color="warning" icon={'eva:close-circle-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Pacientes aguardando" total={7} color="error" icon={'eva:clock-fill'} />
          </Grid>
        </Grid>
        
        <Grid container spacing={3} style={{marginTop: 3}}>
          <Grid item xs={12} md={6}>
            <Schedule
              view="day"
              month={null}
              week={null}
              events={[
                {
                  event_id: 1,
                  title: 'Event 1',
                  start: new Date('2021/5/2 09:30'),
                  end: new Date('2021/5/2 10:30'),
                },
                {
                  event_id: 2,
                  title: 'Event 2',
                  start: new Date('2021/5/4 10:00'),
                  end: new Date('2021/5/4 11:00'),
                },
              ]}
            />
          </Grid>
         
          <Grid item xs={12} md={6}>
            <AppTasks
              title="Lembretes"
              style={{padding: '0px 16px'}}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
