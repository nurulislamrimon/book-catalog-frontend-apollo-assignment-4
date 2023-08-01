export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: [{ reviewer: string; review: number }];
}


export type IFileringField='author'|'genre';