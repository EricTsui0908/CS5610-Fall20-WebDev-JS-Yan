import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {createCourse, findAllCourses} from "../Services/CourseService";

class LessonTabsComponent extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-md  sticky-top navbar-dark bg-primary">
                    <a href="../course-list/course-list.template.client.html" style={{color: "white"}} class="btn fa fa-times wbdv-course-editor wbdv-close"></a><a class="navbar-brand wbdv-course-title" href="#">CS5610</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                        <ul class="navbar-nav wbdv-lesson-tabs">
                            <li class="nav-item mx-5 wbdv-lesson-tabs">
                                <a class="nav-link" href="#">Build</a>
                            </li>
                            <li class="nav-item active mx-5 wbdv-lesson-tabs">
                                <a class="nav-link" href="#">Pages<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item mx-5 wbdv-lesson-tabs">
                                <a class="nav-link" href="#">Theme</a>
                            </li>
                            <li class="nav-item mx-5 wbdv-lesson-tabs">
                                <a class="nav-link" href="#">Store</a>
                            </li>
                            <li class="nav-item mx-5 wbdv-lesson-tabs">
                                <a class="nav-link" href="#">Apps</a>
                            </li>
                            <li class="nav-item mx-5 wbdv-lesson-tabs">
                                <a class="nav-link" href="#">Settings</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <button class="btn btn-success my-2 my-sm-0 wbdv-lesson-add-btn" type="submit">Add</button>
                        </form>
                    </div>
                </nav>

            </div>
        );
    }
}

export default LessonTabsComponent