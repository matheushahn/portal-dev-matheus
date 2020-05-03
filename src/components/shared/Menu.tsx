import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "@ui5/webcomponents-icons/dist/icons/user-settings";
import { SideNavigation } from "@ui5/webcomponents-react/lib/SideNavigation";
import { SideNavigationListItem, SideNavigationOpenState } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/icons/home";
import "@ui5/webcomponents-icons/dist/icons/user-settings";
import "@ui5/webcomponents-icons/dist/icons/person-placeholder";
import { MenuProps } from "../../interfaces/Menu";

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const history = useHistory();

  const onHomeClick = () => {
    history.push("/");
  };

  const onSettingsClick = () => {
    history.push("/settings");
  };

  const onProfileClick = () => {
    history.push("/profile");
  };

  const onItemClick = (event: any) => {
    switch (event.detail.selectedId) {
      case "home":
        onHomeClick();
        break;
      case "settings":
        onSettingsClick();
        break;
      case "profile":
        onProfileClick();
        break;
      default:
        break;
    }

    setTimeout( () => {
      event.target.deselectSelectedItems();
    }, 0);
    
  };

  window.addEventListener("menu-change", (event: any) => {
    const expandMenu = window.localStorage.getItem("expandMenu");
    props.setNavigationState(expandMenu === "true" ? SideNavigationOpenState.Expanded : SideNavigationOpenState.Collapsed);
  });

  return (
    <SideNavigation
      openState={props.navigationState}
      onItemClick={onItemClick}
      style={{ height: "auto", minHeight: "95vh" }}
      noIcons={false}
    >
      <SideNavigationListItem text="Início" icon="home" id="home" />
      <SideNavigationListItem text="Configuração" icon="user-settings" id="settings"/>
      <SideNavigationListItem text="Perfil" icon="person-placeholder" id="profile"/>
    </SideNavigation>
  );
};
