import React from 'react'
import { ResultCard } from '@appbaseio/reactivesearch'

export default (props) => {
  return (
    <ResultCard
      {...props}
      componentId="SearchResult"
      dataField="name"
      stream={true}
      size={12}
      onData={props.onData}
      loader="Loading results..."
      pagination={true}
      innerClass={{
        resultStats: 'result-stats',
        list: 'list',
        listItem: 'list-item',
        image: 'image',
      }}
      react={{
        and: ['GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
      }}
    />
  )
}
