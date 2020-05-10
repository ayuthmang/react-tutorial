import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
} from 'react-router-dom'

import shiba_1 from './images/dogs/shiba/shiba-1.jpg'
import shiba_2 from './images/dogs/shiba/shiba-2.jpg'
import shiba_3 from './images/dogs/shiba/shiba-3.jpg'
import vichianmas_1 from './images/cats/vichianmas/1.jpg'
import vichianmas_2 from './images/cats/vichianmas/2.jpg'
import notfound from './images/404.gif'
import catMouse from './images/mouse-cat.png'

function Cats() {
  const { path, url } = useRouteMatch()

  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/vichianmas`}>Vichianmas</Link>
        </li>
      </ul>

      <Route path={`${path}/vichianmas`}>
        <h1>Vichianmas Cats</h1>
        <img src={vichianmas_1} width={600} height={'auto'} alt="cat" />
        <img src={vichianmas_2} width={600} height={'auto'} alt="cat" />
      </Route>
    </>
  )
}

function Dogs() {
  // path - (string) The path pattern used to match. Useful for building nested <Route>s
  // url - (string) The matched portion of the URL. Useful for building nested <Link>s
  const { path, url } = useRouteMatch()
  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/shiba`}>Shiba</Link>
        </li>
      </ul>
      <Route path={`${path}/shiba`} render>
        <h1>Shiba Inu</h1>
        <img src={shiba_1} width={600} height={'auto'} alt="dog" />
        <img src={shiba_2} width={600} height={'auto'} alt="dog" />
        <img src={shiba_3} width={600} height={'auto'} alt="dog" />
      </Route>
    </>
  )
}

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function Home() {
  console.log(arguments[0]) // history, location, match
  console.log('useRouteMatch', useRouteMatch()) // params in route match
  console.log('useHistory', useHistory())
  console.log('useLocation', useLocation())
  console.log('useParams', useParams())
  return <h1>Welcome to my homepage :)</h1>
}

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <p>The page you're looking is not found</p>
      <img src={notfound} alt={'not found'} />
    </div>
  )
}

function MouseWithCat({ children }) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  function handleMouseMove(e) {
    setX(e.clientX + 10)
    setY(e.clientY + 10)
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <img
        src={catMouse}
        width={32}
        height={32}
        style={{ position: 'absolute', left: x, top: y }}
        alt={'cat'}
      />
      {children}
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <MouseWithCat>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cats">Cats</Link>
              </li>
              <li>
                <Link to="/dogs">Dogs</Link>
              </li>
            </ul>
          </nav>

          <hr />

          <Switch>
            {/* <Route path="/" exact render={props => <Home {...props} />} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/dogs" component={Dogs} />
            <Route path="/cats" component={Cats} />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
      </MouseWithCat>
    </Router>
  )
}
