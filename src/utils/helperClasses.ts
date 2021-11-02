export class vector2 {
  x: number;
  y: number;
}

export function delay(ms: number) {
  return new Promise((res) => {
    setTimeout(() => {res(null)}, ms);
  });
}
