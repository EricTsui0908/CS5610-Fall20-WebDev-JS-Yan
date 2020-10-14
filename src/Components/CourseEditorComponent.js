import React from "react";
import CourseRowComponent from "./CourseRowComponent"
import LessonTabsComponent from "./LessonTabsComponent"
import ModuleListComponent from "./ModuleListComponent"
import TopicPillsComponent from "./TopicPillsComponent"
import WidgetListComponent from "./WidgetListComponent"
import {findCourseById} from "../Services/CourseService";


export default class CourseEditorComponent extends React.Component {
    state = {
        course:{
            _id:"",
            title:""
        }
    }

    componentDidMount() {
        console.log(this.props)
        findCourseById(this.props.match.params.courseId)
            .then(actualCourse => this.setState({
                course:actualCourse
            }))
    }

    render(){
        return(
            <div>
                <h1>Course Editor{this.props.match.params.course}</h1>
                <h2>{this.state.course.title}</h2>
                <LessonTabsComponent />
                <div class="row bg-light ml-0 mr-0 mt-1">
                    <div class="col-3">
                        <ModuleListComponent />
                    </div>
                    <div class="col">
                        <TopicPillsComponent />
                        <WidgetListComponent />
                    </div>
                </div>
            </div>
        )
    }
}