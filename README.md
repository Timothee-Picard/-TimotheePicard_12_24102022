# Getting Started with SportSee React App


## Launching project

### 1 - Prerequisites
* nodejs 16.18.0

### 2 - Installing

- Clone the repo `git@github.com:Timothee-Picard/TimotheePicard_12_24102022.git`
- In the project directory, install the dependencies `npm install`

### 3 - Launch

- In the project directory, you can run: `npm run dev`

Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

## Launching backend

### 1 - Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### 2 - Installing

- Clone the repo `git@github.com:OpenClassrooms-Student-Center/P9-front-end-dashboard.git`
- In the project directory, install the dependencies `npm install` or `yarn`

### 3 - Launch
- In the project directory, you can run: `npm run dev` or `yarn dev`

### 3 - Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


