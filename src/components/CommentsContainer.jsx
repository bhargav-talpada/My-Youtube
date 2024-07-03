import useGetComments from "../hooks/useGetComments";
import CommentData from "./CommentData";

const CommentsContainer = ({comments, videoId}) => {

    const allComments = useGetComments(videoId);

    if (!allComments || !Array.isArray(allComments)) {
        return console.log("no comments");
    }

    const {statistics} = comments;
    
    const {commentCount} = statistics;

  return (
    <div className="my-5 p-2 ml-5">
        <h1 className="text-2xl font-semibold"> {commentCount} Comments </h1>
        {
            allComments.map((comment) =>
                <CommentData key={comment.id} data={comment} />
            )
        }
    </div>
  )
}

export default CommentsContainer;