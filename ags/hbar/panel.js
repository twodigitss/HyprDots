import { config } from "./variables.js"
import { SessionButtons } from "./modules/panel/Session.js"
import { Applauncher } from "./modules/panel/AppFinder.js"
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
    vertical:true,
    vpack: "start",
    spacing: 10,
    children: [
        //vol,
        myIdentity,
        Applauncher({ width: 100, height: 135 }),
    ]
})  

const middle = Widget.Box({
    vertical:false,
    vpack: "center",
    spacing: 10,
    children: [
        SysTray({vert: true}),
    ],
})

const bottom = Widget.Box({
    spacing: 10,
    hpack:"start",
    vertical: true,
    children: [
        //bri,
        Workspaces(),
        SessionButtons(),
        calendar,
        //pfbutton,
    ],
        
})

const asd = Widget.Box({
    vertical: false,
    vpack: "center",
    spacing: 10,
        children:[topp, bottom],
})

function TheBoxThatContainsAllWidgets(){
    return Widget.CenterBox({
        vertical: false,
        spacing: 10,
        css: `margin: 15px;`,
        start_widget: asd,
        center_widget: middle,
        //end_widget: bottom,

    })
}

// there needs to be only one instance
export const controlPanel = Widget.Window({
    class_name: "controlPanel",
    margins:[5,5,5,5],
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
    anchor: [ "left", "bottom"],
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
