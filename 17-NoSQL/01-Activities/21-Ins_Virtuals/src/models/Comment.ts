import { Schema, model, Document } from 'mongoose';

interface IComment extends Document {
  text?: string;
  username?: string;
}

// Schema for what makes up a comment
const commentSchema = new Schema<IComment>({
  text: String,
  username: String,
});

// Initialize the Comment model
const Comment = model('Comment', commentSchema);

export default Comment;
