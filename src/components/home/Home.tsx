import React, { useState } from 'react';
import { Button, ButtonDesign, Title, FlexBox, FlexBoxAlignItems, Panel, Card } from '@ui5/webcomponents-react';
import { Courses } from '../courses/Courses';
import { Profile } from '../profile/Profile';

export const Home: React.FC = () => {
    const getNameFromLocalStorage = () : string | undefined => {
      const name = window.localStorage.getItem("name");
      return name ? name : undefined;
    }
    const [name, setName] = useState(getNameFromLocalStorage());

    const onRemoveDataPress = (event: any) => {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("age");
      setName(undefined);
    }

    const onProfileChange = () => {
      setName(getNameFromLocalStorage());
    }

    return (
      name ?
      <div style={{margin: '2rem', backgroundColor: 'white'}}>
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <Title style={{padding: '1rem'}}>Olá {name}!</Title>
          <Button design={ButtonDesign.Negative} onClick={onRemoveDataPress}>Não sou eu</Button>
        </FlexBox>
        <Courses/>
      </div>
      : <Profile onProfileChange={onProfileChange}/>
    );
  }