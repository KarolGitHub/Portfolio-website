declare module "*.svg" {
  const content: any;
  export default content;
}
declare module '*.png';

declare type MetaData = {
  author: string;
  description: string;
  title: string;
};