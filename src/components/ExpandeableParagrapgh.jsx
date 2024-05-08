import { useState } from "react";


const ExpandeableParagrapgh = ({text, maxLength}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [description, setDescription] = useState(text.slice(0, maxLength));

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);

        !isExpanded ? setDescription(text) : setDescription(text.slice(0, maxLength))
    };

  return (
    <div>
        <h1 className="text-gray-600 text-lg font-semibold">{description}</h1>
        {
            text.length > maxLength && 
            <button onClick={toggleDescription} className=" text-lg font-semibold">
                {
                    isExpanded ? "Read Less..." : "Read More..."
                }
            </button>
        }  
    </div>
  )
}

export default ExpandeableParagrapgh;