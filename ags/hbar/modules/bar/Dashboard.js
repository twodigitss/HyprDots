import {icons} from "../../variables.js"
import { WorkspacesLabel, WorkspacesInd } from "./workspaces.js"

export function Dashboard() {
    return Widget.Button({
        class_name: "Dashboard_button",
        child: WorkspacesLabel(),
        vpack: "center",
        on_primary_click: (_, event) => {
           //thank you kon, from discord. you made my life easier
           App.toggleWindow("panelWindow")
        },
    })
}
