const Pagination = (props) => {
    const { totalPage, pageNumber, setPageNumber } = props
    const arr = [...Array(totalPage + 1).keys()].slice(1);
    return (
        <nav aria-label="Page navigation">
            <ul className="inline-flex items-center -space-x-px">
                {pageNumber > 1 && <li className="cursor-pointer">
                    <div
                        onClick={() => setPageNumber(pageNumber - 1)}
                        className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white hover:bg-light-gray"
                    >
                        <span className="sr-only">Previous</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                </li>}
                {arr.map(p => (
                    <li key={p} className="cursor-pointer">
                        <div onClick={() => setPageNumber(p)}
                            className={`leading-tight ${p !== pageNumber ? 'py-2 px-3 text-gray-500 bg-white hover:bg-light-gray' : 'py-2 px-4 text-white bg-gray-600 rounded-full mx-3'}`}
                        >
                            {p}
                        </div>
                    </li>
                ))}
                {pageNumber < arr.length && <li className="cursor-pointer">
                    <div onClick={() => setPageNumber(pageNumber + 1)}
                        className="block py-2 px-3 leading-tight text-gray-500 bg-white hover:bg-light-gray"
                    >
                        <span className="sr-only">Next</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                </li>}
            </ul>
        </nav>
    )
}

export default Pagination