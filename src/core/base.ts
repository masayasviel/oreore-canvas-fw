/**
 * base
 */
export abstract class Base {
    /** インタラクティブ */
    isInteractive: boolean;
    abstract parent: Base;

    constructor() {
        this.isInteractive = false;
    }

    /**
     * フレーム更新時に実行される処理
     */
    abstract update(): void;
    /**
     *インタラクティブが有効であるとき、タッチ・またはクリックされたタイミングで渡された関数を実行する
     * @param fn タッチ・またはクリックされたときに行いたい処理
     * @param params 関数に渡したい引数
     */
    touchStart<T>(fn: Function, params?: T): void {
        if (this.isInteractive) {
            fn(params);
        }
    }
    /**
     * インタラクティブが有効であるとき、タッチ・またはクリックが離れたタイミングで渡された関数を実行する
     * @param fn タッチ・またはクリックが離れたときに行いたい処理
     * @param params 関数に渡したい引数
     */
    touchEnd<T>(fn: Function, params?: T): void {
        if (this.isInteractive) {
            fn(params);
        }
    }
}
