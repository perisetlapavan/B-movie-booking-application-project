import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BasicTabs from './insideLogRegModal/nav';
import { Logout } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LogRegModal() {
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = useState("login")
  const handleOpen = (e) => {
    setOpen(true);
    if (e.target.value === "logout"){
      setOpen(false);
      setLogin("login")
    }
      
  }
  const handleClose = () => setOpen(false);

  const afterLoginClick = (e) => {
    setLogin("logout");
    // used props to go from logRegModal to nav.js to loginnav.js
  }

  return (
    <div >
      <Button onClick={handleOpen} variant="contained" value={login}>{login}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BasicTabs afterLoginClick={afterLoginClick} />
        </Box>
      </Modal>
    </div>
  );
}
