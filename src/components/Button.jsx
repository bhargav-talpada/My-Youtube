
const Button = ({name}) => {
  return (
    <div className="relative">
        <button className=" mx-1 px-2 md:px-3 rounded-md bg-zinc-400 text-white text-base md:text-lg">{name}</button>
    </div>
  )
}

export default Button;