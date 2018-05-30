import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Blog } from '../blog';
import { BlogProvider } from '../blog.provider';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  animations: [
    trigger('blogState', [
      state('normal', style({
        transform: 'rotateY(0deg)'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      state('void', style({
        transform: 'scale(0.01)',
        opacity: '0.1'
      })),
      transition('normal <=> flipped', animate('300ms ease-out')),
      transition('* => void', animate('300ms ease-out')),
      transition('void => *', animate('300ms ease-in'))
    ])
  ]
})
export class BlogListComponent implements OnInit {

  public blogs: Blog[] = [];  

  constructor(public blogProvider: BlogProvider) { }

  ngOnInit(): void {
    this.blogProvider.GetBlogs().subscribe(blogs => {
      this.updateBlogs(blogs)
    });
  }

  public delete(blog) {
    this.blogProvider.DeleteBlog(blog.key);
  }

  public updateBlogs(newBlogs: Blog[]) {

    if(!newBlogs) return;

    //remove
    for (var i = 0; i < this.blogs.length; i++){
      if (newBlogs.filter(nb => nb.key == this.blogs[i].key).length == 0) {
        this.blogs.splice(i, 1);
        i++;
      }
      i++;
    }

    //add
    newBlogs.forEach(nb => {
      if(this.blogs.filter(b => b.key == nb.key).length == 0)
        this.blogs.push(nb);
    })
  };
}