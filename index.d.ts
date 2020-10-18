declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.webp';

declare type Social = {
  name: string;
  url: string;
};
declare type MetaData = {
  author: string;
  description: string;
  title: string;
  social: Social[];
};
