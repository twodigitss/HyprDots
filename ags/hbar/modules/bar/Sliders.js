const audio = await Service.import("audio")

function getVolIcon() {
    function theIconInQuestion(){
        const icons = {
            101: "overamplified", 67: "high",
            34: "medium", 1: "low", 0: "muted" }
    
        const icon = audio.speaker.is_muted ? 0 : [101, 67, 34, 1, 0].find(
            threshold => threshold <= audio.speaker.volume * 100)
        
        return `audio-volume-${icons[icon]}-symbolic`
    }
    return Widget.Icon({
        css: "margin: 10px;",
        icon: Utils.watch(theIconInQuestion(), audio.speaker, theIconInQuestion),
    })
}

export function Volslider(){ 
    const mySlider = Widget.Slider({
        draw_value: false,
        vexpand: true,
        //added this 4 lines
        vertical: true,
        inverted: true,
        heightRequest: 100,
        widthRequest: 10,
        //here goes normale
        on_change: ({ value }) => audio.speaker.volume = value,
        setup: self => self.hook(audio.speaker, () => {
            self.value = audio.speaker.volume || 0
        }),
    })
    return Widget.Box({
        /* unused class by the way */
        vertical: true,
        class_name: "VolSliderBox",
        children: [mySlider, getVolIcon()],
    })
}
/*  BINDEAR UNA VARIABLE A BRIGHTNESSCTL
        > QUE RETORNE UN VALOR CUANDO CAMBIE CON UNA SENAL

*/

/* IT DOES WORK, BUT NEED TO BE POLISHED 
TO WORK AS THE OTHER ONE. CONCLUSION: DONT USE IT */
export function briSlider(){
    const mySlider = Widget.Slider({
        draw_value: false,
        hpack: "center", 
        //added this 4 lines
        vertical: false,
        inverted: false,
        heightRequest: 10,
        widthRequest: 150,
        //here goes normale
        on_change: ({ value }) => {
            Utils.exec("brightnessctl set "+value*100+"%")
        }, /* needs setup attribute*/   
    })
    return Widget.Box({
        class_name: "volume",
        hpack: "center", 
        children: [mySlider],
    })
        
}
