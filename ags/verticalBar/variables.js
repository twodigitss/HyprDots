const config = "/home/lewis/.config"
export const icons = {
    "user":    config + "/ags/Assets/profile.jpg",
    "exit":    config + "/ags/Assets/icons/Exit.png",
    "cancell": config + "/ags/Assets/icons/quit.png",
    "suspend": config + "/ags/Assets/icons/sleep.png",
    "time":    config + "/ags/Assets/icons/clock.png",
    "reboot":  config + "/ags/Assets/icons/reboot.png",
    "date":    config + "/ags/Assets/icons/calendar.png", 
    "drawer":  config + "/ags/Assets/icons/app-menu.png",
    "turnoff": config + "/ags/Assets/icons/poweroff.png",
    "worksp":  config + "/ags/Assets/icons/workspace.png",
    "play":    config + "/ags/Assets/icons/play.png",
    "next":    config + "/ags/Assets/icons/next.png",
    "prev":    config + "/ags/Assets/icons/prev.png",
};

export const comm = {
    "reboot": "systemctl reboot",
    "suspend": "systemctl suspend",
    "turnoff": "systemctl poweroff",
    "killhypr": "hyprctl dispatch exit",
    "time": Variable("", { poll: [1000, 'date "+%H\n%M"'] }),
    "date": Variable("", { poll: [1000, 'date "+%b\n%d\n%y"'] }),
}
