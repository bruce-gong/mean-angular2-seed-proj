import { Component } from "@angular/core";

import { Post } from "./post";
import { PostService } from "./post.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-post-input',
    template:`
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input ngControl="title" type="text" class="form-control" id="title" #input [ngModel]="post?.title">
                </div>
                <div class="form-group">
                    <label for="content">Content</label>
                    <input ngControl="content" type="text" class="form-control" id="content" #input [ngModel]="post?.content">
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
