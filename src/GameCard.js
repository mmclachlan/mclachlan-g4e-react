import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export default function SimpleCard(props) {
  const classes = useStyles();
  let gameInfo = props.gameInfo;

  function rent() {
    let added = false;
    let items = localStorage.getItem("checkout_cart");
    let names = [];
    if(items === undefined || items === null) {
      names[0] = gameInfo.name;
      added = true;
    } else {
      names = JSON.parse(items);
      if(!names.includes(gameInfo.name)) {
        names[names.length] = gameInfo.name;
        added = true;
      }
    }
    items = JSON.stringify(names);
    console.log("adding items to storage: " + items);
    localStorage.setItem("checkout_cart", items);

    added ? alert(gameInfo.name + " added to cart") : alert("item already in cart");
  }

  return (
    <div style={{ padding: "10px" }}>
      <Card className={classes.card}>
        <CardMedia
            component="img"
            height="350"
            image={props.gameInfo.image.super_url}
            alt={props.gameInfo.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.gameInfo.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={rent}>Add to cart (rent)</Button>
        </CardActions>
      </Card>
    </div>
  );
}
