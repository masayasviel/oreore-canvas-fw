import { Base } from '@core/base';
import { Scene } from '@core/scene';
import { Element } from '@core/element';

/**
 * Group
 */
export class Group extends Base {
    /** 親 */
    parent: Scene;
    /** 子 */
    private child: Element[];

    constructor(parent: Scene) {
        super();
        this.parent = parent;
        this.child = [];
    }

    /** 子要素一覧 */
    get children(): Element[] {
        return this.child;
    }

    /**
     * フレーム更新時に実行される処理
     */
    update(): void {}
    /**
     * Element型を子孫に持つインスタンスを子要素に加える
     * @param child 子要素
     * @returns this
     */
    addChild<T extends Element>(child: T): this {
        child.parent = this;
        this.child.push(child);
        return this;
    }
}
