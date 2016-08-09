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
var post_1 = require("./post");
var post_service_1 = require("./post.service");
var error_service_1 = require("../errors/error.service");
var PostInputComponent = (function () {
    function PostInputComponent(_postService, _errorService) {
        this._postService = _postService;
        this._errorService = _errorService;
    }
    PostInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var post = new post_1.Post(form.title, form.content, null, 'SB');
        this._postService.addPost(post)
            .subscribe(function (data) {
            console.log(data);
            _this._postService.posts.push(data);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    PostInputComponent = __decorate([
        core_1.Component({
            selector: 'my-post-input',
            template: "\n        <section class=\"col s12\">\n            <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                <div class=\"input-field\">\n                    <input ngControl=\"title\" type=\"text\" id=\"title\" #input [ngModel]=\"post?.title\">\n                    <label for=\"title\">Title</label>\n                </div>\n                <div class=\"input-field\">\n                    <input ngControl=\"content\" type=\"text\" id=\"content\" #input [ngModel]=\"post?.content\">\n                    <label for=\"content\">Content</label>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Post</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, error_service_1.ErrorService])
    ], PostInputComponent);
    return PostInputComponent;
}());
exports.PostInputComponent = PostInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL3Bvc3QtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMscUJBQXFCLFFBQVEsQ0FBQyxDQUFBO0FBQzlCLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBbUJ2RDtJQUNJLDRCQUFvQixZQUF5QixFQUFVLGFBQTJCO1FBQTlELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRyxDQUFDO0lBRXRGLHFDQUFRLEdBQVIsVUFBUyxJQUFRO1FBQWpCLGlCQVVDO1FBVEcsSUFBTSxJQUFJLEdBQVEsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDMUIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQS9CTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUMsd3NCQWNSO1NBQ0osQ0FBQzs7MEJBQUE7SUFlRix5QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksMEJBQWtCLHFCQWM5QixDQUFBIiwiZmlsZSI6InBvc3RzL3Bvc3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCB7IFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4vcG9zdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktcG9zdC1pbnB1dCcsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmLnZhbHVlKVwiICNmPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiICNpbnB1dCBbbmdNb2RlbF09XCJwb3N0Py50aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJjb250ZW50XCIgdHlwZT1cInRleHRcIiBpZD1cImNvbnRlbnRcIiAjaW5wdXQgW25nTW9kZWxdPVwicG9zdD8uY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UG9zdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBQb3N0SW5wdXRDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBvblN1Ym1pdChmb3JtOmFueSkge1xuICAgICAgICBjb25zdCBwb3N0OlBvc3QgPSBuZXcgUG9zdChmb3JtLnRpdGxlLCBmb3JtLmNvbnRlbnQsIG51bGwsICdTQicpO1xuICAgICAgICB0aGlzLl9wb3N0U2VydmljZS5hZGRQb3N0KHBvc3QpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UucG9zdHMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
