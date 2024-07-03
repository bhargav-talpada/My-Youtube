import useConvertDate from "../hooks/useConvertDate";


const CommentData = ({data}) => {

    var {snippet} = data;

    const {topLevelComment} = snippet;

    var {snippet} = topLevelComment;

    const {authorDisplayName, authorProfileImageUrl, publishedAt, textOriginal} = snippet;

    const fullDate = useConvertDate(publishedAt);

  return (
    <div className="w-[825px] flex items-center gap-2 my-2 p-2 rounded-lg">
        <img src={authorProfileImageUrl} alt="authore profile img" className="w-11 rounded-full" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="font-bold"> {authorDisplayName} </h1>
            <h2 className="text-sm">{fullDate}</h2>
          </div>
            <h1> {textOriginal} </h1>
        </div>
    </div>

  )
};

export default CommentData;