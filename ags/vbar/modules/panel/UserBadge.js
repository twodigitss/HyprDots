import {icons} from "../../variables.js"

/* widget+icon=widcon get it? haha */
function widcon( route ) { 
    return Widget.Icon({ 
        class_name: "WHOAMI_PFP",
        icon: route, 
        css: "border-radius: 50%;",
        size: 25,
    })
}

const asd = Widget.Box({
    spacing: 10,
    css: "margin-left: 5px;",
    children: [
        widcon(icons["user"]),
    ]
})

export const myIdentity = Widget.CenterBox({
    class_name: "WHOAMI",
    start_widget: asd,
    center_widget: Widget.Label({
        label: "Ludwig@NixOS"
    }),
})
