import { Base } from "@core/base";

/**
 * element
 */
export abstract class Element extends Base {
    /** x座標 */
    abstract x: number;
    /** y座標 */
    abstract y: number;
    /** 移動速度 */
    v: number;
    /**
     * constructor
     */
    constructor() {
        super();
        this.v = 0;
    }
    /**
     * 座標を設定する
     * @param x x座標
     * @param y y座標
     * @returns this
     */
    setPosition(x: number, y: number): this {
        this.x = x;
        this.y = y;
        return this;
    }
}
