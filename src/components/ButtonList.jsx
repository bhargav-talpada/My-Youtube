import Button from "./Button";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';

export const ButtonList = () => {

  const nameList = ["All","Live", "Music", "Gaming", "Cricket",  "Trailer", "JavaScript", "ReactJS", "WebDevelopment", "SamsungGalaxy", "ViratKohli", "TarakMehta", "KapilSharma", "Watched"]; 

  return (
    <div className=" mt-14 h-10 bg-white w-screen overflow-x-scroll">
      <div className=" flex ml-4 h-10 w-screen">
        {
          nameList.map((buttonName) => 
            <Button key={buttonName} name={buttonName} />
          )
        }
      </div>
    </div>
  )
}

export default ButtonList;