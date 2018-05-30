import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  public model: Blog;

  constructor(private db: AngularFireDatabase) {}
  
  ngOnInit(): void {
    this.model = new Blog();
  }

  public onSubmit(blog: Blog)
  {
    this.db.list('/blogs').push(blog);
    this.model = new Blog();
  }

  

}
