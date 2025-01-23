import localPosts from '../data/local-database.json'
import { HttpClient } from './02-open-close-c';
import { Post } from './05-dependency-b';

export abstract class PostProvider{
  abstract getPosts():Promise<Post[]>
}
export class LocalDataBaseService implements PostProvider {

  constructor() {}

  async getPosts() {
      return [
          {
              'userId': 1,
              'id': 1,
              'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
              'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
          },
          {
              'userId': 1,
              'id': 2,
              'title': 'qui est esse',
              'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          }]
  }

}

export class JsonDatabaseService implements PostProvider{
  async getPosts(){
    return localPosts;
  }
}


export class ApiService implements PostProvider{
  constructor(private readonly httpClient:HttpClient){}
  async getPosts(): Promise<Post[]> {
     try {
      const {data}=await this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      return data as Post[]
     } catch (error) {
      console.log(error);
      return [];
     }
  }
}