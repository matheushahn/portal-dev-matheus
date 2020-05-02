import React, { useState, useEffect } from 'react';
import { Table, TableRow, TableCell, TableColumn, Panel, TitleLevel, Title } from '@ui5/webcomponents-react';
import { Course } from '../../interfaces/Course';
import { useHistory } from 'react-router-dom';

export const Courses: React.FC = () => {
    let history = useHistory();

    useEffect(() => {
        initCoursesFromLocalStorage();
    }, []);

    const [courseArray, setCourseArray] = useState<Array<Course>>([])

    const updateCoursesInLocalStorage = (courses: Array<Course>) => {
        window.localStorage.setItem("courses", JSON.stringify(courses));
    }

    const initCoursesFromLocalStorage = () => {
        if (!window.localStorage.getItem("courses")) {
            let courses = [{
                id: 1,
                name: 'Dev 1', 
                date: 'Terça-feira', 
                teacher: "Professor 1", 
                enrolled: false,
                details: {
                    description: "Basic Description", 
                    workload: 60
                }
            }, {
                id: 2,
                name: 'Dev 2', 
                date: 'Quarta-feira', 
                teacher: "Professor 2", 
                enrolled: false,
                details: {
                    description: "Basic Description", 
                    workload: 60
                }
            }, {
                id: 3,
                name: 'Dev 3', 
                date: 'Sexta-feira', 
                teacher: "Professor 3", 
                enrolled: false,
                details: {
                    description: "Basic Description", 
                    workload: 60
                }
            }, {
                id: 4,
                name: 'Dev para Web', 
                date: 'Quinta-feira', 
                teacher: "Professor 4", 
                enrolled: false,
                details: {
                    description: "Basic Description", 
                    workload: 60
                }
            }, {
                id: 5,
                name: 'Projeto de Interfaces', 
                date: 'Segunda-feira', 
                teacher: "Professor 5", 
                enrolled: false,
                details: {
                    description: "Basic Description", 
                    workload: 60
                }
            }];
            setCourseArray(courses);
            updateCoursesInLocalStorage(courses);
        } else {
            setCourseArray(JSON.parse(window.localStorage.getItem("courses") || ""));
        }
    }

    const onCourseClick = (event: any) => {
        const id = event.detail.row.id;
        history.push(`/course/${id}`)
    };

    return (
        <div style={{margin: '0 2rem'}}>
            <Title level={TitleLevel.H3}>Cursos Disponíveis</Title>
            <Table
                no-data-text={'Sem dados'}
                show-no-data
                style={{marginTop:'1rem'}}
                onRowClick={onCourseClick}
                columns={[
                    <TableColumn key="id">#</TableColumn>,
                    <TableColumn key="name">Nome</TableColumn>,
                    <TableColumn key="date">Dia</TableColumn>,
                    <TableColumn key="teacher">Professor</TableColumn>,
                    <TableColumn key="enrolled">Matriculado</TableColumn>,
                ]}
            >
                {courseArray.map((course) => (
                    <TableRow key={course.id} id={course.id.toString()}>
                        <TableCell>{course.id}</TableCell>
                        <TableCell>{course.name}</TableCell>
                        <TableCell>{course.date}</TableCell>
                        <TableCell>{course.date}</TableCell>
                        <TableCell>{course.enrolled ? "Sim" : "Não"}</TableCell>
                    </TableRow>
                ))}
            </Table>            
        </div>
    );

}
