import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { Blog } from "./blog";


@Injectable()
export class BlogProvider {

    private blogs: AngularFireList<Blog>;

    constructor(private db: AngularFireDatabase) { 
        this.blogs = this.db.list<Blog>('/blogs')
    }

    // AddBlog(): Observable<Blog>
    // {
    //     var id = this.db.list('/blogs').push({});
    //     this.db.object('/blogs/id').update({key: id});
    // }

    GetBlogs(): Observable<Blog[]> {
        return this.blogs
            .snapshotChanges()
            .map(snapshot => snapshot.map(i => new Blog(i)));
    }

    GetBlog(key): Observable<Blog> {
        return this.db.object<Blog>('/blogs/' + key)
            .snapshotChanges()
            .map(b => new Blog(b));
    }

    DeleteBlog(key: string): any {
        return this.blogs.remove(key)
    }
}