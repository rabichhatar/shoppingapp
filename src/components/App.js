import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { List, NotFound } from "./RouteComponents";
import ManageProducts from "./shopping/ManageProducts";

class App extends Component {
    state = { appHeading: "My Shopping App" }

    render() {
        return <div>
            <nav className="navbar bg-dark navbar-expand-sm navbar-dark">
                {/*<a href="/" className="navbar-brand">{this.state.appHeading}</a>*/}
                <Link to="/" className="navbar-brand">{this.state.appHeading}</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/list" className="nav-link">Shopping List</Link>
                    </li>
                    <li>
                        <Link to="/manage" className="nav-link">Manage Products</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact render={() => <h3>Welcome to My Shopping App</h3>} />
                <Route path="/list" component={List} />
                <Route path="/manage" component={ManageProducts} />
                <Route path="*" component={NotFound} />
                {/* "*" path should be always last*/}
            </Switch>
        </div>
    }
}

export default App;