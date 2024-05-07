import CommentData from "./CommentData";

const CommentsList = ({comments}) => {
  return (
    <div>
        {
            comments.map((comment) =>
                <div> 
                    <CommentData key={comment.id} data={comment} />
                    <div className="pl-5 ml-5 border border-l-black">
                        <CommentsList key={comment.id} comments={comment.replies} />
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default CommentsList;