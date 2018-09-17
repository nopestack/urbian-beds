import React from 'react'
import { NumberBox } from '@appbaseio/reactivesearch'

export default (props) => {
  return (
    <NumberBox
      {...props}
      componentId="GuestSensor"
      dataField="accommodates"
      title="Guests"
      defaultSelected={1}
      data={{
        start: 1,
        end: 20,
      }}
    />
  )
}
