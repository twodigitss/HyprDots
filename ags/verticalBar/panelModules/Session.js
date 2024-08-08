import {icons, comm} from "../variables.js"

function SButton(route,command) { 
    return Widget.Button({
        class_name: "session_button",
        child: Widget.Icon({ 
            icon: route, 
            css: "margin: 0px;",
            size: 23,
        }),
        on_primary_click: (_, event) => {
            Utils.exec(command)
        },
    })
}

export function SessionButtons(){
    return Widget.Box({
        vertical: false,
        homogeneous: true,
        spacing: 0,
        children: [
            SButton(icons["exit"], comm["killhypr"]),
            SButton(icons["reboot"], comm["reboot"]),
            SButton(icons["suspend"], comm["suspend"]),
            SButton(icons["turnoff"], comm["turnoff"]),
            
        ]
    })
}
