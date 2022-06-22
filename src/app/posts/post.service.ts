import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {
   }

  getPosts(): void  {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts').subscribe(x => {
      this.posts = x.posts;
      this.postsUpdated.next([...this.posts]);
    })
  }

  getPostUpdatedListener(): Observable<Post[]> {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post): void {
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post).subscribe(x => {
      console.log(x.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }
}
