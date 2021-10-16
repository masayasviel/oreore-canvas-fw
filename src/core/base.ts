/**
 * base
 */
export abstract class Base {
    /** タッチが有効か */
    isInteractive: boolean;
    /** 親 */
    private myParent: Base | null;
    /** 子 */
    private child: Base[];

    constructor() {
        this.isInteractive = false;
        this.myParent = null;
        this.child = [];
    }

    /** 親要素 */
    get parent(): Base | null {
        return this.myParent;
    }
    /** 子要素一覧 */
    get children(): Base[] {
        return this.child;
    }

    /**
     * フレーム更新時に実行される処理
     */
    abstract update(): void;
    /**
     * Base型を子孫に持つインスタンスを子要素に加える
     * @param child 子要素
     * @returns this
     */
    addChild<T extends Base>(child: T): this {
        child.myParent = this;
        this.child.push(child);
        return this;
    }
    /**
     * タッチが有効であるとき、タッチされたら渡された関数を実行する
     * @param fn タッチされたときに行いたい処理
     */
    touched(fn: Function): void {
        if (this.isInteractive) {
            fn();
        }
    }
}