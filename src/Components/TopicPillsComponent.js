import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {createCourse, findAllCourses} from "../Services/CourseService";

class TopicPillsComponent extends React.Component{
    render(){
        return(
        <div class="col-8 row bg-light">
                <div class="container-sm mt-2">
                    <ul class="nav nav-tabs justify-content-around wbdv-topic-pill-list">
                        <li class="nav-item">
                            <a class="nav-link active wbdv-topic-pill" href="#">Topic 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link wbdv-topic-pill" href="#">Topic 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link wbdv-topic-pill" href="#">Topic 3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link wbdv-topic-pill" href="#">Topic 4</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-outline-primary wbdv-topic-add-btn" href="#">Add Topic</a>
                        </li>
                    </ul>
                </div>
        </div>
        );
    }
}

export default TopicPillsComponent