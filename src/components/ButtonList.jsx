import Button from "./Button";

export const ButtonList = () => {

  const nameList = ["All", "Music", "Gaming", "Trailer", "JavaScript", "ReactJS", "WebDevelopment", "SamsungGalaxy", "ViratKohli", "TarakMehta", "KapilSharma", "Watched", "Comedies"]; 

  return (
    <div className="mt-14 h-10 bg-white">
      <div className=" flex ml-4 h-10 bg-white">
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