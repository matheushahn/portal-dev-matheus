import React, { useEffect, useState } from 'react';
import { Course } from '../../../interfaces/Course';
import { useParams } from 'react-router-dom';
import { Title, TitleLevel, Label, Panel, FlexBox, FlexBoxAlignItems } from '@ui5/webcomponents-react';
import { ReactComponent as ReactLogo } from '../../../assets/react.svg';
import { ModulesToggle } from '../../settings/ModulesToggle';
import { MediaToggle } from '../../settings/MediaToggle';


export const CourseDetails: React.FC = () => {
    let { id } = useParams();
    const [course, setCourse] = useState<Course|null>(null)
    const [expandModules, setExpandModules] = useState<Boolean|null>(null)
    const [showMedia, setShowMedia] = useState<Boolean|null>(null)

    useEffect(() => {
        loadCourseDetailsFromLocalStorage();
        loadModulesSettingsFromLocalStorage();
        loadShowMediaFromLocalStorage();
    }, []);

    const loadCourseDetailsFromLocalStorage = () => {
        let courses: Array<Course> = JSON.parse(window.localStorage.getItem("courses") || "");
        setCourse(courses.find(c => c.id == id) || null);
    }

    const loadModulesSettingsFromLocalStorage = () => {
        let expandString = window.localStorage.getItem("expandModules");
        let expandBoolean = !expandString ? true : expandString === 'true';
        setExpandModules(expandBoolean);
    }

    const loadShowMediaFromLocalStorage = () => {
        let loadMedia = window.localStorage.getItem("showMedia");
        let loadMediaBoolean = !loadMedia ? true : loadMedia === 'true';
        setShowMedia(loadMediaBoolean);
    }

    const onModulesVisualizationChange = () => {
        loadModulesSettingsFromLocalStorage();
    }

    const onMediaVisualizationChange = () => {
        loadShowMediaFromLocalStorage();
    }

    return (
        course ?
        <div style={{margin: '2rem'}}>
            <Panel fixed headerText={course.name}>
                <Label>{course!.details.description}</Label>
                <br/>
                <Label>Carga horária: {course!.details.workload}</Label>

                <FlexBox alignItems={FlexBoxAlignItems.Baseline}>
                    <Title style={{marginTop: '2rem', marginRight: '1rem'}} level={TitleLevel.H5}>Padrão dos módulos</Title>
                    <ModulesToggle onModulesChange={onModulesVisualizationChange} />
                </FlexBox>

                <FlexBox alignItems={FlexBoxAlignItems.Baseline}>
                    <Title style={{marginTop: '2rem', marginRight: '1rem'}} level={TitleLevel.H5}>Padrão de mídia</Title>
                    <MediaToggle onMediaVisualizationChange={onMediaVisualizationChange} />
                </FlexBox>
            </Panel>
        
            <Panel collapsed={!expandModules} style={{marginTop: '2rem'}} headerLevel={TitleLevel.H2} headerText="Módulo 1"> 
                <Title level={TitleLevel.H4}>Introdução</Title>
                <Label style={{marginTop:'0.5rem'}}>Detalhes módulo 1</Label>

                {showMedia && <div>
                    <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Imagens</Title>
                    <Label style={{marginTop:'0.5rem'}} >React</Label>
                    <div style={{width:'10vw', height:'10vh'}}>
                        <ReactLogo style={{width:'100%', height:'100%'}} />
                    </div>

                    <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Vídeos</Title>
                    <Label style={{marginTop:'0.5rem'}} >React</Label>
                    <br/>
                    <iframe title={'Vídeo Módulo 1'} width="420" height="315" src="https://www.youtube.com/embed/OXxul6AvXNs"/>           
                </div>}
            </Panel>

            <Panel collapsed={!expandModules} style={{marginTop: '2rem'}} headerLevel={TitleLevel.H2} headerText="Módulo 2">
                <Title level={TitleLevel.H4}>Introdução</Title>
                <Label style={{marginTop:'0.5rem'}}>Detalhes módulo 2</Label>

                {showMedia && <div>
                    <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Imagens</Title>
                    <Label style={{marginTop:'0.5rem'}} >React</Label>
                    <div style={{width:'10vw', height:'10vh'}}>
                        <ReactLogo style={{width:'100%', height:'100%'}} />
                    </div>

                    <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Vídeos</Title>
                    <Label style={{marginTop:'0.5rem'}} >React</Label>
                    <br/>
                    <iframe title={'Vídeo Módulo 1'} width="420" height="315" src="https://www.youtube.com/embed/OXxul6AvXNs"/>           
                </div>}
            </Panel>

            <Panel collapsed={!expandModules} style={{marginTop: '2rem'}} headerLevel={TitleLevel.H2} headerText="Módulo 3">
                <Title level={TitleLevel.H4}>Introdução</Title>
                <Label style={{marginTop:'0.5rem'}}>Detalhes módulo 3</Label>

                {showMedia && <div>
                    <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Imagens</Title>
                    <Label style={{marginTop:'0.5rem'}} >React</Label>
                    <div style={{width:'10vw', height:'10vh'}}>
                        <ReactLogo style={{width:'100%', height:'100%'}} />
                    </div>

                    <Title style={{marginTop:'2rem'}} level={TitleLevel.H4}>Vídeos</Title>
                    <Label style={{marginTop:'0.5rem'}} >React</Label>
                    <br/>
                    <iframe title={'Vídeo Módulo 1'} width="420" height="315" src="https://www.youtube.com/embed/OXxul6AvXNs"/>           
                </div>}
            </Panel>
        </div>
        : 
        <div style={{margin: '1rem'}}>
            <Title>Curso não encontrado!</Title>
        </div>
    );
}