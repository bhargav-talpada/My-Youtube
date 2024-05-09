import CommentData from "./CommentData";

const CommentsList = ({comments}) => {
  return (
    <div>
        {
            comments.map((comment,index) =>
                <div> 
                    <CommentData key={index} data={comment} />
                    <div className="pl-5 ml-5 border border-l-black">
                        <CommentsList  comments={comment.replies} />
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default CommentsList;