import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <>
        <Link to='/'>
            <h1 className="font-extrabold transition-all duration-300 ease-in-out text-black dark:text-white">Where in the world?</h1>
        </Link>
    </>
  )
}

export default Logo