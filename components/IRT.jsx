import React from 'react'

function IRT({ amount, className2 }) {
  return (
    <div>
        <span className="text-nowrap">
            <span className={className2}> {amount} </span>
            <small className="text-sm text-blue900 font-bold mx-1">تومان</small>
        </span>
    </div>
  )
}

export default IRT