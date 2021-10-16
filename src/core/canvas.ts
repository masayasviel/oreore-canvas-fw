/**
 * Canvas
 */
export class Canvas {
    /** this dom element */
    private domElement: HTMLElement;
    /** canvas */
    private canvas: HTMLCanvasElement;
    /** context */
    private context: CanvasRenderingContext2D;
    /** 幅 */
    private w: number;
    /** 高さ */
    private h: number;
    /**
     * constructor
     * @param canvasId canvas ID
     * @param backgroundColor 背景色
     * @param width 幅
     * @param height 高さ
     */
    constructor(
        canvasId: string,
        backgroundColor='#444',
        width=640,
        height=960,
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
        this.w = width;
        this.h = height;
        this.context.fillStyle = backgroundColor;
        this.context.fillRect(0, 0, width, height);
    }
    /** 幅 */
    get width(): number {
        return this.w;
    }
    /** 高さ */
    get height(): number {
        return this.h;
    }
    /** 幅 */
    set width(w: number) {
        this.w = w;
    }
    /** 高さ */
    set height(h: number) {
        this.h = h;
    }
    /**
     * canvas clear
     */
    clearAll(): void {
        this.context.clearRect(0, 0, this.w, this.h);
    }
}