# ZZT Recruitment Task

The application uses mini framework PureJS and allows users to login to web portal.

Technologies:
 - PureJS Framework
 - Fetch (Post)
 - Local Storage
 - redirecting
 - creating HTML templates
 - swal alerts - https://sweetalert.js.org/guides/
 
 The astronaut image is taken from https://jsweisart.com/facebook-alegria.
 All icons created by Freepik: https://www.flaticon.com/authors/freepik.


## PureJS

The framework includes two parts:
1. engine.js - template handler
2. router.js - router logic

##### Creating views
To create a template:
1. Add the template in index.html with id
2. Register view with the route

```javascript
route('/path/to/view', 'idSelector', function() {
  // controller logic
})
```

##### Controllers logic

1. template - Interpolation (example 1) - varibles wrapped in  (<%= name of varible %>). Can manage pure JS functions. 
    (<% console.log('js is in the air!') %>.

2. $on - event registration (example 2) - to register event use "$on", full template 
    this.$on('.css-selector', 'eventType', (ev) => { /* event handler */ });

3. $refresh - force rerender (example 2) - rerender the whole view, can come in handy in case of change of values.

## API Documentation
*Example request*
```
POST https://zwzt-zadanie.netlify.app/api/login

{
  username: 'zwzt',
  password: 'secret'
}
```
*Example response*
```
{
  message: 'Login success!',
  token: 'eyJhbGciOiJIUz...'
}
```

To receive an error simply type "error" in the password value.

*Example request*
```
POST https://zwzt-zadanie.netlify.app/api/login
{
  username: 'zwzt',
  password: 'error'
}
```
*Example response*
```
{
  message: 'Wrong password!',
  error: true
}
```
## Setup
To run this project, install it locally using npm:

```
$ cd ../lorem
$ npm install
$ npm start
```