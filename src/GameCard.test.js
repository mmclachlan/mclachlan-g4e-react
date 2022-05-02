import React from 'react';
import ReactDOM from 'react-dom';
import GameCard from './GameCard'

it('card renders an example card successfully', () => {
  let gameInfo = {
    deck: "Guild Wars 2 is an online RPG developed by ArenaNet, and continues the subscriptionless business model of the original Guild Wars. The game is set about 250 years after the events of its predecessor in a world devastated by the ancient elder dragons resurfacing after millennia of slumber.",
    image: {
      super_url: "https://www.giantbomb.com/a/uploads/scale_large/8/87790/2323860-box_gw2.png"
    },
    name: "Guild Wars 2"
  };
  const div = document.createElement('div');
  ReactDOM.render(<GameCard gameInfo={gameInfo}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
