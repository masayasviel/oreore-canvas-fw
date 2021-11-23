import { Canvas } from '@core/canvas';
import { Scene } from '@core/scene';

export class DiContainer {
    private canvas: Canvas;
    /** scenes */
    private scenes: Scene[];

    constructor(scenes: Scene[]) {
        this.scenes = scenes;
        this.canvas = new Canvas('canvas', scenes[0]);
    }
}
