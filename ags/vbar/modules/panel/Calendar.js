export const calendar = Widget.Calendar({
    class_name: "Calendar",
    showDayNames: true,
    showDetails: false,
    showHeading: true,
    showWeekNumbers: false,
    detail: (self, y, m, d) => {
        return `<span color="white">${y}. ${m}. ${d}.</span>`
    },
    onDaySelected: ({ date: [y, m, d] }) => {
        print(`${y}. ${m}. ${d}.`)
    },
})