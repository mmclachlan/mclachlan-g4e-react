import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import GameCard from './GameCard';
import Checkout from './Checkout';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {

  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSend() {
    //NOTE, obviously the API key should be hidden and probably shouldn't even be a query parameter, but since this is
    //for fun, just leaving it here to get going
    var uri = 'https://www.giantbomb.com/api/search/?api_key=489dcf832fb0deb89cf930e6f2ec28c23db6990e&resource_type=game&field_list=name,image,deck,guid&format=json&query=' + query
    fetch("/api", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
      body: JSON.stringify({ uri: uri, method: 'GET', headers: {'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'}}),
    })
    .then(response => response.json())
    .then(json => {
      setGames(json.results);
    });
}

  function checkout() {
    console.log('checkout');
  }

/**
 * Return true if the game does not look valid.
 */
function isInvalid() {
  //TODO: client side form validation
  return false;
}

function GetCard() {
  if(isInvalid()) {
    return <TextField
            error
            id="standard-with-placeholder"
            label="Search for a game"
            placeholder="gw2"
            margin="normal"
            onChange={handleQueryChange}/>
  } else {
    return <TextField
            id="standard-with-placeholder"
            label="Search for a game"
            placeholder="gw2"
            margin="normal"
            onChange={handleQueryChange}/>
  }
}

  function GetCheckout() {
    return <Checkout/>
  }

function GetButton() {
  if(isInvalid()) {
    return <Button disabled variant="contained">
             search<Icon></Icon>
           </Button>
  } else {
    return <Button variant="contained" onClick={handleSend}>
      search<Icon></Icon>
           </Button>
  }
}

  return (
    <div>
      {GetCheckout()}
<center>
<table>
  <tbody>
  <tr>
    <td>
      {GetCard()}
    </td>
    <td>
      <br/>
      {GetButton()}
    </td>
  </tr>
  </tbody>
</table>
</center>

<br/><br/>
<div style={{ padding: "15px" }}>
<br/>
<Grid container spacing={2}>
  <Grid item xs={12}>
    <Grid container spacing={2}>

{
  games.map(function (value, i) {
    if (value) {
      return <GameCard key={value.guid} gameInfo={value}/>
    } else {
      return "";
    }
  })
}
        </Grid>
      </Grid>
    </Grid>
</div>

</div>
  );
}

export default App;
