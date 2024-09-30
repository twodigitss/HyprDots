export function lortabs( myIcon, myLabel ){
    return Widget.Box({
        vertical: true,
        spacing: 0,
        vpack: "center",
        children:[
            Widget.Label({
                justification: "center",
                class_name: "tabLabel",
                //heightRequest: 20,
                //widthRequest: 20,
                label: myLabel.bind()
            }),
            Widget.Icon({
                class_name:"tabIcon" ,
                icon: myIcon,
                size: 19,
            }),
        ]
    })

}


export function lortabsNoIcon( myLabel ){
    return Widget.Box({
        vertical: true,
        spacing: 0,
        vpack: "center",
        children:[
            Widget.Label({
                justification: "center",
                class_name: "tabLabel",
                label: myLabel.bind()
            }),
        ]
    })

}
