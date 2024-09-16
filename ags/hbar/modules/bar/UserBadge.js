import {icons} from "../../variables.js"

/* widget+icon=widcon get it? haha */
function widcon( route ) { 
    return Widget.Icon({ 
        class_name: "WHOAMI_PFP",
        icon: route, 
        size: 20,
    })
}

export const myIdentity = Widget.CenterBox({
    class_name: "WHOAMI",
    spacing: 10,
    start_widget: widcon(icons["user"]),
    center_widget: Widget.Label({
        justification: "center",
        label: "Ludwig@NixOS"
    }),
})
