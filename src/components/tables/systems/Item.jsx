import React from 'react'

const Item = ({ system, index }) => {
    return (
        <tr>
            {system.map((s, i) => (
                i === 0
                    ? <td key={i}
                        className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
                        <div className='inline-flex items-center border-2 rounded-full border-alternate font-semibold p-1.5' style={{ width: '44px', height: '44px' }}>
                            <div>
                                {s}
                            </div>
                        </div>
                    </td>
                    : <td key={i}
                        className='p-2 border text-center border-gray-200 bg-white uppercase tracking-wider'>
                        {s}
                    </td>

            ))}
        </tr>
    )
}

export default Item