<h1 align="center">Users App</h1>

<p align="center">
  <img width="800" src="https://i.imgur.com/qeXDD02.png" alt="users app">
</p>

Deployed link: https://654d355af47ea61e795f5d8f--flourishing-kelpie-1debc4.netlify.app/users
***
### How to run the app locally
1. Clone the repository
2. Navigate to the project folder
3. Run `npm install` to install all the required dependencies
4. Run `ng serve` to run the application

### Assumptions made in the application logic
1. There can be duplicate users as the given API contains only 12 users
2. When you make a favorite user, all the duplicated users will be marked together
3. When a new user is requested from the API and if the returned user is already included in the favorite list, then the requested user will be considered as a new user 
