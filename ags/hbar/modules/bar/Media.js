import { icons } from "../../variables.js"
const mpris = await Service.import("mpris")

const play = Widget.Button({
    class_name: "MediaButton",
    on_primary_click: () => {
        mpris.getPlayer("")?.playPause();
    },
    child: Widget.Icon({
        icon: icons["play"],
        size: 15,
    })
})

const next = Widget.Button({
    class_name: "MediaButton",
    on_primary_click: () => {
        mpris.getPlayer("")?.next();
    },
    child: Widget.Icon({
        icon: icons["next"],
        size: 15,
    })
})

const prev = Widget.Button({
    class_name: "MediaButton",
    on_primary_click: () => {
        mpris.getPlayer("")?.previous()
    },
    child: Widget.Icon({
        icon: icons["prev"],
        size: 15,
    })
})

export function Media() {
    const label = Utils.watch("", mpris, "player-changed", () => {
        if (mpris.players[0]) {
            const { track_cover_url, track_artists, track_title } = mpris.players[0]
            return `${track_artists.join(", ")} - ${track_title}`
        } else {
            return "Nothing is playing"
        }
    })

    return Widget.Box({
        class_name: "Media",
        vpack:"center",
        homogeneous: true,
        spacing: 5,
        children: [prev, play, next],
        //Widget.Label({ label }),
    })
}
