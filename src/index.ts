import { Scene } from '@core/scene';
import { DiContainer } from './core/diContainer'

import { MainScene } from './mainScene';

function setup(scenes: Scene[]) {
    const main = new DiContainer(scenes)
}

setup([
    (new MainScene({}))
]);