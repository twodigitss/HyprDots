import {icons} from "../../variables.js"
import { WorkspacesLabel } from "./workspaces.js"

export function Dashboard() {
    return Widget.Button({
        class_name: "Dashboard_button",
        child: WorkspacesLabel(),
        /*Widget.Icon({ 
            icon: icons["drawer2"], 
            css: "margin: 0px 0px 0px 0px;",
            size: 22,
        }),*/
        vpack: "center",
        hpack: "center",
        on_primary_click: (_, event) => {
           //thank you kon, from discord. you made my life easier
           App.toggleWindow("panelWindow")
        },
    })
}
