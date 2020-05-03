import React, { useState } from 'react';
import { ToggleButton } from '@ui5/webcomponents-react';
import { ModulesProps } from '../../interfaces/Modules';


export const ModulesToggle: React.FC<ModulesProps> = (props: ModulesProps) => {
    const getExpandModulesFromLocalStorage = () : boolean => {
        let expandString = window.localStorage.getItem("expandModules");
        return !expandString ? true : expandString === 'true';
    }
    const [expand, setExpand] = useState(getExpandModulesFromLocalStorage());

    const onModuleVisualizationChange = (event: any) => {
        let expand = event.target.pressed;
        setExpand(expand);
        window.localStorage.setItem("expandModules", expand);
        props.onModulesChange?.call(null);
    }

    return (
        <ToggleButton pressed={expand} onClick={onModuleVisualizationChange}>
            {expand ? 'Esconder' : 'Mostrar'}
        </ToggleButton>
    );
  }