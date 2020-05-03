import React, { useState } from 'react';
import { ToggleButton } from '@ui5/webcomponents-react';

export const MenuToggle: React.FC = () => {
    const getExpandMenuFromLocalStorage = (): boolean => {
        let expandString = window.localStorage.getItem("expandMenu");
        return !expandString ? true : expandString === 'true';
    };
    const [expand, setExpand] = useState(getExpandMenuFromLocalStorage());

    const onMenuVisualizationChange = (event: any): void => {
        let expand = event.target.pressed;
        setExpand(expand);
        window.localStorage.setItem("expandMenu", expand);

        let e = new CustomEvent("menu-change", {});
        window.dispatchEvent(e);
    };

    return (
        <ToggleButton pressed={expand} onClick={onMenuVisualizationChange}>
            {expand ? 'Esconder' : 'Mostrar'}
        </ToggleButton>
    );
  }