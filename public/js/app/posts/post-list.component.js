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
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <div *ngFor=\"let post of posts\">\n                <article class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <a (click)=\"toggleFlag(post.postId)\">\n                        {{ post.title }}</a>\n                        <span class=\"glyphicon glyphicon-thumbs-up\"\n                        (click)=\"upvotePost(post)\"></span>\n                        {{ post.upvotes }}\n                        <span class=\"glyphicon glyphicon-thumbs-down\"\n                        (click)=\"downvotePost(post)\"></span>\n                        {{ post.downvotes }}\n                        <span [hidden]=\"hideContent || post.postId !== clickedPostId\">\n                            <article>{{ post.content }}</article>\n                            <comment-input [postId]=\"post.postId\"></comment-input>\n                            <comment *ngFor=\"let comment of post.comments\" [comment]=\"comment\" [postId]=\"post.postId\"></comment>\n                        </span>\n                    </div>\n                    <footer class=\"panel-footer\">\n                        <div class=\"author\">\n                            by {{ post.username }}\n                        </div>\n                    </footer>\n                </article>\n            </div>\n        </section>\n    ",
            directives: [comment_input_component_1.CommentInputComponent, comment_component_1.CommentComponent]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, error_service_1.ErrorService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUlsRCxrQ0FBaUMsOEJBQThCLENBQUMsQ0FBQTtBQUNoRSx3Q0FBc0Msb0NBQW9DLENBQUMsQ0FBQTtBQUUzRSw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQWlDdkQ7SUFFSSwyQkFBb0IsWUFBeUIsRUFBVSxhQUEyQjtRQUE5RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBR2xGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0lBSmtFLENBQUM7SUFNdEYsc0NBQVUsR0FBVixVQUFXLE1BQU07UUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUFmLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQzdCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQTtJQUNULENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUFqQixpQkFTQztRQVJHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUE7SUFDVCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7YUFDdkIsU0FBUyxDQUNOLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFoRkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLGs0Q0EyQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywrQ0FBcUIsRUFBRSxvQ0FBZ0IsQ0FBQztTQUN4RCxDQUFDOzt5QkFBQTtJQWtERix3QkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFkseUJBQWlCLG9CQWlEN0IsQ0FBQSIsImZpbGUiOiJwb3N0cy9wb3N0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiO1xuXG5pbXBvcnQgeyBDb21tZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tbWVudHMvY29tbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbW1lbnRJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbW1lbnRzL2NvbW1lbnQtaW5wdXQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4vcG9zdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktcG9zdC1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcG9zdCBvZiBwb3N0c1wiPlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInRvZ2dsZUZsYWcocG9zdC5wb3N0SWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3N0LnRpdGxlIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidXB2b3RlUG9zdChwb3N0KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHBvc3QudXB2b3RlcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkb3dudm90ZVBvc3QocG9zdClcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwb3N0LmRvd252b3RlcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2hpZGRlbl09XCJoaWRlQ29udGVudCB8fCBwb3N0LnBvc3RJZCAhPT0gY2xpY2tlZFBvc3RJZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPnt7IHBvc3QuY29udGVudCB9fTwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tbWVudC1pbnB1dCBbcG9zdElkXT1cInBvc3QucG9zdElkXCI+PC9jb21tZW50LWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21tZW50ICpuZ0Zvcj1cImxldCBjb21tZW50IG9mIHBvc3QuY29tbWVudHNcIiBbY29tbWVudF09XCJjb21tZW50XCIgW3Bvc3RJZF09XCJwb3N0LnBvc3RJZFwiPjwvY29tbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieSB7eyBwb3N0LnVzZXJuYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDb21tZW50SW5wdXRDb21wb25lbnQsIENvbW1lbnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBvc3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBwb3N0czogUG9zdFtdO1xuICAgIGhpZGVDb250ZW50ID0gdHJ1ZTtcbiAgICBjbGlja2VkUG9zdElkID0gJyc7XG5cbiAgICB0b2dnbGVGbGFnKHBvc3RJZCkge1xuICAgICAgICBpZiAodGhpcy5jbGlja2VkUG9zdElkID09PSBwb3N0SWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNvbnRlbnQgPSAhdGhpcy5oaWRlQ29udGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZFBvc3RJZCA9IHBvc3RJZDtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNvbnRlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwdm90ZVBvc3QocG9zdCkge1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS51cHZvdGVQb3N0KHBvc3QpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zdC51cHZvdGVzKys7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgZG93bnZvdGVQb3N0KHBvc3QpIHtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZG93bnZvdGVQb3N0KHBvc3QpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zdC5kb3dudm90ZXMrKztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBwb3N0cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdHMgPSBwb3N0cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UucG9zdHMgPSBwb3N0cztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
