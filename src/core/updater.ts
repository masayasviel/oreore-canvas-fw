import { Base } from '@core/base';
import { Scene } from '@core/scene';

/**
 * updater
 */
export class Updater {
    currentScene: Scene;

    constructor(currentScene: Scene) {
        this.currentScene = currentScene;
    }
    /**
     * flame update
     */
    update<T extends Base>(targets: T[]): void {
        for (let target of targets) {
            // after the scene transition
            if (typeof this.currentScene != typeof target.parent) break;
            target.update();
        }
    }
}