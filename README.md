# Monster Hunter Wiki

## Project Description

Monster Hunter Wiki is a single page app that uses the [Monster Hunter World API](https://docs.mhw-db.com/) and React to display simple and concise info about monsters in the game. Use this app to quickly filter monsters by name, location and species and look up their weaknesses and attributes.

This website is not meant to be a comprehensive tool, for more in-depth information on Monster Hunter World, visit the official [Monster Hunter World wikipage](https://monsterhunterworld.wiki.fextralife.com/Monster+Hunter+World+Wiki).

## Project Links

- [Github repo](https://github.com/cjeong1021/monster-hunter-wiki)
- [Website](https://monsterhunterwiki.surge.sh/)

## Technologies Used

- HTML, CSS
- [Pure CSS library](https://purecss.io/)
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

![Wireframes](https://user-images.githubusercontent.com/14892355/172871998-eb765bad-91f2-4ef2-94b3-cbcc3660cf69.jpeg)

This is the planned Component tree for the app. The majority of the data, states and functions will live in the App component and be passed down to the Sidebar and Details component. Sidebar will parse the data and display a list of monsters. Then React Router will be used to direct to URLs with the monster IDs, which the Details component will use params to filter the data to search for the selected monster.

![Component Tree](https://user-images.githubusercontent.com/14892355/172872062-3bbf59b3-e91b-4dd0-94b7-c717eb94b9f6.jpeg)

## React Components for MVP

The React Component tree has two main branches, one for the Sidebar and one for the Details. Both branches get passed data that is obtained in the App component from the API. The Sidebar handles the data and filters it based on user input, outputting a list of monsters that match the filter criteria. If a user clicks on a monster in the list, it will Route the user to a url with the monster ID in it, which the Details component uses to filter the data passed from App to render information about the clicked monster. 

![MVP Components](https://user-images.githubusercontent.com/14892355/172912576-6eeb178d-aa09-4703-964a-c1dea08ccfe3.jpeg)

## Extra Features



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
