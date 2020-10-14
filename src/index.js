import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import CourseListComponent from "./Components/CourseListComponent";
import * as serviceWorker from './serviceWorker';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseEditorComponent from "./Components/CourseEditorComponent";
import CourseCardComponent from "./Components/CourseCardComponent";
import {CourseManagerComponent} from "./Components/CourseManagerComponent";
import CourseGridComponent from "./Components/CourseGridComponent";

ReactDOM.render(
    <BrowserRouter>
        <div className ="container">
        <div>
        <h1>
        Welcome to CS5610 - Web Development
        </h1>
        </div>
            <h5 className ="wbdv-sticky-header">
                <Link to="/login">Login</Link> |
                <Link to="/register">Register</Link> |
                <Link to="/profile">Profile</Link> |
                <Link to="/courses">Courses</Link> |
                <Link to="/card">Card</Link> |
                <Link to="/edit">Editor</Link>
            </h5>

            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/course" exact component={CourseManagerComponent} />
            <Route path="/card" exact component={CourseGridComponent} />
            <Route path="/edit" exact component={CourseEditorComponent} />
        </div>
    </BrowserRouter>,
//    <CourseManagerComponent/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
