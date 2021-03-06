import React, { useRef } from 'react';
import { ShellBar, ShellBarItem, Button, SideNavigationOpenState } from '@ui5/webcomponents-react';
import { useHistory } from "react-router-dom";

import '@ui5/webcomponents-icons/dist/icons/user-settings';
import '@ui5/webcomponents-icons/dist/icons/menu2';
import { useShadowRootMount } from '../../hooks/useShadowRootMount';
import { MenuProps } from '../../interfaces/Menu';


export const Header: React.FC<MenuProps> = (props: MenuProps) => {
  const history = useHistory();
  const headerRef = useRef<HTMLElement>(null);

  useShadowRootMount(headerRef, shadowRoot => {
    const headerContent = shadowRoot.firstElementChild as HTMLElement;
    if (headerContent) {
      headerContent.style.paddingLeft = '0.5rem';
      headerContent.style.paddingRight = '2rem';
    }
  });

  const onLogoClick = (event: any) => {
    history.push("/");
  }

  const handleSettingsItemClick = () => {
    history.push("/settings");
  }

  const onMenuPress = () => {
    const state = props.navigationState === SideNavigationOpenState.Expanded ? SideNavigationOpenState.Collapsed : SideNavigationOpenState.Expanded;
    const expandMenu: Boolean = state === SideNavigationOpenState.Expanded;
    window.localStorage.setItem("expandMenu", expandMenu.toString());
    props.setNavigationState(state);
  }

  return (
    <ShellBar
      data-testid="shellbar"
      primary-title="Portal"
      ref={headerRef}
      onLogoClick={onLogoClick}
      startButton={
        <Button
          icon="menu2"
          onClick={onMenuPress}
        />
      }
      logo="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2MCA1OCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA2MCA1OCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzAgMjZjLS4xNDYgMC0uMjkxLS4wMzItLjQyNi0uMDk1bC0xNy04Yy0uMzUtLjE2NS0uNTc0LS41MTgtLjU3NC0uOTA1cy4yMjQtLjc0LjU3NC0uOTA1bDE3LThjLjI3LS4xMjcuNTgyLS4xMjcuODUyIDBsMTcgOGMuMzUuMTY1LjU3NC41MTguNTc0LjkwNXMtLjIyNC43NC0uNTc0LjkwNWwtMTcgOGMtLjEzNS4wNjMtLjI4LjA5NS0uNDI2LjA5NXptLTE0LjY1MS05IDE0LjY1MSA2Ljg5NSAxNC42NTEtNi44OTUtMTQuNjUxLTYuODk1eiIvPjxwYXRoIGQ9Im0zMCAzNGMtLjE1MyAwLS4zMDctLjAzNS0uNDQ3LS4xMDVsLTEyLTZjLS4zMzktLjE3LS41NTMtLjUxNi0uNTUzLS44OTV2LTcuNjQ3YzAtLjM0Mi4xNzUtLjY2MS40NjQtLjg0NC4yODktLjE4NC42NTItLjIwNS45NjEtLjA2MWwxMS41NzUgNS40NDcgMTEuNTc0LTUuNDQ3Yy4zMS0uMTQ1LjY3My0uMTIzLjk2MS4wNjEuMjkuMTgzLjQ2NS41MDIuNDY1Ljg0NHY3LjY0N2MwIC4zNzktLjIxNC43MjUtLjU1My44OTVsLTEyIDZjLS4xNC4wNy0uMjk0LjEwNS0uNDQ3LjEwNXptLTExLTcuNjE4IDExIDUuNSAxMS01LjV2LTUuNDUzbC0xMC41NzQgNC45NzZjLS4yNy4xMjctLjU4Mi4xMjctLjg1MiAwbC0xMC41NzQtNC45NzZ6Ii8+PHBhdGggZD0ibTQ3IDE4aC0xN2MtLjU1MiAwLTEtLjQ0OC0xLTFzLjQ0OC0xIDEtMWgxN2MuNTUyIDAgMSAuNDQ4IDEgMXMtLjQ0OCAxLTEgMXoiLz48cGF0aCBkPSJtNDcgMjdjLS41NTIgMC0xLS40NDgtMS0xdi05YzAtLjU1Mi40NDgtMSAxLTFzMSAuNDQ4IDEgMXY5YzAgLjU1Mi0uNDQ4IDEtMSAxeiIvPjxwYXRoIGQ9Im0zMCAyMGMtLjU1MiAwLTEtLjQ0OC0xLTF2LTRjMC0uNTUyLjQ0OC0xIDEtMXMxIC40NDggMSAxdjRjMCAuNTUyLS40NDggMS0xIDF6Ii8+PHBhdGggZD0ibTQ0Ljk5OSAzMGMtLjE5IDAtLjM4My0uMDU0LS41NTQtLjE2OC0uNDU5LS4zMDYtLjU4My0uOTI3LS4yNzctMS4zODdsMi0zYy4zMDYtLjQ2LjkyNi0uNTg1IDEuMzg3LS4yNzcuNDU5LjMwNi41ODMuOTI3LjI3NyAxLjM4N2wtMiAzYy0uMTkzLjI4OS0uNTEuNDQ1LS44MzMuNDQ1eiIvPjxwYXRoIGQ9Im00OS4wMDEgMzBjLS4zMjMgMC0uNjQtLjE1Ni0uODMzLS40NDVsLTItM2MtLjMwNi0uNDU5LS4xODItMS4wODEuMjc3LTEuMzg3LjQ1OS0uMzA4IDEuMDgtLjE4MyAxLjM4Ny4yNzdsMiAzYy4zMDYuNDU5LjE4MiAxLjA4MS0uMjc3IDEuMzg3LS4xNzEuMTE0LS4zNjQuMTY4LS41NTQuMTY4eiIvPjxwYXRoIGQ9Im0zMCAyOWMtLjU1MiAwLTEtLjQ0OC0xLTF2LTNjMC0uNTUyLjQ0OC0xIDEtMXMxIC40NDggMSAxdjNjMCAuNTUyLS40NDggMS0xIDF6Ii8+PHBhdGggZD0ibTU5IDM4aC01OGMtLjU1MiAwLTEtLjQ0OC0xLTF2LTMyLjk5OWMwLTIuMjA2IDEuNzk1LTQuMDAxIDQuMDAxLTQuMDAxaDUxLjk5OGMyLjIwNiAwIDQuMDAxIDEuNzk1IDQuMDAxIDQuMDAxdjMyLjk5OWMwIC41NTItLjQ0OCAxLTEgMXptLTU3LTJoNTZ2LTMxLjk5OWMwLTEuMTA0LS44OTctMi4wMDEtMi4wMDEtMi4wMDFoLTUxLjk5OGMtMS4xMDQgMC0yLjAwMS44OTctMi4wMDEgMi4wMDF6Ii8+PHBhdGggZD0ibTU1Ljk5OSA0NmgtNTEuOTk4Yy0yLjIwNiAwLTQuMDAxLTEuNzk1LTQuMDAxLTQuMDAxdi00Ljk5OWMwLS41NTIuNDQ4LTEgMS0xaDU4Yy41NTIgMCAxIC40NDggMSAxdjQuOTk5YzAgMi4yMDYtMS43OTUgNC4wMDEtNC4wMDEgNC4wMDF6bS01My45OTktOHYzLjk5OWMwIDEuMTA0Ljg5NyAyLjAwMSAyLjAwMSAyLjAwMWg1MS45OThjMS4xMDQgMCAyLjAwMS0uODk3IDIuMDAxLTIuMDAxdi0zLjk5OXoiLz48cGF0aCBkPSJtMzMgNDJoLTZjLS41NTIgMC0xLS40NDgtMS0xcy40NDgtMSAxLTFoNmMuNTUyIDAgMSAuNDQ4IDEgMXMtLjQ0OCAxLTEgMXoiLz48cGF0aCBkPSJtNTUgMzhoLTUwYy0uNTUyIDAtMS0uNDQ4LTEtMXYtMzJjMC0uNTUyLjQ0OC0xIDEtMWg1MGMuNTUyIDAgMSAuNDQ4IDEgMXYzMmMwIC41NTItLjQ0OCAxLTEgMXptLTQ5LTJoNDh2LTMwaC00OHoiLz48cGF0aCBkPSJtNDMgNThoLTI2Yy0xLjY1NCAwLTMtMS4zNDYtMy0zczEuMzQ2LTMgMy0zaDI2YzEuNjU0IDAgMyAxLjM0NiAzIDNzLTEuMzQ2IDMtMyAzem0tMjYtNGMtLjU1MSAwLTEgLjQ0OS0xIDFzLjQ0OSAxIDEgMWgyNmMuNTUxIDAgMS0uNDQ5IDEtMXMtLjQ0OS0xLTEtMXoiLz48cGF0aCBkPSJtNDEgNTRoLTIyYy0uNTUyIDAtMS0uNDQ4LTEtMXMuNDQ4LTEgMS0xYzMuMzE4IDAgNS0yLjM1NSA1LTcgMC0uNTUyLjQ0OC0xIDEtMWgxMGMuNTUyIDAgMSAuNDQ4IDEgMSAwIDQuNjQ1IDEuNjgyIDcgNSA3IC41NTIgMCAxIC40NDggMSAxcy0uNDQ4IDEtMSAxem0tMTcuMTI5LTJoMTIuMjU5Yy0xLjIzMi0xLjM2NC0xLjk1Ny0zLjM5NS0yLjEwMi02aC04LjA1NWMtLjE0NiAyLjYwNS0uODcgNC42MzYtMi4xMDIgNnoiLz48L3N2Zz4="
    >
      <ShellBarItem
        icon="user-settings"
        onItemClick={handleSettingsItemClick}
      />
    </ShellBar>
  );
};
