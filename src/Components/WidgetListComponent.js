import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {createCourse, findAllCourses} from "../Services/CourseService";

class WidgetListComponent extends React.Component{
    render(){
        return(
            <div class="container-sm mt-4 border">
                <div class="wbdv-light-gray-border">
                    <div class="mt-2 mb-2">
                    <h3>Heading Widget
                        <span class="pull-right">
                    <a href="#" class="btn btn-primary mb-2 ml-2 mr-1">
                        <i class="fa fa-arrow-up"></i>
                    </a>
                    <a href="#" class="btn btn-primary mb-2  ml-1 mr-2">
                        <i class="fa fa-arrow-down"></i>
                    </a>
                    <select class="form mb-2  ml-2 mr-2">
                        <option>Heading</option>
                        <option>YouTube</option>
                        <option>Slides</option>
                        <option>Image</option>
                        <option>List</option>
                    </select>
                    <a href="#" class="btn btn-danger mb-2  ml-2 mr-2">
                        <i class="fa fa-trash"></i>
                    </a>
                        </span>
                    </h3>
                    </div>
                    <div>
                        <input class="form-control mt-4 mb-4" placeholder="Heading Text"/>
                        <select class="form-control  mt-4 mb-4">
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                            <option>Heading 3</option>
                            <option>Heading 4</option>
                            <option>Heading 5</option>
                            <option>Heading 6</option>
                        </select>
                        <input class="form-control  mt-4 mb-4" placeholder="Heading Text"/>
                        <h4>Preview</h4>
                        <h1>Heading Text</h1>
                    </div>
                </div>
                <div class="container-sm d-flex mt-4 justify-content-end align-items-end mx-auto span2">
                    <a href="#" class="btn bt-sm btn-success mt-2 mb-2 pull-right">Add</a>
                </div>
                </div>
        );
    }
}

export default WidgetListComponent
