
const Button = ({name}) => {
  return (
    <div className="relative">
        <button className=" mx-1 px-3 rounded-md bg-zinc-400 text-white text-lg">{name}</button>
    </div>
  )
}

export default Button;