const systemtray = await Service.import("systemtray")

export function SysTray({ verticality=false, orientation="center" }) {
    const items = systemtray.bind("items")
        .as(items => items.map(item => Widget.Button({
            child: Widget.Icon({ icon: item.bind("icon") }),
            on_primary_click: (_, event) => item.activate(event),
            on_secondary_click: (_, event) => item.openMenu(event),
            tooltip_markup: item.bind("tooltip_markup"),
        })))

    return Widget.Box({
        class_name: "laweatray",
        vpack: "center",
        hpack: orientation,
        vertical: verticality,
        children: items,
    })
}


