"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_input_component_1 = require("./post-input.component");
var post_list_component_1 = require("./post-list.component");
var PostsComponent = (function () {
    function PostsComponent() {
    }
    PostsComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"row spacing\">\n            <my-post-input></my-post-input>\n        </div>\n        <div class=\"row spacing\">\n            <my-post-list></my-post-list>\n        </div>\n    ",
            directives: [post_input_component_1.PostInputComponent, post_list_component_1.PostListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHFDQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELG9DQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBYzFEO0lBQUE7SUFFQSxDQUFDO0lBZEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLDBNQU9SO1lBQ0QsVUFBVSxFQUFFLENBQUMseUNBQWtCLEVBQUUsdUNBQWlCLENBQUM7U0FDdEQsQ0FBQzs7c0JBQUE7SUFJRixxQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksc0JBQWMsaUJBRTFCLENBQUEiLCJmaWxlIjoicG9zdHMvcG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUG9zdElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vcG9zdC1pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBvc3RMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcG9zdC1saXN0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPG15LXBvc3QtaW5wdXQ+PC9teS1wb3N0LWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8bXktcG9zdC1saXN0PjwvbXktcG9zdC1saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtQb3N0SW5wdXRDb21wb25lbnQsIFBvc3RMaXN0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFBvc3RzQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
