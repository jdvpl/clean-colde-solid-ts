import { HttpClient } from './02-open-close-c';
import { PostService } from './05-dependency-b';
import { ApiService, JsonDatabaseService } from './05-dependency-c';


// Main
(async () => {
    const jsonServiceProvider=new JsonDatabaseService()
    const httpClient=new HttpClient()
    const apiService=new ApiService(httpClient)
    const postService = new PostService(apiService);

    const posts = await postService.getPosts();

    console.log({ posts })


})();