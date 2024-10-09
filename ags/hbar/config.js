const hyprland = await Service.import("hyprland")
import { NotificationPopups } from "./notificationPopups.js"
import { controlPanel } from "./panel.js"
//import { config } from "../variables.json" 

import { comm, config, gtk, cursor, barPos } from "./variables.js"
import { Battery } from "./modules/bar/battery.js"
import { tdNoIcon } from "./modules/bar/datetime.js"
import { Dashboard } from "./modules/bar/Dashboard.js"
import { Media } from "./modules/bar/Media.js"
import { SysTray } from "./modules/bar/SysTray.js" 
import { vol, bri } from "./modules/bar/vol_bri_bar.js"
import { WorkspacesInd } from "./modules/bar/workspaces.js"


// BASICALLY EVERY BOX FOR WIDGETS WERE THE SAME
function wibox( widget_list, position, space=10 ){
    return Widget.Box({
        hpack: position,
        spacing: space,
        children: widget_list
    })
}

function ClientTitle() {
    return Widget.Label({
        class_name: "client-title",
        label: hyprland.active.client.bind("title"),
        truncate: 'end',
        maxWidthChars: 24,
        wrap: true,
        useMarkup: true,
    })
}

// IMPORTED WIDGETS
const start  = [ 
    Widget.Separator({widthRequest: 15}),
    Media(),
    Dashboard(),
    ClientTitle(),
]
const center = [  
        //vol, bri
        //WorkspacesInd()
]
const bottom = [
    Widget.Separator({widthRequest: 0}),
    Battery(),
    tdNoIcon(comm["date"]),
    tdNoIcon(comm["time"]),
    Widget.Separator({widthRequest: 15}),
]

//MAIN BAR :>
function StatusBar() {
    return Widget.Window({
        name: 'bar-${monitor}',
        class_name: "bar",
        monitor: 0,
        //margins:[5],
        anchor: [barPos, "left", "right"],
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            start_widget: wibox( start , "start", 0 ),
            center_widget: wibox( center , "center" ),
            end_widget: wibox( bottom , "end" ),
        }),
    })
}

// make sure sassc is installed on your system
const thisDir = `${config}/ags/hbar`
const scss = `${thisDir}/styles/bar.scss`
const css = `${thisDir}/styles/css/bar.css`
Utils.exec(`sassc ${scss} ${css}`)

// CONFIGURATION
App.config({
    style: css,
    gtkTheme: gtk,
    cursorTheme: cursor,
    windows: [
        StatusBar(),
        NotificationPopups(),
        controlPanel,
    ],
})

export {}
