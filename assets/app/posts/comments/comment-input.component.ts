import { Component, Input } from "@angular/core";

import { Comment } from "./comment";
import { PostService }  from "../post.service";
import { CommentService } from "./comment.service";
import { ErrorService } from "../../errors/error.service";

@Component({
    selector: 'comment-input',
    template: `
        <section class="panel panel-default">
            <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
                <div class="form-group comment-input-group">
                    <input ngControl="body" type="text" class="form-control" id="body" #input [ngModel]="comment?.body">
                    <br>
                    <button type="submit" class="btn btn-primary">Comment</button>
                </div>
            </form>
        </section>
    `,
    styles: [`
        .comment-input-group {
            padding: 10px 10px 10px 10px;
        }
    `],
    providers: [CommentService]
})

export class CommentInputComponent {
    @Input() postId:string;
    constructor(private _commentService: CommentService, private _postService: PostService, private _errorService: ErrorService) {}

    onSubmit(form:any) {
        const comment:Comment = new Comment(form.body);
        this._commentService.addComment(this.postId, comment)
            .subscribe(
                data => {
                    console.log(data);
                    this._postService.getPost(this.postId).comments.push(data);
                },
                error => this._errorService.handleError(error)
            );;
    }
}
