import React from 'react'
import { RangeSlider } from '@appbaseio/reactivesearch'

export default (props) => {
  return (
    <RangeSlider
      {...props}
      componentId="PriceSensor"
      dataField="price"
      title="Price Range"
      range={{
        start: 10,
        end: 250,
      }}
      rangeLabels={{
        start: '$10',
        end: '$250',
      }}
      defaultSelected={{
        start: 10,
        end: 50,
      }}
      setpValue={5}
      react={{
        and: ['DateRangeSensor'],
      }}
    />
  )
}
