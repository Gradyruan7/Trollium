import configManager from "../config/manager";
import eventListener from "../events"

export default class Module {
    constructor(name, description, category, options, keybind) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.options = options;
        this.keybind = configManager.config?.modules?.[j]?.keybind || keybind;
        this.waitingForBind = false;
        this.isEnabled = false;
        this.toggle = this.toggle.bind(this);
    }

    onEnable (j) {}
    onDisable(k) {}
    onGameTick() {}
    onRender(l) {}
    onGameEntered(j) {}
    onGameExited(k) {}
    onSettingUpdate() {}

    enable (j) {
        this.isEnabled = true;
        eventListener.emit("module.update", this);
        this.onEnable();
    }

    disable (k) {
        this.isEnabled = false;
        eventListener.emit("module.update", this);
        this.onDisable();
    }

    toggle (j) {
        if (this.isEnabled) {
            this.disable(k);
        } else {
            this.enable(k);
        }
    };
};
