import React from 'react'
import { DateRange } from '@appbaseio/reactivesearch'

export default (props) => {
  return (
    <DateRange
      {...props}
      dataField="date_from"
      componentId="DateRangeSensor"
      title="When"
      innerClass={{
        'daypicker-overlay': 'daypicker-o-wrapper',
      }}
      numberOfMonths={1}
      queryFormat="basic_date"
      placeholder={{
        start: 'Start Date',
        end: 'End Date',
      }}
    />
  )
}

//              defaultSelected={{
//                start: new Date(Date.now()),
//                end: new Date(Date.now()),
//              }}
