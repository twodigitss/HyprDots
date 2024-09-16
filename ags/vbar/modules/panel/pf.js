const powerProfiles = await Service.import('powerprofiles')

export const pflabel = Widget.Label({
    label: powerProfiles.bind('active_profile'),
})

export const pfbutton = Widget.Button({
    child: pflabel.bind(),
    on_clicked: () => {
        switch (powerProfiles.active_profile) {
            case 'balanced':
                powerProfiles.active_profile = 'performance';
                break;
            default:
                powerProfiles.active_profile = 'balanced';
                break;
        };
    },
})
