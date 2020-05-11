# Deploying app to internet

## Same origin policy and CORS

CORS (Cross-Origin Resource Sharing): a mechnaism that allows restricted resources on a web page to be requested from another domain outside of the domain from which the first resource was served. Ajax requests, however, are forbidden by default.

### Example
Backend code run in port 3001 and frontend code run in port 3000 => they do not have the same origin. Same origin is defined as if they have the same host and port number

## Frontend production build

- Creating a production build with `npm run build`, creating a directory `build`
=> Often develop in development mode in React, which tends to be slower but giving out clear error message.
- The process will minified our application's JS code, meaning it will remove extra white space and code such that it doesn't change the functionality of our program. All the JS codes will be minified into one file.

### Serving static files from backend
- Using middleware `static`, we can serve static files such as index.html, JS files, etc.
- Where there is a HTTP GET request to www.serversaddress.com/index.html or www.serversaddress.com, express will fetch the static files in the `build` directory and serve it. The API is handled as normal when a GET request is made to the API URL.
=> Single Page App

### Streamlining deploying of the frontend
- By adding a few commands into `package.json`, it will allow us to avoid manual work.

#### Example

"deploy": "git push heroku master"
=> run `npm run deploy` allow us to release the current backend to deployment server

## Proxy
- When serving from the backend, we change the base address to be relative to the backend address, which run on PORT 3001, so now when we run development mode, we are runiing on PORT 3000.
- Therefore, we add another field in `package.json` to indicate the changes
=> proxy: http://localhost:3001


