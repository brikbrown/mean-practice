import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../post.model';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  constructor(private ps: PostService) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm): void {
    const post: Post = { title: form.value.title, content: form.value.content };
    this.ps.addPost(post);
    form.resetForm();
  }

}
