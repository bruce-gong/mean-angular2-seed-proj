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
var post_service_1 = require("./post.service");
var error_service_1 = require("../errors/error.service");
var PostListComponent = (function () {
    function PostListComponent(_postService, _errorService) {
        this._postService = _postService;
        this._errorService = _errorService;
        this.showContent = true;
        this.clickedTitle = '';
    }
    PostListComponent.prototype.toggleFlag = function (title) {
        this.clickedTitle = title;
        this.showContent = !this.showContent;
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
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <div *ngFor=\"let post of posts\">\n                <article class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <a (click)=\"toggleFlag(post.title)\">\n                        {{ post.title }}</a>\n                        <span class=\"glyphicon glyphicon-thumbs-up\"\n                        (click)=\"upvotePost(post)\"></span>\n                        {{post.upvotes}}\n                        <span class=\"glyphicon glyphicon-thumbs-down\"\n                        (click)=\"downvotePost(post)\"></span>\n                        {{post.downvotes}}\n                        <article [hidden]=\"showContent || post.title !== clickedTitle\">{{post.content}}</article>\n                    </div>\n                    <footer class=\"panel-footer\">\n                        <div class=\"author\">\n                            by {{ post.username }}\n                        </div>\n                    </footer>\n                </article>\n            </div>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, error_service_1.ErrorService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUlsRCw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQTRCdkQ7SUFFSSwyQkFBb0IsWUFBeUIsRUFBVSxhQUEyQjtRQUE5RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBR2xGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBSm1FLENBQUM7SUFNdEYsc0NBQVUsR0FBVixVQUFXLEtBQUs7UUFDWixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLElBQUk7UUFBZixpQkFTQztRQVJHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzthQUM3QixTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUE7SUFDVCxDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLElBQUk7UUFBakIsaUJBU0M7UUFSRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDL0IsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFBO0lBQ1QsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2FBQ3ZCLFNBQVMsQ0FDTixVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBdkVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxzbENBdUJUO1NBQ0osQ0FBQzs7eUJBQUE7SUE4Q0Ysd0JBQUM7QUFBRCxDQTdDQSxBQTZDQyxJQUFBO0FBN0NZLHlCQUFpQixvQkE2QzdCLENBQUEiLCJmaWxlIjoicG9zdHMvcG9zdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIjtcblxuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi9wb3N0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wb3N0LWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwb3N0IG9mIHBvc3RzXCI+XG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwidG9nZ2xlRmxhZyhwb3N0LnRpdGxlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgcG9zdC50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInVwdm90ZVBvc3QocG9zdClcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3Bvc3QudXB2b3Rlc319XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRvd252b3RlUG9zdChwb3N0KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7cG9zdC5kb3dudm90ZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgW2hpZGRlbl09XCJzaG93Q29udGVudCB8fCBwb3N0LnRpdGxlICE9PSBjbGlja2VkVGl0bGVcIj57e3Bvc3QuY29udGVudH19PC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5IHt7IHBvc3QudXNlcm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgUG9zdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6IFBvc3RTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cblxuICAgIHBvc3RzOiBQb3N0W107XG4gICAgc2hvd0NvbnRlbnQgPSB0cnVlO1xuICAgIGNsaWNrZWRUaXRsZSA9ICcnO1xuXG4gICAgdG9nZ2xlRmxhZyh0aXRsZSkge1xuICAgICAgICB0aGlzLmNsaWNrZWRUaXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnNob3dDb250ZW50ID0gIXRoaXMuc2hvd0NvbnRlbnQ7XG4gICAgfVxuXG4gICAgdXB2b3RlUG9zdChwb3N0KSB7XG4gICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLnVwdm90ZVBvc3QocG9zdClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBwb3N0LnVwdm90ZXMrKztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBkb3dudm90ZVBvc3QocG9zdCkge1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5kb3dudm90ZVBvc3QocG9zdClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBwb3N0LmRvd252b3RlcysrO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5nZXRQb3N0cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHBvc3RzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHBvc3RzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5wb3N0cyA9IHBvc3RzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
