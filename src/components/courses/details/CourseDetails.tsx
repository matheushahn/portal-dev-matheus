import React, { useEffect, useState } from 'react';
import { Course } from '../../../interfaces/Course';
import { useParams } from 'react-router-dom';
import { Title } from '@ui5/webcomponents-react';

export const CourseDetails: React.FC = () => {
    let { id } = useParams();
    const [course, setCourse] = useState<Course|null>(null)

    useEffect(() => {
        loadCourseDetailsFromLocalStorage();
    }, []);

    const loadCourseDetailsFromLocalStorage = () => {
        let courses: Array<Course> = JSON.parse(window.localStorage.getItem("courses") || "");
        setCourse(courses.find(c => c.id == id) || null);
    }

    return (
        course ?
        <div>
            <Title>Curso: {course!.name}</Title>
        </div>
        : 
        <Title>"Curso não encontrado!"</Title>
    );
}