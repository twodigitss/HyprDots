export function lortabs( myIcon, myLabel ){
    return Widget.Box({
        vertical: true,
        spacing: 0,
        children:[
            Widget.Icon({
                class_name:"tabIcon" ,
                icon: myIcon,
                size: 20,
            }),
            Widget.Label({
                justification: "center",
                class_name: "tabLabel",
                heightRequest: 20,
                widthRequest: 25,
                label: myLabel.bind()
            })
        ]
    })

}


