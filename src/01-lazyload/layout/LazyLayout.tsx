import {
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

const Lazylayout = () => {
  return (
    <div>
      <h1>Lazylayout Page</h1>
      <ul>
        <li>
          <NavLink to="lazy1" activeClassName="nav-active">
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink to="lazy2" activeClassName="nav-active">
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink to="lazy3" activeClassName="nav-active">
            Lazy 3
          </NavLink>
        </li>
      </ul>

      <Router>
        <Route path="lazy1" render={() => <LazyPage1 />} />
        <Route path="lazy2" render={() => <LazyPage2 />} />
        <Route path="lazy3" render={() => <LazyPage3 />} />

        {/* <Route path="*" element={<div>Not found</div>} /> */}
        {/* <Route path="*" element={<Navigate to="lazy1" replace />} /> */}
        <Redirect to={"lazy1"} />
      </Router>
    </div>
  );
};

export default Lazylayout;
