import { Base } from '@core/base';
import { Group } from '@core/group';
import { Element } from '@core/element';

/**
 * 子要素になれる型
 */
type ChildType = Group | Element;
/**
 * Sceneのコンストラクタ
 * @member backgroundColor 背景色
 */
export interface SceneParameterType {
    backgroundColor?: string,
    nextScene?: Scene;
}

/**
 * Scene
 */
export class Scene extends Base {
    /** 子 */
    private child: ChildType[];
    /** 背景色 */
    backgroundColor?: string;
    /** 次のシーン */
    nextScene?: Scene;

    constructor(param: SceneParameterType) {
        super();
        this.child = [];
        this.backgroundColor = param.backgroundColor;
        this.nextScene = param.nextScene;
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
        // TODO: 依存性を注入できれば次のシーンへ飛べる
    }
}
