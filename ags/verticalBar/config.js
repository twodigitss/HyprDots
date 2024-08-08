/*normal comment to start a file */
import { controlPanel } from "./controlPanel.js"
import { NotificationPopups } from "./notificationPopups.js"

import { verticalLevelBattery } from "./barModules/Battery.js"
import { lortabs } from "./barModules/Lortabs.js"
import { Dashboard } from "./barModules/Dashboard.js"
import { Workspaces } from "./barModules/Workspaces.js"
import { icons, comm } from "./variables.js"

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
    Dashboard(),
    Workspaces(),
]
const center = [ 
    verticalLevelBattery(),
]
const bottom = [
    lortabs(icons["time"], comm["time"]), 
    lortabs(icons["date"], comm["date"]), 
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
            start_widget: wibox( start , "start", 3 ),
            center_widget: wibox( center , "center" ),
            end_widget: wibox( bottom , "end" ),
        }),
    })
}
// CONFIGURATION
App.config({
    style: "./styles/verticalBar.scss",
    windows: [
        VerticalBar(),
        controlPanel,
        NotificationPopups(),
    ],
    gtkTheme: "ArchLabs-Dark",
    cursorTheme: "DMZBlackLH",
})

export {}
