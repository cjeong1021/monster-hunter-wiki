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

## How to setup

Fork and clone the repo.

Change into the monster-hunter-wiki/monster-hunter-wiki directory.

```
cd monster-hunter-wiki
```

Install necessary packages while inside the monster-hunter-wiki directory (the one with src folder)

```
npm install
```

Run the website by running server.

```
npm start
```

## Wireframes

The wireframe for the website is modelled after a simple one page app where all the info is displayed on one page. There is a sidebar where the list of data and input field are, allowing users to search through data pulled from the API. Then a user can select a monster and display the data in the Details section.

![Wireframes](https://user-images.githubusercontent.com/14892355/172871998-eb765bad-91f2-4ef2-94b3-cbcc3660cf69.jpeg)

This is the planned Component tree for the app. The majority of the data, states and functions will live in the App component and be passed down to the Sidebar and Details component. Sidebar will parse the data and display a list of monsters. Then React Router will be used to direct to URLs with the monster IDs, which the Details component will use params to filter the data to search for the selected monster.

![Component Tree](https://user-images.githubusercontent.com/14892355/172872062-3bbf59b3-e91b-4dd0-94b7-c717eb94b9f6.jpeg)

## React Components for MVP

The React Component tree has two main branches, one for the Sidebar and one for the Details. Both branches get passed data that is obtained in the App component from the API. The Sidebar handles the data and filters it based on user input, outputting a list of monsters that match the filter criteria. If a user clicks on a monster in the list, it will Route the user to a url with the monster ID in it, which the Details component uses to filter the data passed from App to render information about the clicked monster.

![MVP Components](https://user-images.githubusercontent.com/14892355/172912576-6eeb178d-aa09-4703-964a-c1dea08ccfe3.jpeg)

## Extra Features

Features that were added after MVP was reached were:

- Favorites
- Related Monsters

# Favorites

The Favorites functionality was done by adding another state to the App that would hold favorited monsters and display it in a dropdown menu at the top of the app page. There needed to be some logic to add a monster to favorites if it was not already in favorites, or remove it if it was already in favorites.

```
function addFaves() {
    if (props.monsterHistory.includes(props.monster)) {
      let newArray = props.monsterHistory.filter(
        (monster) => monster !== props.monster
      );
      props.setMonsterHistory(newArray);
      setFaves('+');
    } else {
      props.setMonsterHistory([...props.monsterHistory, props.monster]);
      setFaves('-');
    }
  }
```

# Related Monsters

The Related Monsters functionality lets users see monsters that share similar data like species. This was done by reusing the same filter functionality from the Filter component and added the function to the Details component, rendering another list of monsters below the data being displayed.

## User Stories

- As a user, I want to quickly browse for the monster I am looking for and see related info about the monster I select.
- As a user, I want to keep track of monsters related to the one I am searching so that I can see info about them as well.
- As a user, I want to keep track of my favorites so I can quickly look up details about them without searching
