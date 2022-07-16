export class RGBASetter {
  constructor(private data: Uint8ClampedArray) {}

  red(i: number, value: number) {
    this.data[i] = value;
  }
  green(i: number, value: number) {
    this.data[i + 1] = value;
  }
  blue(i: number, value: number) {
    this.data[i + 2] = value;
  }
  alpha(i: number, value: number) {
    this.data[i + 3] = (value % 127) + 125; // at least 125
  }
}

export function random() {
  return Math.floor(Math.random() * 255);
}
