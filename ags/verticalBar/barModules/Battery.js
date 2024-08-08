const battery = await Service.import("battery")

export const circularBattery = Widget.CircularProgress({
    class_name: "circularBattery",
    rounded: true,
    inverted: false,
    startAt: 0.75,
    value: battery.bind('percent').as(p => p / 100),
    child: Widget.Icon({
        icon: battery.bind('icon-name'),
    }),
})

export function verticalLevelBattery() {
    const value = battery.bind("percent").as(p => p > 0 ? p / 100 : 0)
    const icon = battery.bind("percent").as(p =>
        `battery-level-${Math.floor(p / 10) * 10}-symbolic`)

    return Widget.Box({
        class_name: "BatteryBox",
        vertical: true,
        visible: battery.bind("available"),
        children: [
            Widget.LevelBar({
                class_name: "verticalBattery" ,
                inverted: true,
                vertical: true,
                widthRequest: 10,
                heightRequest: 100,
                vpack: "center",
                value,
            }),
            Widget.Icon({ 
                class_name: "verticalBatteryIcon",
                icon: icon, 
            }),
        ],
    })
}
