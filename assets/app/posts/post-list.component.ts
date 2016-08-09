import { Component, OnInit } from "@angular/core";

import { Post } from "./post";

import { CommentComponent } from "./comments/comment.component";
import { CommentInputComponent } from "./comments/comment-input.component";

import { PostService } from "./post.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-post-list',
    template: `
        <section class="col s8">
            <ul class="collection" *ngFor="let post of posts">
                <li class="collection-item">
                    <a (click)="toggleFlag(post.postId)">
                    {{ post.title }}</a>
                    <i class="tiny material-icons"
                    (click)="upvotePost(post)">thumb_up</i>
                    {{ post.upvotes }}
                    <i class="tiny material-icons"
                    (click)="downvotePost(post)">thumb_down</i>
                    {{ post.downvotes }}
                    <span [hidden]="hideContent || post.postId !== clickedPostId">
                        <article>{{ post.content }}</article>
                        <comment-input [postId]="post.postId"></comment-input>
                        <comment *ngFor="let comment of post.comments" [comment]="comment" [postId]="post.postId"></comment>
                    </span>
                    <footer>
                        <div class="author">
                            by {{ post.username }}
                        </div>
                    </footer>
                </li>
            </ul>
        </section>
    `,
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .tiny.material-icons:hover {
            cursor: pointer;
        }
    `],
    directives: [CommentInputComponent, CommentComponent]
})
export class PostListComponent implements OnInit {

    constructor(private _postService: PostService, private _errorService: ErrorService) {}

    posts: Post[];
    hideContent = true;
    clickedPostId = '';

    toggleFlag(postId) {
        if (this.clickedPostId === postId) {
            this.hideContent = !this.hideContent;
        } else {
            this.clickedPostId = postId;
            this.hideContent = false;
        }
    }

    upvotePost(post) {
        this._postService.upvotePost(post)
            .subscribe(
                data => {
                    console.log(data);
                    post.upvotes++;
                },
                error => this._errorService.handleError(error)
            )
    }

    downvotePost(post) {
        this._postService.downvotePost(post)
            .subscribe(
                data => {
                    console.log(data);
                    post.downvotes++;
                },
                error => this._errorService.handleError(error)
            )
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(
                posts => {
                    this.posts = posts;
                    this._postService.posts = posts;
                },
                error => this._errorService.handleError(error)
            );
    }
}
