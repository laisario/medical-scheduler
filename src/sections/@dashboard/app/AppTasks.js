import PropTypes from 'prop-types';
import { useState } from 'react';
// form
import { useForm, Controller } from 'react-hook-form';
// @mui
import {
  Card,
  Stack,
  Divider,
  Popover,
  Checkbox,
  MenuItem,
  IconButton,
  FormControlLabel,
  Button,
  Grid,
  TextField,
  Tooltip,
} from '@mui/material';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

AppTasks.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppTasks({ title, ...other }) {
  const { control, getValues } = useForm({ defaultValues: { tasksCompleted: [] } });
  const { tasksCompleted } = getValues();
  const [list, setList] = useState([]);

  const deleteCheckedTasks = () => {
    setList(oldList => oldList.filter(task => !tasksCompleted.includes(task.id)))
  };

  return (
    <Card {...other}>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <h3>{title}</h3>
        <Grid>
          <Button
            size="medium"
            onClick={() => setList((oldList) => [{ id: oldList[0] ? oldList[0].id + 1 : 1, label: '' }, ...oldList])}
          >
            <Iconify width={24} icon={'ic:baseline-plus'} color="#006097" />
          </Button>
          <Tooltip title="Deletar marcados">
            <Button size="medium" onClick={deleteCheckedTasks}>
              <Iconify icon={'eva:trash-2-outline'} />
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Controller
        name="tasksCompleted"
        control={control}
        render={({ field }) => {
          const onSelected = (task) =>
            field.value.includes(task) ? field.value.filter((value) => value !== task) : [...field.value, task];

          return (
            <>
              {list.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  checked={field.value.includes(task.id)}
                  onChange={() => field.onChange(onSelected(task.id))}
                  setList={setList}
                />
              ))}
            </>
          );
        }}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

TaskItem.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,

  task: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }),
};

function TaskItem({ task, checked, onChange, setList }) {
  const [open, setOpen] = useState(null);
  const [input, setInput] = useState(task.label);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleEdit = () => {
    setInput(task.label);
    setList((list) => list.map((item) => (item.id === task.id ? { ...item, label: '' } : item)));
    handleCloseMenu();
  };

  const handleDelete = () => {
    setList((list) => list.filter((item) => item.id !== task.id));
    handleCloseMenu();
  };

  return (
    <Stack
      direction="row"
      sx={{
        py: 0.75,
        ...(checked && {
          color: 'text.disabled',
          textDecoration: 'line-through',
        }),
      }}
    >
      {task.label ? (
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={onChange} />}
          label={task.label}
          sx={{ flexGrow: 1 }}
        />
      ) : (
        <>
          <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} />} />
          <TextField
            id="standard-read-only-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setList((oldList) => [{ id: task.id, label: input }, ...oldList.filter((item) => item.id !== task.id)]);
                setInput('');
              }
            }}
            variant="standard"
            sx={{ flexGrow: 1, m: 0 }}
          />
        </>
      )}

      <IconButton size="large" color="inherit" sx={{ opacity: 0.48 }} onClick={handleOpenMenu}>
        <Iconify icon={'eva:more-vertical-fill'} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={handleEdit}>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Editar
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Deletar
        </MenuItem>
      </Popover>
    </Stack>
  );
}
