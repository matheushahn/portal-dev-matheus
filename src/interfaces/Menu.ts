import { SideNavigationOpenState } from "@ui5/webcomponents-react";

export interface MenuProps {
    navigationState: SideNavigationOpenState;
    setNavigationState: React.Dispatch<React.SetStateAction<SideNavigationOpenState>>;
}