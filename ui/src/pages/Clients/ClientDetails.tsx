import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius : '10px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new Client
          </Typography>
          <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
            <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
            />
          </div>
          <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
            <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );

}