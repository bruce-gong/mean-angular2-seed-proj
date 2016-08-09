import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { PostsComponent } from "./posts/posts.component";
import { HeaderComponent } from "./header.component";
import { ErrorComponent } from "./errors/error.component";
import { SignupComponent }  from "./auth/signup.component";
import { LogoutComponent }  from "./auth/logout.component";

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
        <my-error></my-error>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
})
@Routes([
    {path: '/message', component: MessagesComponent},
    {path: '/auth', component: AuthenticationComponent},
    {path: '/auth/signup', component: SignupComponent},
    {path: '/auth/logout', component: LogoutComponent},
    {path: '/post', component: PostsComponent}
])
export class AppComponent {

}
