import React, { useEffect, useState } from 'react';
import { Course } from '../../../interfaces/Course';
import { useParams } from 'react-router-dom';
import { Title, TitleLevel, Label, Panel } from '@ui5/webcomponents-react';
import { ReactComponent as ReactLogo } from '../../../assets/react.svg';


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
        <div style={{margin: '2rem'}}>
            <Title level={TitleLevel.H1}>{course!.name}</Title>
            <Label>{course!.details.description}</Label>
            <br/>
            <Label>Carga horária: {course!.details.workload}</Label>
        
            <Panel style={{marginTop: '2rem'}} headerLevel={TitleLevel.H2} headerText="Módulo 1">
                <Title level={TitleLevel.H4}>Introdução</Title>
                <Label style={{marginTop:'0.5rem'}}>Detalhes módulo 1</Label>

                <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Imagens</Title>
                <Label style={{marginTop:'0.5rem'}} >React</Label>
                <div style={{width:'10vw', height:'10vh'}}>
                    <ReactLogo style={{width:'100%', height:'100%'}} />
                </div>

                <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Vídeos</Title>
                <Label style={{marginTop:'0.5rem'}} >React</Label>
                <br/>
                <iframe title={'Vídeo Módulo 1'} width="420" height="315" src="https://www.youtube.com/embed/OXxul6AvXNs"/>           
            </Panel>

            <Panel style={{marginTop: '2rem'}} headerLevel={TitleLevel.H2} headerText="Módulo 2">
                <Title level={TitleLevel.H4}>Introdução</Title>
                <Label style={{marginTop:'0.5rem'}}>Detalhes módulo 2</Label>

                <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Imagens</Title>
                <Label style={{marginTop:'0.5rem'}} >React</Label>
                <div style={{width:'10vw', height:'10vh'}}>
                    <ReactLogo style={{width:'100%', height:'100%'}} />
                </div>

                <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Vídeos</Title>
                <Label style={{marginTop:'0.5rem'}} >React</Label>
                <br/>
                <iframe title={'Vídeo Módulo 1'} width="420" height="315" src="https://www.youtube.com/embed/OXxul6AvXNs"/>           
            </Panel>

            <Panel style={{marginTop: '2rem'}} headerLevel={TitleLevel.H2} headerText="Módulo 3">
                <Title level={TitleLevel.H4}>Introdução</Title>
                <Label style={{marginTop:'0.5rem'}}>Detalhes módulo 3</Label>

                <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Imagens</Title>
                <Label style={{marginTop:'0.5rem'}} >React</Label>
                <div style={{width:'10vw', height:'10vh'}}>
                    <ReactLogo style={{width:'100%', height:'100%'}} />
                </div>

                <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Vídeos</Title>
                <Label style={{marginTop:'0.5rem'}} >React</Label>
                <br/>
                <iframe title={'Vídeo Módulo 1'} width="420" height="315" src="https://www.youtube.com/embed/OXxul6AvXNs"/>           
            </Panel>
        </div>
        : 
        <div style={{margin: '1rem'}}>
            <Title>Curso não encontrado!</Title>
        </div>
    );
}