import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

//forms!
import { ReactiveFormsModule } from '@angular/forms';
import { BlogListComponent } from './blog-list/blog-list.component';  // <-- #1 import module

import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './user-list/users.service';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogProvider } from './blog.provider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'users', component: UserListComponent},
  { path: 'blogs', component: BlogListComponent},
  { path: 'blogs/:id', component: BlogDetailComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    BlogDetailComponent,
    UserListComponent,
    BlogListComponent,
    BlogAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), //<--
    
    //Firebase modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,

    ReactiveFormsModule, // <-- #2 add to @NgModule imports    
    BrowserAnimationsModule //for animations!
  ],
  providers: [UsersService, BlogProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }