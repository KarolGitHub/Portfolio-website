declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.webp';
declare module '*.pdf';

declare type Social = {
  name: string;
  url: string;
};
declare type Projects = {
  name: string;
  demo?: string;
  code: string;
  desc: string;
};
declare type MetaData = {
  author: string;
  description: string;
  title: string;
  social: Social[];
  projects: Projects[];
};

declare module 'react-obfuscate';
