# AWS Turtles Test app

Simple test app for communicating with AWS api gateway -> AWS lambda -> DynamoDB...

## Pre-requisites

Add `.env` file to root and add `REACT_APP_API_URL=` which points to API gateway

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Comments

refresh button not needed when lifting state up

`<button type="button" className="btn btn-info" onClick={handleRefresh}><i className="bi bi-lightning"></i>Refresh</button>`
`  <button className="btn btn-success" onClick={handleClick}>Get Turtles</button>`
