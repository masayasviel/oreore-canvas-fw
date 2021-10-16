import { Base } from '@core/base';

/**
 * updater
 */
export class Updater {
    /**
     * flame update
     * @param instance instanse extends Base
     */
    public update<T extends Base>(instance: T): void {
        instance.update();
    }
}