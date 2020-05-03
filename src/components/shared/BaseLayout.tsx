import React, { useState } from 'react';
import { Header } from './Header';

import { FlexBox, SideNavigationOpenState } from '@ui5/webcomponents-react';
import { Menu } from './Menu';


export const BaseLayout: React.FC = props => {
  const { children } = props;

  const getDefaultNavigationState = () => {
    let expandString = window.localStorage.getItem("expandMenu");
    let expandBoolean = !expandString ? true : expandString === 'true';
    return expandBoolean ? SideNavigationOpenState.Expanded : SideNavigationOpenState.Collapsed;
  }
  const [navigationState, setNavigationState] = useState<SideNavigationOpenState>(getDefaultNavigationState());

  return (
    <section>
      <Header navigationState={navigationState} setNavigationState={setNavigationState} />

      <FlexBox>
        <Menu navigationState={navigationState} setNavigationState={setNavigationState} />
        <div style={{width: '100%'}}>{children}</div>
      </FlexBox>
    </section>
  );
};
