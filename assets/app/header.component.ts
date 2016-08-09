import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { MaterializeDirective } from "angular2-materialize";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <ul id="dropdown-profile" class="dropdown-content">
                <li><a [routerLink]="['/auth/signup']">Signup</a></li>
                <li><a [routerLink]="['/auth/logout']">Logout</a></li>
            </ul>

            <nav>
                <div class="nav-wrapper">
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a [routerLink]="['/message']">Messages</a></li>
                        <li><a [routerLink]="['/auth']">Authentication</a></li>
                        <li><a [routerLink]="['/post']">Posts</a></li>
                        <li><a materialize="dropdown" data-activates="dropdown-profile">Profile</a></li>
                    </ul>
                </div>
            </nav>
            </header>
    `,
    directives: [ROUTER_DIRECTIVES, MaterializeDirective],
    styles: [`
        header {
            margin-bottom: 20px;
        }

        ul {
          text-align: center;
        }

        li {
            float: none;
            display: inline-block;
        }

        .router-link-active {
            background-color: #ea454b;
        }
    `]
})
export class HeaderComponent {

}
