import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {createCourse, findAllCourses} from "../Services/CourseService";

class Profile extends React.Component{
    render(){
        return(
            <div>
                <h1>Profile</h1>
                <div>
                    Username<input value="Alice" type ="text" className="form-control"/>
                    Phone<input placeholder="408-000-0000" type="phone" className="form-control"/>
                    Email<input placeholder="Alice@wonderland.com" type="email"className="form-control"/>
                    Date of Birth<input placeholder="1998-10-14" type="date"className="form-control"/>

                </div>

                <button
                    onClick={this.addCourse}
                    className="form-control btn btn-success">
                    Update
                </button>

                <button
                    onClick={this.addCourse}
                    className="form-control btn btn-danger">
                    Logout
                </button>

            </div>
        );
    }
}

export default Profile