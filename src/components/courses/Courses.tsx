import React from 'react';
import { Table, TableRow, TableCell, TableColumn, Panel, TitleLevel } from '@ui5/webcomponents-react';

export const Courses: React.FC = () => {
    let courses = [
        {
            id: 1,
            name: 'Dev 1', 
            date: 'Terça-feira', 
            teacher: "Professor 1", 
            enrolled: false
        }, {
            id: 2,
            name: 'Dev 2', 
            date: 'Quarta-feira', 
            teacher: "Professor 2", 
            enrolled: false
        }, {
            id: 3,
            name: 'Dev para Web', 
            date: 'Sexta-feira', 
            teacher: "Professor 3", 
            enrolled: false
        }, {
            id: 4,
            name: 'Dev 3', 
            date: 'Quinta-feira', 
            teacher: "Professor 4", 
            enrolled: false
        }, {
            id: 5,
            name: 'Projeto de Interfaces', 
            date: 'Segunda-feira', 
            teacher: "Professor 5", 
            enrolled: false
        }
    ];
    
    return (
        <Panel headerText={'Cursos Disponíveis'} headerLevel={TitleLevel.H2}>
            <div style={{margin: '0 2rem'}}>
                <Table
                    no-data-text={'Sem dados'}
                    show-no-data
                    columns={[
                        <TableColumn key="id">#</TableColumn>,
                        <TableColumn key="name">Nome</TableColumn>,
                        <TableColumn key="date">Dia</TableColumn>,
                        <TableColumn key="teacher">Professor</TableColumn>,
                        <TableColumn key="enrolled">Matriculado</TableColumn>,
                    ]}
                >
                    {courses.map((course, index) => (
                        <TableRow key={course.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{course.name}</TableCell>
                            <TableCell>{course.date}</TableCell>
                            <TableCell>{course.date}</TableCell>
                            <TableCell>{course.enrolled ? "Sim" : "Não"}</TableCell>
                        </TableRow>
                    ))}
                </Table>            
            </div>
        </Panel>
    );

}
