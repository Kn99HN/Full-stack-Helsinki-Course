# Token based authentication
- Users first start by logging in through a form 
- The information/payload is sent to the API, storing them.
- If the values are correct, the backend will generate a TOKEN and return
that to the frontend.
- The browser saves the token.
- When the user create a new note, the React code 
sends the token along with the request
- The server uses the token to identify the user