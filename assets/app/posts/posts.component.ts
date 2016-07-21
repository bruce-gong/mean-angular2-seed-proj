import { Component } from "@angular/core";

import { PostInputComponent } from "./post-input.component";
import { PostListComponent } from "./post-list.component";

@Component({
    template:`
        <div class="row spacing">
            <my-post-input></my-post-input>
        </div>
        <div class="row spacing">
            <my-post-list></my-post-list>
        </div>
    `,
    directives: [PostInputComponent, PostListComponent]
})

export class PostsComponent {

}
