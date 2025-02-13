# React Navigation and Router

## React Router
So, we have React helping us build a single page application. But so far, we haven't really been working with multiple pages. We learned we can make multiple components, and that we can pass data between them in the form of props. But what about dealing with navigating to new pages?

Enter React Router.

We will be working with React Router V6  (another one of those things that recently came out so a lot of tutorials or online resources will be outdated... hint hint don't try to use AI...)
https://reactrouter.com/en/main

We will need to install `react-router-dom` in order to handle navigation. We can create some routes using:


```js
// App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
```

We can then add some additional routes to that router in the form of objects within the router array.
We use `path` to dictate what route we will need to hit (this is used for navigation purposes), and we use `element` to determine what components or JSX we want to render

*NOTE* We can use `*` as wild card to match anything of any length. Example:

`/*` -> catch all route

`/spots/*` -> catches anything after /spots.

Not notice with that last example, this would catch ANYTHING. If we did `/spots/hello` it would go to that page, and that may cause issues when we want the actual id of a spot. Just like our routes in the backend, we can still do `/spots/:spotId`. React will auto replace the suffix with a number. We can easily handle these types of edge cases using `children`


```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'teams',
    children: [
      {
        index: true,
        element: <TeamsIndex />
      },
      {
        path: ':teamId',
        element: <TeamDetails />
      }
    ]
  }
]);

```

Notice that for our `/teams` route, we have `index`, which is the main page `/teams/`, and `:teamId` which will let us go to `/teams/:teamId`. This gives us better control of route matching to prevent accidentally going to unintended routes, as was often found during the React Router 5 days ("back in my day.. we use to use switch cases and `Routes`" - Anthony Circa 2022 👴)



### useParams

If we want to grab the integers from a URL say for example the 1 in `/spot/1` we can use `useParams`

This would look something like this:

```js
import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
  // Get the userId param from the URL.
  let { id } = useParams();
  // ...
}

function App() {
  return (
    <h1>{`rendering spot: ${id}`}</h1>
    //...
  );
}
```


## Outlet

https://reactrouter.com/en/main/components/outlet

Outlets let us account for the case that we may not find a specific route within a path. Sometimes, a user may want to use a very specific path that does not exist, and we may want more like "fallback".

An `<Outlet>` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

We can add an a `<Outlet>` route that lets us default to a specific element that does not have an `element` assigned to it.

We often can use this as a way to tell React Router that want to continue looking for additional paths that are not exclusively specified in a given path's element

```js
{
  path: '/teams',
  element:
    <>
      <TeamsIndex />
      <Outlet />
    </>,
  children: [
    {
      path: ':teamId',
      element: <TeamDetails />
    }
  ]
}

```


## Links and NavLinks

https://reactrouter.com/en/main/components/link

We can use the `<Link>` component to let us handle navigations. This is the same thing as doing `<a href>`. Links do not do full page loads, although you can use it to do a full page load. They essentially let us change the route, and thus replace the virtual DOM with new virtual DOM elements.

### Relative vs Absolute Paths

The key prop for a `Link` is `to`. We can use this to send us somewhere.

If we were already at a URL path `/teams` we can do:
```js
<Link to="new">Create a Team!</Link>
```

This will then take us to `/teams/new`.

We can also do the same thing by being absolute with it;

```js
<Link to="/teams/new">Create a Team!</Link>
```

*NOTE* these are still just relative to your project, but absolute within your project's scope.

#### NavLink

We can also use `NavLink` to help us use `Links` with additional functionality.

```js
  <NavLink to='/home'>Home</NavLink>
  <NavLink to='/teams'>Teams</NavLink>
```

A NavLink lets us know if it is active or pending. It will be set to `pending` if the `to` prop matches a URL that is currently loading. This is useful for things like nav bars. We commonly use this when we want to have some sort of change to a Nav Bar icon to show what thing is currently loaded in

*NOTE* you can only use `Links` and `NavLinks` within the context of RouterProvider.


### React Router - Navigation

We can use a navigation hook `useNavigate` to allow us to manage our navigation across a stack. We have to import it from `react-router-dom` and then it is common to create a variable pointing to the hook


```js
import { useNavigate } from 'react-router-dom';

function MyForm() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Do something with the submitted data...
    navigate(`/home`);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* The form ... */}
    </form>
  )
}
```


Notice here, we are creating a function, and within that function when it is excuted we we will send out route to a path. You can also pass in an optional options object. Say you want to navigate somewhere, but not allow the user to go back to a page. You can do:

```js
  navigate('/home', { replace: true });
```

You can also shortcut the navigation to go back by doing:

```js

  navigate(-1);
```
