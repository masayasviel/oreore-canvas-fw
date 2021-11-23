import { Base } from '@core/base';
import { Scene } from '@core/scene';

/**
 * Canvas
 */
export class Canvas {
    /** 幅 */
    width: number;
    /** 高さ */
    height: number;
    /** this dom element */
    private domElement: HTMLElement;
    /** canvas */
    private canvas: HTMLCanvasElement;
    /** context */
    private context: CanvasRenderingContext2D;
    /** current scene */
    private currentScene: Scene;
    /**
     * constructor
     * @param canvasId canvas ID
     * @param startScene 始めのシーン
     * @param width 幅
     * @param height 高さ
     */
    constructor(
        canvasId: string,
        startScene: Scene,
        width=640,
        height=960
    ) {
        const checkExistCanvasId = document.getElementById(canvasId);
        if (checkExistCanvasId) {
            this.domElement = checkExistCanvasId;
        } else {
            this.domElement = document.createElement('canvas');
            this.domElement.setAttribute('id', canvasId);
        }
        this.canvas = this.domElement as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d')!;
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.currentScene = startScene;
    }
    /**
     * set buck ground color
     */
    set backgroundColor(backgroundColor: string) {
        this.context.fillStyle = backgroundColor;
        this.context.fillRect(0, 0, this.width, this.height);
    }
    /**
     * 現在のシーンを更新する
     * @param nextScene 次のシーン
     */
    setCurrentScene(nextScene: Scene): void {
        this.currentScene = nextScene;
    }
    /**
     * canvas clear
     */
    clearAll(): void {
        this.context.clearRect(0, 0, this.width, this.height);
    }

    /**
     * flame update
     */
    update<T extends Base>(targets: T[]): void {
        // TODO: これは描画をするメソッドなのに違っている
        targets.forEach(target => target.update());
    }
}
