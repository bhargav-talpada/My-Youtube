import useGetComments from "../hooks/useGetComments";
import CommentData from "./CommentData";
import CommentsList from "./CommentsList";

const CommentsContainer = ({comments, videoId}) => {

    // const commentsData = [
    //     {
    //         name: "Bhargav Talpada",
    //         text: "Lorem puram dolars 1",
    //         replies: [],
    //     },
    //     {
    //         name: "Bhargav Talpada",
    //         text: "Lorem puram dolars 2",
    //         replies: [
    //             {
    //                 name: "Bhargav Talpada",
    //                 text: "Lorem puram dolars reply2-1",
    //                 replies: [],
    //             },
    //             {
    //                 name: "Bhargav Talpada",
    //                 text: "Lorem puram dolars reply2-2",
    //                 replies: [
    //                     {
    //                         name: "Bhargav Talpada",
    //                         text: "Lorem puram dolars reply2-2-1",
    //                         replies: [],
    //                     },
    //                     {
    //                         name: "Bhargav Talpada",
    //                         text: "Lorem puram dolars reply2-2-2",
    //                         replies: [
    //                             {
    //                                 name: "Bhargav Talpada",
    //                                 text: "Lorem puram dolars reply2-2-2-1",
    //                                 replies: [
    //                                     {
    //                                         name: "Bhargav Talpada",
    //                                         text: "Lorem puram dolars reply2-2-2-1-1",
    //                                         replies: [],
    //                                     },
    //                                 ],
    //                             },
    //                             {
    //                                 name: "Bhargav Talpada",
    //                                 text: "Lorem puram dolars reply2-2-2-2",
    //                                 replies: [],
    //                             },
    //                         ],
    //                     },
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         name: "Bhargav Talpada",
    //         text: "Lorem puram dolars 3",
    //         replies: [
    //             {
    //                 name: "Bhargav Talpada",
    //                 text: "Lorem puram dolars reply3-1",
    //                 replies: [],
    //             },
    //         ],
    //     },
    // ];

    const allComments = useGetComments(videoId);
    console.log("all commnets",allComments);

    const {items} = allComments;

    console.log("items", items);

    const {statistics} = comments;
    
    const {commentCount} = statistics;

  return (
    <div className="my-5 p-2 ml-5">
        <h1 className="text-2xl font-semibold"> {commentCount} Comments </h1>
        {
            items.map((comment) =>
                <CommentData key={comment.id} data={comment} />
            )
        }
    </div>
  )
}

export default CommentsContainer;