import { FaUser } from "react-icons/fa";

const CommentData = ({data}) => {

    console.log("data",data);

  return (
    <div className="flex items-center gap-2 bg-gray-100 my-2 p-2 rounded-lg">
        <FaUser className="text-3xl" />
        <div>
            <h1 className="font-semibold">Name : </h1>
            <h1>Comment : </h1>
        </div>
    </div>

  )
};

export default CommentData;