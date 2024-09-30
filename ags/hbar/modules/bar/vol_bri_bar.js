const audio = await Service.import("audio")
import brightness from "../../../services/brightness.js";

export const vol = Widget.LevelBar({
    class_name: "verticalBattery",
    inverted: true,
    heightRequest: 20,
    widthRequest: 115,
    vpack: "center",
    setup: self => self.hook(audio.speaker, () => {
        self.value = audio.speaker.volume 
    }),
})


export const bri = Widget.LevelBar({
    class_name: "verticalBattery" ,
    inverted: false,
    heightRequest: 20,
    widthRequest: 115,
    vpack: "center",
    setup: self => self.hook(brightness, (self, screenValue) => {
        self.value= brightness.screenValue
    }, 'screen-changed'),
})
