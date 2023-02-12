import { Helmet } from 'react-helmet-async';
import portugueseLocale from 'date-fns/locale/pt-BR';
import { Scheduler } from '@aldabil/react-scheduler';

// @mui
import { Card, Stack, Button, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';

export default function AgendaPage() {
  return (
    <>
      <Helmet>
        <title>Agenda</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Agenda
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Nova consulta
          </Button>
        </Stack>

        <Card style={{ padding: 24 }}>
          <Scheduler
            view="week"
            hourFormat="24"
            events={[
              {
                event_id: 1,
                title: 'Consulta',
                start: new Date('2023/2/14 13:00'),
                end: new Date('2023/2/14 14:00'),
                admin_id: 2,
              },
              {
                event_id: 2,
                title: 'Consulta',
                start: new Date('2023/2/15 09:30'),
                end: new Date('2023/2/15 10:30'),
                admin_id: 1,
              },
            ]}
            locale={portugueseLocale}
            timeZone="America/Sao_Paulo"
            week={{
              weekDays: [2, 3, 4, 5, 6],
            }}
            resourceViewMode="tabs"
            resources={[
              {
                admin_id: 1,
                title: "José Carlos",
                mobile: "Clinico Geral",
                avatar: "https://picsum.photos/200/300",
                color: "#ab2d2d"
              },
              {
                admin_id: 2,
                title: "Alessandra",
                mobile: "Cirurgia Geral",
                avatar: "https://picsum.photos/200/300",
                color: "#58ab2d"
              },
              {
                admin_id: 3,
                title: "Carlos",
                mobile: "Cardiologista",
                avatar: "https://picsum.photos/200/300",
                color: "#a001a2"
              },
              {
                admin_id: 4,
                title: "Vitor",
                mobile: "Nefrologista",
                avatar: "https://picsum.photos/200/300",
                color: "#08c5bd"
              }
            ]}
            resourceFields={{
              idField: 'admin_id',
              textField: 'title',
              subTextField: 'mobile',
              avatarField: 'title',
              colorField: 'color',
            }}
            translations={{
              navigation: {
                month: 'Mês',
                week: 'Semana',
                day: 'Dia',
                today: '',
              },
              form: {
                addTitle: 'Nova consulta',
                editTitle: 'Editar consulta',
                confirm: 'Confirmar',
                delete: 'Deletar',
                cancel: 'Cancelar',
              },
              event: {
                title: 'Título',
                start: 'Início',
                end: 'Fim',
                allDay: 'Dia Todo',
              },
              moreEvents: 'Mais...',
              loading: 'Carregando...',
            }}
          />
        </Card>
      </Container>
    </>
  );
}
