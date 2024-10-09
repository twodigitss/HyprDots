import { config, barPos } from "./variables.js"
import { SessionButtons } from "./modules/panel/Session.js"
import { Applauncher, entry } from "./modules/panel/AppFinder.js"
import { calendar } from "./modules/panel/Calendar.js"
import { Volslider } from "./modules/bar/Sliders.js"
import { Workspaces } from "./modules/bar/workspaces.js" 
import { myIdentity } from "./modules/bar/UserBadge.js"
//import { pfbutton } from "./modules/panel/powerProfile.js"
import { vol, bri } from "./modules/bar/vol_bri_bar.js"
import { SysTray } from "./modules/bar/SysTray.js" 

//import { Volslider } from "./modules/panel/Sliders.js"
//import { myIdentity } from "./modules/panel/UserBadge.js"
//import { Media } from "./panelModules/Media.js"

/*  sections of the control center 
    divided by position  */
const topp = Widget.Box({
    vertical: false,
    vpack: "start",
    spacing: 10,
    children: [
        //vol,
        myIdentity,
        entry,
    ]
})  

const middle = Widget.Box({
    vertical: true,
    vpack: "center",
    spacing: 10,
    children: [
        Applauncher({ width: 150, height: 135 }),
    ],
})

const midtop = Widget.Box({
    vertical: true,
    vpack: "center",
    spacing: 10,
    children: [
        topp,
        middle
    ],
})

const bottom = Widget.Box({
    spacing: 10,
    hpack:"start",
    vertical: false,
    children: [
        SessionButtons(),
        SysTray({vert: true}),
        midtop,
    ],
        
})

function TheBoxThatContainsAllWidgets(){
    return Widget.CenterBox({
        vertical: true,
        spacing: 10,
        css: `margin: 15px;`,
        start_widget: bottom,
        //center_widget: 
        //end_widget: bottom,

    })
}

// there needs to be only one instance
export const controlPanel = Widget.Window({
    anchor: [ "left", barPos],
    class_name: "controlPanel",
    name: "panelWindow",
    visible: false,
    margins: [5,5,5,5],
    keymode: "exclusive",
    child: TheBoxThatContainsAllWidgets(),
    setup: self => {
        self.keybind("Escape", () => {
            App.closeWindow("panelWindow")
        }),
        self.keybind("MOD4", () => {
            App.toggleWindow("panelWindow")
        })
    },
})

// CONFIGURATION
const thisDir = `${config}/ags/hbar`
const scss = `${thisDir}/styles/panel.scss`
const css = `${thisDir}/styles/css/controlcenter.css`
Utils.exec(`sassc ${scss} ${css}`)

App.config({
    style: css,
})
