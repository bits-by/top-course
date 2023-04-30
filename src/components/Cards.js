import React from 'react'
import {useState} from 'react'
import Card from "./Card" 

const Cards = ({courses,category}) => {

     // let courses = props.courses;
    const [likedCourses,setlikedCourses] = useState([]);

    function getCourses() {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
            array.forEach(courseData => {
            allCourses.push(courseData);
            })
        })
        return allCourses;
        }else{
            //specific category array...
            return courses[category];
        }
        
    
    }
    return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map((course) => {
                return <Card key={course.id} course={course}
                    likedCourses={likedCourses}
                    setlikedCourses={setlikedCourses}
                />
            })
        }
    </div>
  )
}

export default Cards;