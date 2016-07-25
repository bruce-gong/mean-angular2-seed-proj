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
var comment_service_1 = require("./comment.service");
var error_service_1 = require("../../errors/error.service");
var CommentComponent = (function () {
    function CommentComponent(_commentService, _errorService) {
        this._commentService = _commentService;
        this._errorService = _errorService;
    }
    CommentComponent.prototype.upvoteComment = function (postId, comment) {
        var _this = this;
        this._commentService.upvoteComment(postId, comment)
            .subscribe(function (data) {
            comment.upvotes++;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    CommentComponent.prototype.downvoteComment = function (postId, comment) {
        var _this = this;
        this._commentService.downvoteComment(postId, comment)
            .subscribe(function (data) {
            comment.downvotes++;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', comment_1.Comment)
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentComponent.prototype, "postId", void 0);
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'comment',
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <span>{{ comment.body }}</span>\n                <span class=\"glyphicon glyphicon-thumbs-up\"\n                        (click)=\"upvoteComment(postId, comment)\"></span>\n                        {{ comment.upvotes }}\n                        <span class=\"glyphicon glyphicon-thumbs-down\"\n                        (click)=\"downvoteComment(postId, comment)\"></span>\n                        {{ comment.downvotes }}\n            </div>\n        </article>\n    ",
            providers: [comment_service_1.CommentService]
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService, error_service_1.ErrorService])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzL2NvbW1lbnRzL2NvbW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFFakQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBb0IxRDtJQUlJLDBCQUFvQixlQUErQixFQUFVLGFBQTJCO1FBQXBFLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUU1Rix3Q0FBYSxHQUFiLFVBQWMsTUFBTSxFQUFFLE9BQU87UUFBN0IsaUJBUUM7UUFQRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO2FBQzlDLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUE7SUFDVCxDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFnQixNQUFNLEVBQUUsT0FBTztRQUEvQixpQkFRQztRQVBHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDaEQsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQTtJQUNULENBQUM7SUF2QkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBcEJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBQyw0akJBWVI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzlCLENBQUM7O3dCQUFBO0lBMkJGLHVCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSx3QkFBZ0IsbUJBeUI1QixDQUFBIiwiZmlsZSI6InBvc3RzL2NvbW1lbnRzL2NvbW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50XCI7XG5pbXBvcnQgeyBDb21tZW50U2VydmljZSB9IGZyb20gXCIuL2NvbW1lbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tbWVudCcsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgY29tbWVudC5ib2R5IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInVwdm90ZUNvbW1lbnQocG9zdElkLCBjb21tZW50KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvbW1lbnQudXB2b3RlcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkb3dudm90ZUNvbW1lbnQocG9zdElkLCBjb21tZW50KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGNvbW1lbnQuZG93bnZvdGVzIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbQ29tbWVudFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tbWVudENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY29tbWVudDpDb21tZW50O1xuICAgIEBJbnB1dCgpIHBvc3RJZDpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21tZW50U2VydmljZTogQ29tbWVudFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gICAgdXB2b3RlQ29tbWVudChwb3N0SWQsIGNvbW1lbnQpIHtcbiAgICAgICAgdGhpcy5fY29tbWVudFNlcnZpY2UudXB2b3RlQ29tbWVudChwb3N0SWQsIGNvbW1lbnQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21tZW50LnVwdm90ZXMrKztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBkb3dudm90ZUNvbW1lbnQocG9zdElkLCBjb21tZW50KSB7XG4gICAgICAgIHRoaXMuX2NvbW1lbnRTZXJ2aWNlLmRvd252b3RlQ29tbWVudChwb3N0SWQsIGNvbW1lbnQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21tZW50LmRvd252b3RlcysrO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
