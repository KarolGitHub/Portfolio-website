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
  icon?: string;
};
declare type MetaData = {
  author: string;
  description: string;
  title: string;
  social: Social[];
  projects: Projects[];
};
declare type BlogPost = {
  objectID: string;
  excerpt: string;
  title: string;
  date: string;
  _tags: string[];
  author: string;
  image: {
    childImageSharp: { fluid: any };
  };
  slug: string;
  readingTime: {
    text: string;
  };
};
declare type Tag = {
  value: string;
  path: string;
  count: number;
};
declare type BlogTag = {
  name: string;
  bgColor: string;
};
declare type TagMetaData = {
  id: number;
  name: string;
  bg_color_hex: string;
};

declare module 'react-obfuscate';
