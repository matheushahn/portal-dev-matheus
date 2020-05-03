import React, { useState } from 'react';
import { ToggleButton } from '@ui5/webcomponents-react';
import { MediaProps } from '../../interfaces/Media';


export const MediaToggle: React.FC<MediaProps> = (props: MediaProps) => {
    const loadShowMediaFromLocalStorage = () : boolean => {
        let showMediaString = window.localStorage.getItem("showMedia");
        return !showMediaString ? true : showMediaString === 'true';
    }
    const [showMedia, setShowMedia] = useState(loadShowMediaFromLocalStorage());

    const onMediaVisualizationChange = (event: any) => {
        let showMedia = event.target.pressed;
        setShowMedia(showMedia);
        window.localStorage.setItem("showMedia", showMedia);
        props.onMediaVisualizationChange?.call(null);
    }

    return (
        <ToggleButton pressed={showMedia} onClick={onMediaVisualizationChange}>
            {showMedia ? 'Esconder' : 'Mostrar'}
        </ToggleButton>
    );
  }