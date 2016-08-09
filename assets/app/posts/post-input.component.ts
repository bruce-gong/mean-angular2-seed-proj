import { Component } from "@angular/core";

import { Post } from "./post";
import { PostService } from "./post.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-post-input',
    template:`
        <section class="col s12">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="input-field">
                    <input ngControl="title" type="text" id="title" #input [ngModel]="post?.title">
                    <label for="title">Title</label>
                </div>
                <div class="input-field">
                    <input ngControl="content" type="text" id="content" #input [ngModel]="post?.content">
                    <label for="content">Content</label>
                </div>
                <button type="submit" class="btn btn-primary">Post</button>
            </form>
        </section>
    `
})
export class PostInputComponent {
    constructor(private _postService: PostService, private _errorService: ErrorService) {}

    onSubmit(form:any) {
        const post:Post = new Post(form.title, form.content, null, 'SB');
        this._postService.addPost(post)
            .subscribe(
                data => {
                    console.log(data);
                    this._postService.posts.push(data);
                },
                error => this._errorService.handleError(error)
            );
    }
}
