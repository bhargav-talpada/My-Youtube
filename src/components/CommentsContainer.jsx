import CommentsList from "./CommentsList";

const CommentsContainer = () => {

    const commentsData = [
        {
            id: 1,
            name: "Bhargav Talpada",
            text: "Lorem puram dolars 1",
            replies: [],
        },
        {
            id: 2,
            name: "Bhargav Talpada",
            text: "Lorem puram dolars 2",
            replies: [
                {
                    id: 3,
                    name: "Bhargav Talpada",
                    text: "Lorem puram dolars reply2-1",
                    replies: [],
                },
                {
                    id: 4,
                    name: "Bhargav Talpada",
                    text: "Lorem puram dolars reply2-2",
                    replies: [
                        {
                            id: 5,
                            name: "Bhargav Talpada",
                            text: "Lorem puram dolars reply2-2-1",
                            replies: [],
                        },
                        {
                            id: 6,
                            name: "Bhargav Talpada",
                            text: "Lorem puram dolars reply2-2-2",
                            replies: [
                                {
                                    id: 6,
                                    name: "Bhargav Talpada",
                                    text: "Lorem puram dolars reply2-2-2-1",
                                    replies: [
                                        {
                                            id: 6,
                                            name: "Bhargav Talpada",
                                            text: "Lorem puram dolars reply2-2-2-1-1",
                                            replies: [],
                                        },
                                    ],
                                },
                                {
                                    id: 6,
                                    name: "Bhargav Talpada",
                                    text: "Lorem puram dolars reply2-2-2-2",
                                    replies: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 7,
            name: "Bhargav Talpada",
            text: "Lorem puram dolars 3",
            replies: [
                {
                    id: 6,
                    name: "Bhargav Talpada",
                    text: "Lorem puram dolars reply3-1",
                    replies: [],
                },
            ],
        },
    ]

  return (
    <div className="my-5 p-2 ml-5">
        <h1 className="text-3xl font-semibold">Comments: </h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;