import {icons, comm} from "../../variables.js"

function SButton(route,command) { 
    return Widget.Button({
        class_name: "sessionButton",
        child: Widget.Icon({ 
            icon: route, 
            size: 18,
        }),
        on_primary_click: (_, event) => {
            Utils.exec(command)
        },
    })
}

export function SessionButtons(){
    return Widget.Box({
        class_name: "sessionBox",
        vertical: false,
        homogeneous: true,
        spacing: 0,
        children: [
            SButton(icons["turnoff"], comm["turnoff"]),
            SButton(icons["suspend"], comm["suspend"]),
            SButton(icons["reboot"], comm["reboot"]),
            SButton(icons["exit"], comm["killhypr"]),
            
        ]
    })
}
