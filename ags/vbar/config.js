/*normal comment to start a script file*/
import { controlPanel } from "./panel.js"
import { NotificationPopups } from "./notificationPopups.js"

import { verticalLevelBattery } from "./modules/bar/Battery.js"
import { lortabs } from "./modules/bar/Lortabs.js"
import { Dashboard } from "./modules/bar/Dashboard.js"
import { Workspaces, WorkspacesLabel } from "./modules/bar/Workspaces.js"
import { icons, comm, config } from "./variables.js"
import { Media } from "./modules/bar/Media.js"

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
    Workspaces(),
    verticalLevelBattery(),
    
]
const center = [  
    Media(),
]
const bottom = [
    lortabs(icons["time"], comm["time"]), 
    lortabs(icons["date"], comm["date"]), 
    Dashboard(),
    Widget.Separator({vertical: true}),
    
]

//MAIN BAR :>
function VerticalBar() {
    return Widget.Window({
        name: 'bar-${monitor}',
        class_name: "bar",
        monitor: 0,
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

// make sure sassc is installed on your system
const thisDir = `${config}/ags/vbar`
const scss = `${thisDir}/styles/BarStyle.scss`
const css = `${thisDir}/styles/css/bar.css`
Utils.exec(`sassc ${scss} ${css}`)

App.config({
    style: css,
    windows: [
        VerticalBar(),
        controlPanel,
        NotificationPopups(),
    ],
    gtkTheme: "ArchLabs-Dark",
    cursorTheme: "macOS-White",
    //cursorTheme: "GoogleDot-White",
})

export {}
