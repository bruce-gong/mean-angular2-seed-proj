///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import { provide } from 'angular2/core'
import { HTTP_PROVIDERS } from 'angular2/http'
import { bootstrap } from 'angular2/platform/browser'
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router'
import { AppComponent } from './app.component'
import { AuthService } from './auth/auth.service'
import { ErrorService } from './errors/error.service'
import { MessageService } from './messages/message.service'

bootstrap(AppComponent, [MessageService, AuthService, ErrorService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}),
HTTP_PROVIDERS]);
