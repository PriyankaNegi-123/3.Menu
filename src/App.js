import React, {useState} from 'react';
import './index.css';
import Courses from './components/Courses';
import data from './data';
import Categories from './components/Categories';

const App = () => {
    const [courses, setCourses] = useState(data);
    const categories = ['All', 'Web Development', 'Analytics', 'Programming'] ;
    const filterCourses = (category)=>{
        if(category==='All'){
          setCourses(data)
        }else{
          const newCourses = data.filter((course)=> course.category===category);
          setCourses(newCourses);
        }
    }
  return (
    <main className='main'>
        <section className='menu section'>
            <div className ='title'>
                <h2>Our Courses</h2>
                <div className='underline'></div>
            </div>
            <Categories categories={categories} filterCourses={filterCourses}/>
            <Courses courses={courses}/>
        </section>
    </main>
  );
};

export default App