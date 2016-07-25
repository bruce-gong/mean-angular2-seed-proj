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
var comment_1 = require("./comment");
var post_service_1 = require("../post.service");
var comment_service_1 = require("./comment.service");
var error_service_1 = require("../../errors/error.service");
var CommentInputComponent = (function () {
    function CommentInputComponent(_commentService, _postService, _errorService) {
        this._commentService = _commentService;
        this._postService = _postService;
        this._errorService = _errorService;
    }
    CommentInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var comment = new comment_1.Comment(form.body);
        this._commentService.addComment(this.postId, comment)
            .subscribe(function (data) {
            console.log(data);
            _this._postService.getPost(_this.postId).comments.push(data);
        }, function (error) { return _this._errorService.handleError(error); });
        ;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentInputComponent.prototype, "postId", void 0);
    CommentInputComponent = __decorate([
        core_1.Component({
            selector: 'comment-input',
            template: "\n        <section class=\"panel panel-default\">\n            <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                <div class=\"form-group comment-input-group\">\n                    <input ngControl=\"body\" type=\"text\" class=\"form-control\" id=\"body\" #input [ngModel]=\"comment?.body\">\n                    <br>\n                    <button type=\"submit\" class=\"btn btn-primary\">Comment</button>\n                </div>\n            </form>\n        </section>\n    ",
            styles: ["\n        .comment-input-group {\n            padding: 10px 10px 10px 10px;\n        }\n    "],
            providers: [comment_service_1.CommentService]
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService, post_service_1.PostService, error_service_1.ErrorService])
    ], CommentInputComponent);
    return CommentInputComponent;
}());
exports.CommentInputComponent = CommentInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL2NvbW1lbnRzL2NvbW1lbnQtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFFakQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLDZCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBdUIxRDtJQUVJLCtCQUFvQixlQUErQixFQUFVLFlBQXlCLEVBQVUsYUFBMkI7UUFBdkcsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFFL0gsd0NBQVEsR0FBUixVQUFTLElBQVE7UUFBakIsaUJBVUM7UUFURyxJQUFNLE9BQU8sR0FBVyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO2FBQ2hELFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO1FBQUEsQ0FBQztJQUNYLENBQUM7SUFiRDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUF0Qlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLG1mQVVUO1lBQ0QsTUFBTSxFQUFFLENBQUMsOEZBSVIsQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDOUIsQ0FBQzs7NkJBQUE7SUFpQkYsNEJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDZCQUFxQix3QkFlakMsQ0FBQSIsImZpbGUiOiJwb3N0cy9jb21tZW50cy9jb21tZW50LWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi4vY29tbWVudFwiO1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSAgZnJvbSBcIi4uL3Bvc3Quc2VydmljZVwiO1xuaW1wb3J0IHsgQ29tbWVudFNlcnZpY2UgfSBmcm9tIFwiLi9jb21tZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi8uLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbW1lbnQtaW5wdXQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb21tZW50LWlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJib2R5XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiYm9keVwiICNpbnB1dCBbbmdNb2RlbF09XCJjb21tZW50Py5ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmNvbW1lbnQtaW5wdXQtZ3JvdXAge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgfVxuICAgIGBdLFxuICAgIHByb3ZpZGVyczogW0NvbW1lbnRTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbW1lbnRJbnB1dENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgcG9zdElkOnN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21tZW50U2VydmljZTogQ29tbWVudFNlcnZpY2UsIHByaXZhdGUgX3Bvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBvblN1Ym1pdChmb3JtOmFueSkge1xuICAgICAgICBjb25zdCBjb21tZW50OkNvbW1lbnQgPSBuZXcgQ29tbWVudChmb3JtLmJvZHkpO1xuICAgICAgICB0aGlzLl9jb21tZW50U2VydmljZS5hZGRDb21tZW50KHRoaXMucG9zdElkLCBjb21tZW50KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLmdldFBvc3QodGhpcy5wb3N0SWQpLmNvbW1lbnRzLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApOztcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
