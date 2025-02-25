import configManager from "../config/manager";
import eventListener from "../events"

export default class Module {
    constructor(name, description, category, options, keybind) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.options = options;
        this.keybind = configManager.config?.modules?.[name]?.keybind || keybind;
        this.waitingForBind = false;
        this.isEnabled = false;
        this.toggle = this.toggle.bind(this);
    }

    onEnable (j) {}
    onDisable() {}
    onGameTick() {}
    onRender() {}
    onGameEntered() {}
    onGameExited() {}
    onSettingUpdate() {}

    enable (j) {
        this.isEnabled = true;
        eventListener.emit("module.update", this);
        this.onEnable();
    }

    disable (l) {
        this.isEnabled = false;
        eventListener.emit("module.update", this);
        this.onDisable();
    }

    toggle (j) {
        if (this.isEnabled) {
            this.disable();
        } else {
            this.enable();
        }
    };
};
