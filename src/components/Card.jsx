import React from 'react'

const Card = (props) => {
    const { header, body, footer } = props
    return (
        <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white">
                {header &&
                    <div className="p-4 border-b border-gray-300">
                        {props.header}
                    </div>
                }
                {body &&
                    <div className="p-4">
                        {props.body}
                    </div>
                }
                {footer &&
                    <div className="p-4 border-t border-gray-300">
                        {props.footer}
                    </div>
                }
            </div>
        </div>
    )
}

export default Card