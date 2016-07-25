export class Comment {
    body: string;
    _id: string;
    postId: string;
    upvotes: number;
    downvotes: number;

    constructor (body: string, commentId?: string, postId?: string, upvotes?: number, downvotes?: number) {
        this.body = body;
        this._id = commentId;
        this.postId = postId;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}
