const hyprland = await Service.import("hyprland")

/*I REMBER USING THIS FUNCTION FROM THE DOTFILES OF A GUY WHO
ALSO HAD A VERTICAL BAR, THANK YOU, I WISH I COULD REMEMBER YOUR USER NAME ):
*/

export function WorkspacesLabel() {
  return Widget.Label({
    class_name: 'workspaceLB',
    vpack: "center",
    hpack: "center",
    setup: self => {
      self.hook(
        hyprland, () => {
          let wsid = hyprland.active.workspace.name
          self.label = `Workspace ${wsid}`
        }
      );
    }
  });
}

export function Workspaces(){
  //const workspaces = ["一", "二", "三", "四"];
  const workspaces = ["1","2","3","4"];
  return Widget.Box({
    vertical: false,
    class_name: 'workspaces',
    homogeneous: true,
    vpack: "center",
    spacing: 0,
    children: workspaces.map((label, index) => {
      const wsId = index + 1;
      const updateClassName = (self) => {
        if (hyprland.active.workspace.id === wsId) {
          self.class_name = "focused";
        } 
        else {
          self.class_name = hyprland.workspaces.some(
            ws => ws.id === wsId && ws.windows !== 0
            ) ? "occupied" : "static";
        }
      };
      return Widget.Button({
        attribute: `${wsId}`,
        label: label,
        on_clicked: () => { hyprland.messageAsync(`dispatch workspace ${wsId}`); },
        setup: self => {
          self.hook(hyprland, () => updateClassName(self));
        }
      });
    })
  });
}


export function WorkspacesInd(){
  const workspaces = ["", "", "", ""];
  //const workspaces = ["1","2","3","4"];
  return Widget.Box({
    class_name: 'workspacesInd',
    homogeneous: false,
    vertical: false,
    vpack: "center",
    spacing: 10,
    children: workspaces.map((label, index) => {
      const wsId = index + 1;
      const updateClassName = (self) => {
        if (hyprland.active.workspace.id === wsId) {
          self.widthRequest = 35, 
          self.class_name = "focused";
        } 
        else {
          self.widthRequest = 25, 
          self.class_name = hyprland.workspaces.some(
            ws => ws.id === wsId && ws.windows !== 0
            ) ? "occupied" : "static";
        }
      };
      return Widget.Button({
        attribute: `${wsId}`,
        label: label,
        on_clicked: () => { hyprland.messageAsync(`dispatch workspace ${wsId}`); },
        setup: self => {
          self.hook(hyprland, () => updateClassName(self));
        }
      });
    })
  });
}
