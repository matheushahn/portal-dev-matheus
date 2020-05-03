import React, { useState } from 'react';
import { Title, TitleLevel, Button } from '@ui5/webcomponents-react';
import { SketchPicker, ChromePicker, CompactPicker, SliderPicker, TwitterPicker } from 'react-color';


export const BackgroundConfiguration: React.FC = () => {
    const getExpandModulesFromLocalStorage = () : string => {
        let expandString = window.localStorage.getItem("backgroundColor");
        return expandString || '#f8f8f8';
    }
    const [backgroundColor, setBackgroundColor] = useState(getExpandModulesFromLocalStorage());

    const changeBackgroundColor = (color: string) => {
        document.body.style.backgroundColor = color;
    }

    const handleColorChange = (color: any) => {
        updateColor(color.hex);
    }

    const updateColor = (color: string) => {
        window.localStorage.setItem("backgroundColor", color);
        setBackgroundColor(color);
        changeBackgroundColor(color);
    }

    const onDefaultClick = () => {
        updateColor("#f8f8f8");
    }

    return (
        <div>
            <TwitterPicker 
                color={backgroundColor}
                onChangeComplete={handleColorChange}
            />
            <Button style={{margin: '0.5rem'}} onClick={onDefaultClick}>Retornar ao Padrão</Button>
        </div>
    );
  }