import { ICoordinates } from "./utils.interface";

const roundValue = (value: number): number => {
  return Math.abs(value) < 1e-10 ? 0 : value;
};

const bloom = (order: number, radius: number, total: number): ICoordinates => {
  const eachPart = (2 * Math.PI) / total;
  const x = roundValue(radius * Math.cos(order * eachPart));
  const y = roundValue(radius * Math.sin(order * eachPart));
  return { x, y };
};

const move = (x: number, y: number) => {
  return `translate(${x}rem, ${y}rem`;
};

const utils = {
  bloom,
  move,
};

export default utils;
