import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() {
    console.log(this.posts);
   }

  getPosts(): Post[] {
    return [...this.posts];
  }

  getPostUpdatedListener(): Observable<Post[]> {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post): void {
    console.log(this.posts);
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

  deletePost(index: number): void {
    this.posts.splice(index, 1);
  }
}
