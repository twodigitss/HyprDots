const { query } = await Service.import("applications")
export const WINDOW_NAME = "panelWindow"

/** @param {import('resource:///com/github/Aylur/ags/service/applications.js').Application} app */
const AppItem = app => Widget.Button({
    attribute: { app },
    child: Widget.Box({
        children: [
            Widget.Icon({
                icon: app.icon_name || " ",
                size: 15,
            }),
            Widget.Label({
                class_name: "AppLauncherApptitle",
                label: "   " + app.name,
                xalign: 0,
                vpack: "center",
                truncate: "end",
            }),
        ],
    }),
    on_clicked: () => {
        App.closeWindow(WINDOW_NAME)
        app.launch()
    },
})

// list of application buttons
let applications = query("").map(AppItem)

// container holding the buttons
const list = Widget.Box({
    vertical: true, children: applications, spacing: 5,
})

// repopulate the box, so the most frequent apps are on top of the list
function repopulate() {
    applications = query("").map(AppItem)
    list.children = applications
}

// search entry
export const entry = Widget.Entry({
    class_name: "AppLauncherTypeInBox",
    hexpand: true,
    //css: `margin-bottom: 5px;`,

    // to launch the first item on Enter
    on_accept: () => {
        // make sure we only consider visible (searched for) applications
    const results = applications.filter((item) => item.visible);
        if (results[0]) {
            App.toggleWindow(WINDOW_NAME)
            results[0].attribute.app.launch()
        }
    },

    // filter out the list
    on_change: ({ text }) => applications.forEach(item => {
        item.visible = item.attribute.app.match(text ?? "")
    }),
})

/* RETURNS ENTRY+SCROLLABLE BOX ONLY, NOT WINDOW */
/* USE IT AS: Applauncher({ width: 200, height: 250 }) */ 
export const Applauncher = ({ width = 200, height = 250}) => {
    /*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */
    return Widget.Box({
        class_name: "appLauncher",
        vertical:true,
        children: [
            /* this is the entry+scrollable box */
            Widget.Box({
                vertical: true,
                spacing: 5,
                children: [
                    //entry,
                    Widget.Scrollable({
                        visible: false,
                        hscroll: "never",
                        css: `min-width: ${width}px;`
                        + `min-height: ${height}px;`,
                        child: list,
                    }),
                    
                ]
            })
        ],

        setup: self => self.hook(App, (_, windowName, visible) => {
               if (windowName !== WINDOW_NAME)
                return

            // when the applauncher shows up
            if (visible) {
                repopulate()
                entry.text = ""
                entry.grab_focus()
            }
        }),
    })
}
