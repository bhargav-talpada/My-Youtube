import CommentData from "./CommentData";

const CommentsList = ({comments}) => {

    console.log("comments", comments);

  return (
    <div>
        {
            comments.map((comment) =>
                <CommentData key={comment.id} data={comment} />
            )
        }
    </div>
  )
}

export default CommentsList;