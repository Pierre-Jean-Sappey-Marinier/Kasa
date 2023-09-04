declare module "*.png" {
  const value: import("react-native").ImageSourcePropType;
  export default value;
}

declare module "*.svg" {
  // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const content: string;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
