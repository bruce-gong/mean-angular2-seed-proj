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
var comment_component_1 = require("./comments/comment.component");
var comment_input_component_1 = require("./comments/comment-input.component");
var post_service_1 = require("./post.service");
var error_service_1 = require("../errors/error.service");
var PostListComponent = (function () {
    function PostListComponent(_postService, _errorService) {
        this._postService = _postService;
        this._errorService = _errorService;
        this.hideContent = true;
        this.clickedPostId = '';
    }
    PostListComponent.prototype.toggleFlag = function (postId) {
        if (this.clickedPostId === postId) {
            this.hideContent = !this.hideContent;
        }
        else {
            this.clickedPostId = postId;
            this.hideContent = false;
        }
    };
    PostListComponent.prototype.upvotePost = function (post) {
        var _this = this;
        this._postService.upvotePost(post)
            .subscribe(function (data) {
            console.log(data);
            post.upvotes++;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    PostListComponent.prototype.downvotePost = function (post) {
        var _this = this;
        this._postService.downvotePost(post)
            .subscribe(function (data) {
            console.log(data);
            post.downvotes++;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
            _this._postService.posts = posts;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'my-post-list',
            template: "\n        <section class=\"col s8\">\n            <ul class=\"collection\" *ngFor=\"let post of posts\">\n                <li class=\"collection-item\">\n                    <a (click)=\"toggleFlag(post.postId)\">\n                    {{ post.title }}</a>\n                    <i class=\"tiny material-icons\"\n                    (click)=\"upvotePost(post)\">thumb_up</i>\n                    {{ post.upvotes }}\n                    <i class=\"tiny material-icons\"\n                    (click)=\"downvotePost(post)\">thumb_down</i>\n                    {{ post.downvotes }}\n                    <span [hidden]=\"hideContent || post.postId !== clickedPostId\">\n                        <article>{{ post.content }}</article>\n                        <comment-input [postId]=\"post.postId\"></comment-input>\n                        <comment *ngFor=\"let comment of post.comments\" [comment]=\"comment\" [postId]=\"post.postId\"></comment>\n                    </span>\n                    <footer>\n                        <div class=\"author\">\n                            by {{ post.username }}\n                        </div>\n                    </footer>\n                </li>\n            </ul>\n        </section>\n    ",
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .tiny.material-icons:hover {\n            cursor: pointer;\n        }\n    "],
            directives: [comment_input_component_1.CommentInputComponent, comment_component_1.CommentComponent]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, error_service_1.ErrorService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUlsRCxrQ0FBaUMsOEJBQThCLENBQUMsQ0FBQTtBQUNoRSx3Q0FBc0Msb0NBQW9DLENBQUMsQ0FBQTtBQUUzRSw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQTBDdkQ7SUFFSSwyQkFBb0IsWUFBeUIsRUFBVSxhQUEyQjtRQUE5RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBR2xGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0lBSmtFLENBQUM7SUFNdEYsc0NBQVUsR0FBVixVQUFXLE1BQU07UUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUFmLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQzdCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQTtJQUNULENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUFqQixpQkFTQztRQVJHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUE7SUFDVCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7YUFDdkIsU0FBUyxDQUNOLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUF6Rkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLDhzQ0F5QlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxpUEFVUixDQUFDO1lBQ0YsVUFBVSxFQUFFLENBQUMsK0NBQXFCLEVBQUUsb0NBQWdCLENBQUM7U0FDeEQsQ0FBQzs7eUJBQUE7SUFrREYsd0JBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBakRZLHlCQUFpQixvQkFpRDdCLENBQUEiLCJmaWxlIjoicG9zdHMvcG9zdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIjtcblxuaW1wb3J0IHsgQ29tbWVudENvbXBvbmVudCB9IGZyb20gXCIuL2NvbW1lbnRzL2NvbW1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21tZW50SW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21tZW50cy9jb21tZW50LWlucHV0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBQb3N0U2VydmljZSB9IGZyb20gXCIuL3Bvc3Quc2VydmljZVwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXBvc3QtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wgczhcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbGxlY3Rpb25cIiAqbmdGb3I9XCJsZXQgcG9zdCBvZiBwb3N0c1wiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNvbGxlY3Rpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwidG9nZ2xlRmxhZyhwb3N0LnBvc3RJZClcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcG9zdC50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ0aW55IG1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInVwdm90ZVBvc3QocG9zdClcIj50aHVtYl91cDwvaT5cbiAgICAgICAgICAgICAgICAgICAge3sgcG9zdC51cHZvdGVzIH19XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidGlueSBtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkb3dudm90ZVBvc3QocG9zdClcIj50aHVtYl9kb3duPC9pPlxuICAgICAgICAgICAgICAgICAgICB7eyBwb3N0LmRvd252b3RlcyB9fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaGlkZGVuXT1cImhpZGVDb250ZW50IHx8IHBvc3QucG9zdElkICE9PSBjbGlja2VkUG9zdElkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT57eyBwb3N0LmNvbnRlbnQgfX08L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29tbWVudC1pbnB1dCBbcG9zdElkXT1cInBvc3QucG9zdElkXCI+PC9jb21tZW50LWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvbW1lbnQgKm5nRm9yPVwibGV0IGNvbW1lbnQgb2YgcG9zdC5jb21tZW50c1wiIFtjb21tZW50XT1cImNvbW1lbnRcIiBbcG9zdElkXT1cInBvc3QucG9zdElkXCI+PC9jb21tZW50PlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnkge3sgcG9zdC51c2VybmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICAudGlueS5tYXRlcmlhbC1pY29uczpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICBgXSxcbiAgICBkaXJlY3RpdmVzOiBbQ29tbWVudElucHV0Q29tcG9uZW50LCBDb21tZW50Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBQb3N0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3N0U2VydmljZTogUG9zdFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gICAgcG9zdHM6IFBvc3RbXTtcbiAgICBoaWRlQ29udGVudCA9IHRydWU7XG4gICAgY2xpY2tlZFBvc3RJZCA9ICcnO1xuXG4gICAgdG9nZ2xlRmxhZyhwb3N0SWQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZFBvc3RJZCA9PT0gcG9zdElkKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVDb250ZW50ID0gIXRoaXMuaGlkZUNvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrZWRQb3N0SWQgPSBwb3N0SWQ7XG4gICAgICAgICAgICB0aGlzLmhpZGVDb250ZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cHZvdGVQb3N0KHBvc3QpIHtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UudXB2b3RlUG9zdChwb3N0KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc3QudXB2b3RlcysrO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIGRvd252b3RlUG9zdChwb3N0KSB7XG4gICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLmRvd252b3RlUG9zdChwb3N0KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc3QuZG93bnZvdGVzKys7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLmdldFBvc3RzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcG9zdHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gcG9zdHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLnBvc3RzID0gcG9zdHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
