import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  healthInsurance: faker.company.name(),
  isVerified:  sample(['sim', 'não']),
  isNew:  sample(['sim', 'não']),
}));

export const appointments =  [
  { 
    id: 1,
    appointment: 'João',
    professional: 'Alessandra',
    date: '01/02/23',
    time: '15:00',
    showedUp: 'Sim',
  },
  {
    id: 1,
    appointment: 'Maria',
    professional: 'João',
    date: '05/05/23',
    time: '13:00',
    showedUp: 'Sim',
  },
  {
    id: 2,
    appointment: 'Lucas',
    professional: 'Maria',
    date: '08/04/23',
    time: '11:00',
    showedUp: 'Não',
  },
  { 
    id: 3,
    appointment: 'Fernanda',
    professional: 'Catarina',
    date: '30/03/23',
    time: '09:00',
    showedUp: 'Não',
  },
  { 
    id: 4,
    appointment: 'Jéssica',
    professional: 'Marcelo',
    date: '01/07/23',
    time: '17:00',
    showedUp: 'Não',
  },
  {
    id: 5,
    appointment: 'Ana',
    professional: 'José',
    date: '10/09/23',
    time: '16:00',
    showedUp: 'Sim',
  },
];

export const rooms = [
  { 
    id: 1,
    room: 'Consultorio 1',
    professional: 'Alessandra',
    specialization: 'Clínico Geral'
  },
  {
    id: 1,
    room: 'Consultorio 2',
    professional: 'João',
    specialization: 'Neurologista'
  },
  {
    id: 2,
    room: 'Consultorio 3',
    professional: 'Maria',
    specialization: 'Obstetrícia'
  },
  { 
    id: 3,
    room: 'Consultorio 4',
    professional: 'Catarina',
    specialization: 'Cardiologia'
  },
  { 
    id: 4,
    room: 'Sala de exames',
    professional: 'Marcelo',
    specialization: 'Analise exames de sangue'
  },
  {
    id: 5,
    room: 'Sala coleta de exames',
    professional: 'José',
    specialization: 'Coleta de sangue'
  },
];



export default users;
