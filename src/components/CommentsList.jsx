import CommentData from "./CommentData";

const CommentsList = ({comments}) => {

    console.log("comments", comments);

    const {items} = comments;

  return (
    <div>
        {
            items.map((comment) =>
                <div> 
                    <CommentData key={comment.id} data={comment} />
                </div>
            )
        }
    </div>
  )
}

export default CommentsList;