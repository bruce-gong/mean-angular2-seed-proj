export class Comment {
    body: string;
    author: string;
    _id: string;
    postId: string;
    upvotes: number;
    downvotes: number;

    constructor (body: string, author?: string, commentId?: string, postId?: string, upvotes?: number, downvotes?: number) {
        this.body = body;
        this.author = author;
        this._id = commentId;
        this.postId = postId;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}
