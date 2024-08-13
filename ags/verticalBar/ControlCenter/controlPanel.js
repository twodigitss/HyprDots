import { SysTray } from "./panelModules/SysTray.js"
import { calendar } from "./panelModules/Calendar.js"
import { Volslider } from "./panelModules/Sliders.js"
import { myIdentity } from "./panelModules/UserBadge.js"
import { SessionButtons } from "./panelModules/Session.js"
import { Applauncher, WINDOW_NAME } from "./panelModules/AppFinder.js"
//import { Media } from "./panelModules/Media.js"

/*  sections of the control center 
    divided by position  */
const top = Widget.Box({
    vertical:true,
    vpack: "start",
    spacing: 5,
    children: [
        //Widget.Separator({ vertical: false }),
        myIdentity,
        SessionButtons(),
        Applauncher({ width: 200, height: 150 })        
    ]
})  

const middle = Widget.Box({
    vertical:true,
    vpack: "center",
    spacing: 0,
    children: [],
})

const bottom = Widget.Box({
    vertical:true,
    vpack: "end",
    spacing: 10,
    children: [
        SysTray({
            verticality: false, 
            orientation: "center"
        }),   
        Volslider(),
        //Media(),
        calendar,
    ],
        
})

function TheBoxThatContainsAllWidgets(){
    return Widget.CenterBox({
        vertical:true,
        css: `margin: 20px;`,
        start_widget: top,
        center_widget: middle,
        end_widget: bottom,

    })
}


// there needs to be only one instance
export const controlPanel = Widget.Window({
    class_name: "controlPanel",
    name: "ControlPanelWindow",
    setup: self => {
        self.keybind("Escape", () => {
            App.closeWindow(WINDOW_NAME)
        }),
        self.keybind("MOD1", () => {
            App.toggleWindow("ControlPanelWindow")
        })
    },
    visible: false,
    anchor: ["left", "top", "bottom"],
    keymode: "exclusive",
    child: TheBoxThatContainsAllWidgets(),
})

// CONFIGURATION
App.config({
    style: "./styles/ControlCenter.scss",
})