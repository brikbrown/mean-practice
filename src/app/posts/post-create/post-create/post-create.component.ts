import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredValue: string = '';
  newPost: string = 'NO CONTENT';

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(): void {
    this.newPost = this.enteredValue;
  }

}
