import { PostService } from './05-dependency-b';
import { JsonDatabaseService } from './05-dependency-c';


// Main
(async () => {
    const jsonServiceProvider=new JsonDatabaseService()
    const postService = new PostService(jsonServiceProvider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();