import { config } from "./variables.js"
import { SessionButtons } from "./modules/panel/Session.js"
import { Applauncher } from "./modules/panel/AppFinder.js"
import { calendar } from "./modules/panel/Calendar.js"
import { SysTray } from "./modules/bar/SysTray.js" 
import { Volslider } from "./modules/bar/Sliders.js"
import { Workspaces } from "./modules/bar/workspaces.js" 
import { myIdentity } from "./modules/bar/UserBadge.js"
//import { pfbutton } from "./modules/panel/powerProfile.js"

//import { Volslider } from "./modules/panel/Sliders.js"
//import { myIdentity } from "./modules/panel/UserBadge.js"
//import { Media } from "./panelModules/Media.js"

/*  sections of the control center 
    divided by position  */
const topp = Widget.Box({
    vertical:true,
    vpack: "start",
    spacing: 10,
    children: [
        myIdentity,
        Workspaces(),
        Applauncher({ width: 150, height: 200 }),
    ]
})  

const middle = Widget.Box({
    vertical:true,
    vpack: "center",
    spacing: 10,
    children: [
        /*SysTray({
            verticality: false, 
            orientation: "center"
        }),*/
    ],
})

const bottom = Widget.Box({
    spacing: 10,
    vpack:"end",
    vertical: true,
    children: [
        //pfbutton,
        calendar,
        SessionButtons(),
    ],
        
})

function TheBoxThatContainsAllWidgets(){
    return Widget.CenterBox({
        vertical: true,
        css: `margin: 15px;`,
        start_widget: topp,
        center_widget: middle,
        end_widget: bottom,

    })
}

// there needs to be only one instance
export const controlPanel = Widget.Window({
    class_name: "controlPanel",
    margins:[5],
    name: "panelWindow",
    setup: self => {
        self.keybind("Escape", () => {
            App.closeWindow("panelWindow")
        }),
        self.keybind("MOD4", () => {
            App.toggleWindow("panelWindow")
        })
    },
    visible: false,
    anchor: [ "left", "top", "bottom"],
    keymode: "exclusive",
    child: TheBoxThatContainsAllWidgets(),
})

// CONFIGURATION
const thisDir = `${config}/ags/hbar`
const scss = `${thisDir}/styles/panel.scss`
const css = `${thisDir}/styles/css/controlcenter.css`
Utils.exec(`sassc ${scss} ${css}`)

App.config({
    style: css,
})
