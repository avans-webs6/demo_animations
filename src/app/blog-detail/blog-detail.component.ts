import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

//Form component
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Blog } from '../blog';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BlogProvider } from '../blog.provider';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  //properties
  public key: Observable<string>;
  private blog: Observable<Blog> = null; 
  public blogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private blogProvider: BlogProvider,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.key = this.route.params.map(p => p.id); //<--
    this.key.subscribe(key => {
        this.blog = this.blogProvider.GetBlog(key); 
        this.blogForm = this.fb.group(this.blog);
        //etc
    })
  }

  // public updateForm(key) {

  //   //zonder sleutel kunnen we niet verder
  //   if (!key) return;

  //   //Haal 1 specifieke blog op
  //   this.blog = this.db.object<Blog>('/blogs/' + key);


  //   //Als de blog word aangepast, dan moet je het formulier updaten 
  //   this.blog.valueChanges()
  //     .subscribe((blog: Blog) => {
  //       //update formulier
  //       this.blogForm = this.fb.group(blog);
  //       //op het nieuwe formulier ook de automatische updates binden
  //       this.blogForm.valueChanges
  //         .debounceTime(500)
  //         .subscribe(() => {
  //           this.blog.update(this.blogForm.value);
  //         })
  //     })
  // }




}
