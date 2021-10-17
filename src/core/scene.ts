import { Base } from '@core/base';
import { Group } from '@core/group';
import { Element } from '@core/element';

/**
 * 子要素になれる型
 */
type ChildType = Group | Element;

/**
 * Scene
 */
export class Scene extends Base {
    /** 子 */
    private child: ChildType[];

    constructor() {
        super();
        this.child = [];
    }

    /**
     * フレーム更新時に実行される処理
     */
    update(): void {

    };

    /** 親(自身) */
    get parent(): Scene {
        return this;
    }
    /** 子要素一覧 */
    get children(): ChildType[] {
        return this.child;
    }

    /**
     * ChildType型を子孫に持つインスタンスを子要素に加える
     * @param child 子要素
     * @returns this
     */
    addChild<T extends ChildType>(child: T): this {
        child.parent = this;
        this.child.push(child);
        return this;
    }
}
