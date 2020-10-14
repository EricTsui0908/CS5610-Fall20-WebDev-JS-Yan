import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {createCourse, findAllCourses} from "../Services/CourseService";

class Profile extends React.Component{
    render(){
        return(
        <div class="row bg-light ml-0 mr-0 mt-1">
            <div class="col-4 text-left bg-light wbdv-module-list py-4 ">
                <div class="list-group wbdv-module-list">
                    <a href="#" class="list-group-item list-group-item-action wbdv-module-item wbdv-module-item-title">Module 1 - JQuery<i class="fa fa-times pull-right"></i></a>
                    <a href="#" class="list-group-item list-group-item-action wbdv-module-item wbdv-module-item-title">Module 2 - React<i class="fa fa-times pull-right wbdv-module-item-delete-btn"></i></a>
                    <a href="#" class="list-group-item list-group-item-action wbdv-module-item wbdv-module-item-title active">Module 3 - Redux<i class="fa fa-times pull-right wbdv-module-item-delete-btn"></i></a>
                    <a href="#" class="list-group-item list-group-item-action wbdv-module-item wbdv-module-item-title">Module 4 - Native<i class="fa fa-times pull-right wbdv-module-item-delete-btn"></i></a>
                    <a href="#" class="list-group-item list-group-item-action wbdv-module-item wbdv-module-item-title">Module 5 - Angular<i class="fa fa-times pull-right wbdv-module-item-delete-btn"></i></a>

                    <a href="#" class="list-group-item list-group-item-action wbdv-module-item wbdv-module-item-title">Module 6 - Node<i class="fa fa-times pull-right wbdv-module-item-delete-btn"></i></a>

                    <a href="#" class="list-group-item list-group-item-action wbdv-module-item wbdv-module-item-title">Module 7 - Mongo<i class="fa fa-times pull-right wbdv-module-item-delete-btn"></i></a>

                    <a href="#" class="list-group-item list-group-item-action wbdv-module-item wbdv-module-item-title">Module 8 - SpringBoot<i class="fa fa-times pull-right wbdv-module-item-delete-btn"></i></a>


                    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-plus pull-right wbdv-module-item-add-btn"></i></a>
                </div>
            </div>
        );
    }
}

export default ModuleListComponent