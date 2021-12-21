import { Canvas } from '@core/canvas';
import { Base } from '@core/base';
import { Group } from '@core/group';
import { Element } from '@core/element';
import { Type } from '@core/interface';

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
    /** 次のシーン */
    nextScene?: Type<Scene>;

    constructor() {
        super();
        this.child = [];
    }

    /**
     * フレーム更新時に実行される処理
     */
    update(): void {
        this.child.forEach(child => child.update());
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

    /** 次のシーンへ進む処理 */
    exit(): void {
        if (this.nextScene) {
            Canvas.setCurrentScene(new this.nextScene());
        } else {
            // TODO: 次のシーンを設定していないのexit()は出来ないエラー
            throw Error();
        }
    }
}
