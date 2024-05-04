import Button from "./Button";

export const ButtonList = () => {

  const nameList = ["All", "Music", "Gaming", "Trailer", "JavaScript", "ReactJS", "WebDevelopment", "SamsungGalaxy", "ViratKohli", "TarakMehta", "KapilSharma", "Watched", "Comedies"]; 

  return (
    <div className="flex">
      {
        nameList.map((buttonName) => 
          <Button key={buttonName} name={buttonName} />
        )
      }
    </div>
  )
}

export default ButtonList;