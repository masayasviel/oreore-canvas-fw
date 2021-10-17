import { Base } from '@core/base';
import { Scene } from '@core/scene';
import { Group } from '@core/group';

/**
 * 親要素になれる型
 */
type ParentType = Group | Scene;

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
    /** 親 */
    parent: ParentType;
    /**
     * constructor
     */
    constructor(parent: ParentType) {
        super();
        this.v = 0;
        this.parent = parent;
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
