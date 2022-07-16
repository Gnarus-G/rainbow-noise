import "./style.css";

import { random, RGBASetter } from "./RGBASetter";

let fps = 24;
let frameTime = 1000 / fps;
let lastTime = 0;

const canvas = document.querySelector<HTMLCanvasElement>("#cvs");
const ctx = canvas?.getContext("2d");
const { width: cWidth, height: cHeight } = canvas!.getClientRects()[0];

function noise(time: DOMHighResTimeStamp) {
  if (!ctx) return;

  const elapsed = time - lastTime;

  if (elapsed <= frameTime) {
    requestAnimationFrame(noise);
    return;
  }

  lastTime = time;

  const image = new ImageData(cWidth, cHeight);
  const rgbaSet = new RGBASetter(image.data);

  for (let i = 0; i < image.data.length; i += 4) {
    rgbaSet.red(i, random());
    rgbaSet.green(i, random());
    rgbaSet.blue(i, random());
    rgbaSet.alpha(i, random());
  }

  ctx.putImageData(image, 0, 0);

  requestAnimationFrame(noise);
}

requestAnimationFrame(noise);
