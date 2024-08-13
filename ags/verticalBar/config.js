/*normal comment to start a script file*/
import { controlPanel } from "./ControlCenter/controlPanel.js"
import { NotificationPopups } from "./notificationPopups.js"

import { verticalLevelBattery } from "./barModules/Battery.js"
import { lortabs } from "./barModules/Lortabs.js"
import { Dashboard } from "./barModules/Dashboard.js"
import { Workspaces, WorkspacesLabel } from "./barModules/Workspaces.js"
import { icons, comm } from "./variables.js"
import { Media } from "./barModules/Media.js"

// BASICALLY EVERY BOX FOR WIDGETS WERE THE SAME
function wibox( widget_list, position, space=10 ){
    return Widget.Box({
        vertical: true, 
        vpack: position,
        spacing: space,
        children: widget_list
    })
}

// IMPORTED WIDGETS
const start  = [ 
    Widget.Separator({vertical: true}),
    //WorkspacesLabel(),
    Workspaces(),
    verticalLevelBattery(),
    
]
const center = [   
    //Volslider(),
    //Media(),
]
const bottom = [
    lortabs(icons["time"], comm["time"]), 
    lortabs(icons["date"], comm["date"]), 
    Dashboard(),
    Widget.Separator({vertical: true}),
    
]

//MAIN BAR :>
function VerticalBar(monitor = 0) {
    return Widget.Window({
        name: 'bar-${monitor}',
        class_name: "bar",
        monitor,
        anchor: ["left", "top", "bottom"],
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            vertical: true,
            start_widget: wibox( start , "start", 5),
            center_widget: wibox( center , "center" ),
            end_widget: wibox( bottom , "end" ),
        }),
    })
}
// CONFIGURATION
App.config({
    style: "./styles/BarStyle.scss",
    windows: [
        VerticalBar(),
        controlPanel,
        NotificationPopups(),
    ],
    gtkTheme: "ArchLabs-Dark",
    cursorTheme: "GoogleDot-White",
})

export {}
