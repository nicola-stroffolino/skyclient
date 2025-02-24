import Settings from "../Amaterasu/core/Settings"
import DefaultConfig from "../Amaterasu/core/DefaultConfig"
const config = new DefaultConfig("CratePriority", "data/settings.json")
const schemePath = "data/ColorScheme.json"


config
.addSwitch({
  category: "Crates",
  configName: "crates",
  title: "Crate Priority",
  description: "Says what to do if a crate doesnt spawn requires nwjn No Pre from all members",
})
.addSwitch({
  category: "Crates",
  configName: "pro",
  title: "Pro Mode",
  description: "Select if P2 player also drags in x cannon",
})

const setting = new Settings("CratePriority", config, schemePath)
    .setCommand("crates", ["crate"])

// export
export default () => setting.settings