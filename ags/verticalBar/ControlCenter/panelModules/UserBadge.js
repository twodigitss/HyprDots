import {icons} from "../../variables.js"

/* widget+icon=widcon get it? haha */
function widcon( route ) { 
    return Widget.Icon({ 
        icon: route, 
        css: "margin: 0px 0px 0px 0px;",
        size: 25,
    })
}

/*  IN THIS LABEL, PUT YOUR NAME, I AM TOO LAZY TO
    FETCH IT BY MYSELF 
*/
export const myIdentity = Widget.CenterBox({
    class_name: "WHOAMI",
    start_widget: widcon(icons["user"]),
    center_widget: Widget.Label({
        label: "Ross Lewis"
    }),
})