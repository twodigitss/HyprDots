import { config } from "./variables.js"
import { SysTray } from "./modules/panel/SysTray.js"
import { calendar } from "./modules/panel/Calendar.js"
import { Volslider } from "./modules/panel/Sliders.js"
import { myIdentity } from "./modules/panel/UserBadge.js"
import { SessionButtons } from "./modules/panel/Session.js"
import { Applauncher, WINDOW_NAME } from "./modules/panel/AppFinder.js"
import { pfbutton, pflabel } from "./modules/panel/pf.js"

/*  sections of the control center 
    divided by position  */
const top = Widget.Box({
    vertical:true,
    vpack: "start",
    spacing: 5,
    children: [
        myIdentity,
        SessionButtons(),
        Applauncher({ width: 100, height: 200 })        
    ]
})  

const middle = Widget.Box({
    vertical:true,
    vpack: "center",
    spacing: 0,
    children: [ ],
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
        pfbutton,
        Volslider(),
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
    margins: [10],
    name: "ControlPanelWindow",
    setup: self => {
        self.keybind("Escape", () => {
            App.closeWindow(WINDOW_NAME)
        }),
        self.keybind(["MOD1"],"D", () => {
            App.toggleWindow("WINDOW_NAME")
        })
    },
    visible: false,
    anchor: ["left", "top", "bottom"],
    keymode: "exclusive",
    child: TheBoxThatContainsAllWidgets(),
})

// CONFIGURATION
const thisDir = `${config}/ags/vbar`
const scss = `${thisDir}/styles/ControlCenter.scss`
const css = `${thisDir}/styles/css/controlcenter.css`
Utils.exec(`sassc ${scss} ${css}`)

App.config({
    style: css,
})
