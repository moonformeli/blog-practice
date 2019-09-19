interface CSSModule {
  [key: string]: string;
}

declare module "*.css" {
  const value: string; // raw-loader
  export = value;
}

declare module "*.scss" {
  const value: CSSModule;
  export = value;
}
