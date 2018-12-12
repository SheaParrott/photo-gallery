https://www.javascript.com/ <br/>
https://css-tricks.com/snippets/css/a-guide-to-flexbox/ <br/>
https://reactjs.org/ <br/>
https://www.npmjs.com/package/axios






created the static version first

- added the json
- created the categorylist
- created the photodetails
- created the photolist

  - pulled info from the json, only displaying one set of data

- then made it dynamic depending on the data i inputed
  - nothing that changes these datapoints at first

starting to work on routing

- import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
- router around entire app.js
  - router can only return one tag
    - we used <></> as our one tag
  - using route in app.js as our routes
    - <Route exact path="/" component={CategoryList} />
      - this creates a 'route' tag with the 'exact' 'path' and returns the 'component' listed
        - route is the tag
        - path is the url extension 
        - component is the component displayed when the path matches
        - exact makes it where the url above will only display the 'component' when the url matches the 'path'
