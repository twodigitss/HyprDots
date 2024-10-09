//Some constants and variables across the config files
export const config = "/home/ludwig/.config"
export const barPos = "bottom"
export const gtk = "ArchLabs-Dark"
export const cursor = "macOS-Monterey-White"
//cursorTheme: "macOS-Monterey-White",
//cursorTheme: "GoogleDot-White",

export const icons = {
    "user":    config + "/ags/Assets/profile.jpg",
    "play":    config + "/ags/Assets/icons/play.png",
    "next":    config + "/ags/Assets/icons/next.png",
    "prev":    config + "/ags/Assets/icons/prev.png",
    "exit":    config + "/ags/Assets/icons/Exit.png",
    "suspend": config + "/ags/Assets/icons/sleep.png",
    "time":    config + "/ags/Assets/icons/clock.png",
    "reboot":  config + "/ags/Assets/icons/reboot.png",
    "date":    config + "/ags/Assets/icons/calendar.png", 
    "drawer":  config + "/ags/Assets/icons/app-menu.png",
    "drawer2":  config + "/ags/Assets/icons/app-menu-bkp.png",
    "turnoff": config + "/ags/Assets/icons/poweroff.png",
};

export const comm = {
    "reboot": "systemctl reboot",
    "suspend": "systemctl suspend",
    "turnoff": "systemctl poweroff",
    "killhypr": "hyprctl dispatch exit",
    "time": Variable("", { poll: [1000,'date "+%H:%M"'] }),
    "date": Variable("", { poll: [1000,'date "+%a %d %b "'] }),
    "dt": Variable("", { poll: [1000,'date "+%b %d  %H:%M"'] }),
}
