import { Link } from "react-router-dom"

const Breadcrumb = () => {
  return (
    <div className="w-full mb-4 bg-white">
      <div className="text-2xl px-4 pt-4 font-semibold">
          Dashboar
      </div>
      <div className="text-base p-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex flex-wrap  items-center space-x-1 md:space-x-3">
            <li className="flex items-center">
              <Link to="/" className="flex items-center font-medium text-gray-700 hover:text-green-sea">
                <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <Link to="/" className="ml-1 font-medium text-gray-700 hover:text-green-sea md:ml-2">
                  Projects
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                <span className="ml-1 font-medium text-gray-500 md:ml-2">Flowbite</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumb