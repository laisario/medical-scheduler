import portugueseLocale from 'date-fns/locale/pt-BR';
import { Scheduler } from '@aldabil/react-scheduler';

import { Card } from '@mui/material';

export default function Schedule(props) {
  return (
    <Card style={{ padding: 24 }}>
      <Scheduler
        {...props}
        hourFormat="24"
        locale={portugueseLocale}
        timeZone="America/Sao_Paulo"
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
  );
}
