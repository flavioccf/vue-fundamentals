export interface Part {
  id: number;
  description: string;
  title: string;
  src: string;
  type: string;
  cost: number;
  onSale: null | undefined | string;
}

export interface Robot {
  head: Part;
  leftArm: Part;
  rightArm: Part;
  torso: Part;
  base: Part;
}
