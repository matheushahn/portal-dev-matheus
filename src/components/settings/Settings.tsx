import React, { useState } from 'react';
import { Panel, Title, Button } from '@ui5/webcomponents-react';
import { Profile } from '../profile/Profile';
import { ModulesToggle } from './ModulesToggle';
import { BackgroundConfiguration } from './BackgroundConfiguration';
import { MenuToggle } from './MenuToggle';
import { MediaToggle } from './MediaToggle';

export const Settings: React.FC = () => {

    const onRemoveDataPress = (event: any) => {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("age");
      window.localStorage.setItem("expandModules", "true");
      window.localStorage.setItem("showMedia", "true");
      window.localStorage.setItem("expandMenu", "true");
      window.localStorage.setItem("backgroundColor", "#f8f8f8");
      window.location.reload(false);
    }

    return (
        <div style={{padding: '2rem'}}>
            <div style={{padding: '1rem', backgroundColor: 'white'}}>
                <Title>Configurações</Title>
                <Button style={{marginTop:'0.5rem'}} onClick={onRemoveDataPress}>Limpar dados</Button>
            </div>

            <Panel style={{marginTop: '1rem'}} headerText="Dados Pessoais">
                <Profile hideTitle/>
            </Panel>

            <Panel style={{marginTop: '1rem'}} headerText="Visualização do Menu">
                <MenuToggle/>
            </Panel>

            <Panel style={{marginTop: '1rem'}} headerText="Visualização dos Módulos">
                <ModulesToggle/>
            </Panel>

            <Panel style={{marginTop: '1rem'}} headerText="Visualização de Mídia">
                <MediaToggle/>
            </Panel>

            <Panel style={{marginTop: '1rem'}} headerText="Mudar cor de fundo">
                <BackgroundConfiguration/>
            </Panel>
        </div>
    );
  }