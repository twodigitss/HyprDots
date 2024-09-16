export function td( myIcon, myLabel ){
    return Widget.Box({
        spacing: 0,
        vpack: "center",
        hpack: "center",
        children:[
            Widget.Label({
                justification: "center",
                class_name: "tabLabel",
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


export function tdNoIcon( myLabel ){
    return Widget.Box({
        spacing: 0,
        vpack: "center",
        hpack: "center",
        children:[
            Widget.Label({
                justification: "center",
                class_name: "tabLabel",
                label: myLabel.bind()
            }),
        ]
    })

}
