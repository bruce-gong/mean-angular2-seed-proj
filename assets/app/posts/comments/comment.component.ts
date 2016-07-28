import { Component, Input } from "@angular/core";

import { Comment } from "./comment";
import { CommentService } from "./comment.service";
import { ErrorService } from "../../errors/error.service";

@Component({
    selector: 'comment',
    template:`
        <article class="panel panel-default">
            <div class="panel-body">
                <span>{{ comment.body }}</span>
                <span class="glyphicon glyphicon-thumbs-up" (click)="upvoteComment(postId, comment)"></span>
                    {{ comment.upvotes }}
                <span class="glyphicon glyphicon-thumbs-down" (click)="downvoteComment(postId, comment)"></span>
                    {{ comment.downvotes }}
                <br>
                <span>By {{ comment.author }}</span>
            </div>
        </article>
    `,
    providers: [CommentService]
})

export class CommentComponent {
    @Input() comment:Comment;
    @Input() postId:string;

    constructor(private _commentService: CommentService, private _errorService: ErrorService) {}

    upvoteComment(postId, comment) {
        this._commentService.upvoteComment(postId, comment)
            .subscribe(
                data => {
                    comment.upvotes++;
                },
                error => this._errorService.handleError(error)
            )
    }

    downvoteComment(postId, comment) {
        this._commentService.downvoteComment(postId, comment)
            .subscribe(
                data => {
                    comment.downvotes++;
                },
                error => this._errorService.handleError(error)
            )
    }
}
