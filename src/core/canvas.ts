import { Scene } from '@core/scene';

/**
 * Canvas
 */
export class Canvas {
    /** 幅 */
    static width: number;
    /** 高さ */
    static height: number;
    /** this dom element */
    private static domElement: HTMLElement;
    /** canvas */
    private static canvas: HTMLCanvasElement;
    /** context */
    private static context: CanvasRenderingContext2D;
    /** current scene */
    private static currentScene: Scene;
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
            Canvas.domElement = checkExistCanvasId;
        } else {
            Canvas.domElement = document.createElement('canvas');
            Canvas.domElement.setAttribute('id', canvasId);
        }
        Canvas.canvas = Canvas.domElement as HTMLCanvasElement;
        Canvas.context = Canvas.canvas.getContext('2d')!;
        Canvas.canvas.width = width;
        Canvas.canvas.height = height;
        Canvas.width = width;
        Canvas.height = height;
        Canvas.currentScene = startScene;
    }
    /**
     * set buck ground color
     */
    static set backgroundColor(backgroundColor: string) {
        Canvas.context.fillStyle = backgroundColor;
        Canvas.context.fillRect(0, 0, Canvas.width, Canvas.height);
    }
    /**
     * 現在のシーンを更新する
     * @param nextScene 次のシーン
     */
    static setCurrentScene(nextScene: Scene): void {
        Canvas.currentScene = nextScene;
    }
    /**
     * canvas clear
     */
    static clearAll(): void {
        Canvas.context.clearRect(0, 0, Canvas.width, Canvas.height);
    }

    /**
     * flame update
     */
    static update(): void {
        Canvas.currentScene.update();
        // TODO: 画面描画処理
    }
}
