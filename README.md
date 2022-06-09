# Monster Hunter Wiki

## Project Description

Monster Hunter Wiki is a single page app that uses the [Monster Hunter World API](https://docs.mhw-db.com/) and React to display simple and concise info about monsters in the game. Use this app to quickly filter monsters by name, location and species and look up their weaknesses and attributes.

This website is not meant to be a comprehensive tool, for more in-depth information on Monster Hunter World, visit the official [Monster Hunter World wikipage](https://monsterhunterworld.wiki.fextralife.com/Monster+Hunter+World+Wiki).

## Project Links

- [Github repo](https://github.com/cjeong1021/monster-hunter-wiki)
- [Website](https://monsterhunterwiki.surge.sh/)

## Technologies Used

- HTML, CSS
- Pure CSS library
- Flexbox
- CSS Grid

Used for styling and displaying content of the app.

- React
- React Router DOM

Used for creating the single page app, handling the data from the API and handling user input to display the correct information on the page.

- Axios

Used to get data from the Monster Hunter API.

## Wireframes

The wireframe for the website is modelled after a simple one page app where all the info is displayed on one page. There is a sidebar where the list of data and input field are, allowing users to search through data pulled from the API. Then a user can select a monster and display the data in the Details section.

![Wireframe](https://vectr.com/design/editor/40d875b3-96c2-42dc-962c-31b5fd403b1a)

This is the Component tree for the app. The majority of the data, states and functions will live in the App component and be passed down to the Sidebar and Details component. Sidebar will parse the data and display a list of monsters. Then React Router will be used to direct to URLs with the monster IDs, which the Details component will use params to filter the data to search for the selected monster.

![Component Tree](https://vectr.com/design/editor/40d875b3-96c2-42dc-962c-31b5fd403b1a)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Find and use external api
- Render data on page
- Allow user to interact with the page

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
