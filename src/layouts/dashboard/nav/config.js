// component
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';               

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;


const navConfig = [
  {
    title: 'Página Inicial',
    path: '/home',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Pacientes',
    path: '/pacientes',
    icon: icon('ic_user'),
  },
  {
    title: 'Agenda',
    path: '/agenda',
    icon: <Iconify icon={'eva:book-fill'} />,
  },
  {
    title: 'Consultas',
    path: '/consultas',
    icon: <Iconify icon={'eva:folder-add-fill'} />,
  },
  {
    title: 'Financeiro',
    path: '/financeiro',
    icon: <Iconify icon={'mingcute:currency-dollar-2-fill'} />,
  },
  {
    title: 'Salas',
    path: '/salas',
    icon: <Iconify icon={'eva:home-fill'} />,
  },
];

export default navConfig;
