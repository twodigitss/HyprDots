import {icons} from "../../variables.js"

/* widget+icon=widcon get it? haha */
function widcon( route ) { 
    return Widget.Icon({ 
        icon: route, 
        css: "margin: 0px 0px 0px 0px;",
        size: 25,
    })
}

export function Dashboard() {
    return Widget.Button({
        class_name: "Dashboard_button",
        child: widcon(icons["drawer"]),
        vpack: "center",
        on_primary_click: (_, event) => {
           //thank you kon, from discord. you made my life easier
           App.toggleWindow("ControlPanelWindow")
        },
    })
}
