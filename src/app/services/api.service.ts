import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './interface.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private backendListeningAddress: string = 'http://localhost:3000';

  // Endpoints
  private postEndpoint: string = '/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<{message: string, posts: any}>(this.backendListeningAddress + this.postEndpoint)
    .pipe(map((postData) => {
      return postData.posts.map((post: { title: any; content: any; _id: any; }) => {
        return {
          title: post.title,
          content: post.content,
          id: post._id
        }
      })
    }));
  }

  addPost(post: Post): Observable<any> {
    return this.http.post<{message: string, postId: string}>(this.backendListeningAddress + this.postEndpoint, post)
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(this.backendListeningAddress + `${this.postEndpoint}/` + id);
  }
}
