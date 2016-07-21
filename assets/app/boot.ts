///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { provide } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

import { AppComponent } from "./app.component";
import { MessageService } from "./messages/message.service";
import { AuthService } from "./auth/auth.service";
import { PostService } from "./posts/post.service";
import { ErrorService } from "./errors/error.service";
// If we don't import service in bootstrap, we have to use providers in component in order to use it
bootstrap(AppComponent, [MessageService, AuthService, PostService, ErrorService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}), HTTP_PROVIDERS]);
