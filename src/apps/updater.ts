import { BaseElement } from '@core/base-element';

/**
 * updater
 */
export class Updater {
    /**
     * flame update
     * @param instance instanse extends BaseElement
     */
    public update<T extends BaseElement>(instance: T): void {
        instance.update();
    }
}