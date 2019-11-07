A simple Web-App with just a login page with different methods of Routing in React and Protected Routing set up. 

Authorisation of the user is done with Hard-coded values in the authService.js file. No actual api call is made. 


There are two main methods available for routing using react-router library in React. [Both the methods are done in login.js and kept commented. ]

1. Using <Redirect>
    Using the <Redirect> component is the recommened method for programmatically routing as it is in aligned with Reacts core concept. That is,
        a.Composable 
        b.Declarative   
        c.user event -> state change -> re-render. 
    
    One drawback of this approach is there is always a need to declare a property in the components state and update that property inorder to know when to render the <Redirect>. But which is still in align with react concept.

2. Adding the new Route to History stack. 
    History library keeps track of the session history of the React Router. When a component is rendered by React Router, that component is passed three different props: location, match, and history. Utilising the 'history' props helps us to render to a new path. History.push creates a new entry in the history stack, i.e redirects the user to the new route. 


Routes /home and /contact are protected, i.e the user is not allowed to access these routes unless he/she is authorised. The code for defining protected routes in index.js. While creating a ProtectedRoute component, folloiwing are the requirements. 
    
    1. It has the same API as <Route />.
    2. It renders a <Route /> and passes all the props through to it.
    3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.

Few notes on the code [lines 16-25 in index.js]: 

    With Route, if a path isn’t supplied, then that Route will always match. So in the case above, because we didn’t supply a path prop,the Route will always match which means the render prop will always be called. Then, depending on the auth status of the user, we’ll either render a Redirect or render the component

