import React, { Component } from 'react'
import { ReactiveBase } from '@appbaseio/reactivesearch'
import DatePicker from 'components/DatePicker.js'
import NumberPicker from 'components/NumberPicker.js'
import PriceSlider from 'components/PriceSlider.js'
import Result from 'components/Result.js'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.onData = this.onData.bind(this)
  }

  onData(data) {
    console.log(data)
    return {
      image: data.image,
      title: data.name,
      description: (
        <div>
          <div className="price">${data.price}</div>
          <p className="info">
            {data.room_type} - {data.accommodates} guests
          </p>
        </div>
      ),
      url: data.listing_url,
    }
  }

  render() {
    return (
      <section className="container">
        <ReactiveBase
          app="Airbandbeds"
          credentials="CLNavNJfc:33cd4043-e9fc-45cc-ab88-23bc81e062f9"
          type="listing"
        >
          <div className="nav">
            <div className="title">Urbian Beds</div>
          </div>
          <div className="left-col">
            <DatePicker initialMonth={new Date('04-01-2017')} />
            <NumberPicker labelPosition="right" />
            <PriceSlider interval={10} />
          </div>
          <div className="right-col">
            <Result onData={this.onData} />
          </div>
        </ReactiveBase>
      </section>
    )
  }
}

export default App
