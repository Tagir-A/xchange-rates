import React from 'react'
import { currencyFormatter } from '../utils'

export default function Rate({source, rate, target}) {
  return (
    <span
          className="rate absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-xs bg-white rounded-full px-2 border border-gray-300"
          data-testid="rate"
        >
          {currencyFormatter(source, 1)}{' = '}
          <span className="bg-transparent text-blue-700 font-semibold rounded">
            {currencyFormatter(target, rate, 4)}
          </span>
        </span>
  )
}
