## Overview
This is a simple React front end with an Express proxy that interacts with the [giantbomb.com api](https://www.giantbomb.com/). 

There are a number of components to thsi solution:


1. The React frontend. This fires requests at an express proxy.
2. The Express backend.  The Express server fires requests at giantbomb on behalf of the client.The proxy avoids any potential CORS issues and basically should allow anybody to run this anywhere.
3. The frontend utilizes web components from the [Material UI](https://material-ui.com/) collection of components.
4. The frontend also uses the browsers built in local storage to track game selections for a shopping cart style experience. To clear this cache out you can either delete your browser cache or use a new browser.

If all goes well, you should be able to search for games like this and add them to a cart:

![](https://i.ibb.co/mXDzv4y/localhost.png)

You can view the contents of the cart by clicking the checkout button (top left):

![](https://i.ibb.co/fHb4wxP/checkout.png)

## Before running the application
Please be aware of the following
* Node version - 14.4.0 was used to verify this project
* NPM version - 14.4.0 was used to verify this project
* Some firewalls may impact the functionality of the application due to ssl certificate path lookup. It has been observed that requests to the required web service may sometimes have an invalid ssl certificate path.  Though this generally won't happen, it might if an IT department attempts to interfere with the application.

## Running the application
~~~~
git clone https://github.com/mmclachlan/mclachlan-g4e-react.git
cd mclachlan-g4e-react
npm i
npm start
~~~~

## Tests
You can run a few smoke tests by running:
~~~~
npm test
~~~~
