import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import GameCard from "./GameCard";

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 500,
    overflowX: 'auto',
    boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, .5)'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Checkout(props) {
  const classes = useStyles();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function getGamesInCart() {
    let cart = localStorage.getItem("checkout_cart");
    if(!cart) {
      return <div>No items in cart</div>
    } else {
      let games = JSON.parse(cart);
      return (
          <ol>
            {games.map((name) => (
                <li>{name}</li>
            ))}
          </ol>
      );
    }
  }

  return (
      <div style={{ padding: "10px" }}>
        <Button onClick={handleOpen}>Checkout</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Checkout
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {getGamesInCart()}
            </Typography>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Modal>
      </div>
  );
}
