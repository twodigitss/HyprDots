const systemtray = await Service.import("systemtray")

export function SysTray({ vert=false, orient="center" }) {
    const items = systemtray.bind("items")
        .as(items => items.map(
            item => Widget.Button({
                child: Widget.Icon({ icon: item.bind("icon") }),
                on_primary_click: (_, event) => item.openMenu(event),
                on_secondary_click: (_, event) => item.activate(event),
                tooltip_markup: item.bind("tooltip_markup"),
            })
        ))

    return Widget.Box({
        class_name: "laweatray",
        vpack: orient,
        vexpand: true,
        vertical: vert,
        heightRequest: 235,
        children: items,
    })
}


