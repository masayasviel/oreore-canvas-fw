import { Scene } from '@core/scene';
import { Type } from '@core/interface';

import { MainScene } from './mainScene';
import { Canvas } from '@core/canvas';

function setup<T extends Scene>(startScene: Type<T>) {
    new Canvas('canvas', new startScene());
}

setup(MainScene);