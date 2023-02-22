import { News } from 'src/app/model/News.model';
// export interface CounterState{
//   count: number,
// }

export interface NewsState{
  news: News[],
  numberOfNews: number,
  loading : boolean,
  error: string,
  isSuccess: boolean,
}
