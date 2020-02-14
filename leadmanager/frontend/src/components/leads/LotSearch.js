import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Select from 'react-select'
import Proptypes from 'prop-types'

import { TestFunc } from '../../actions/test'
import { getLots, getSelectedLot } from '../../actions/lots'


// let formattedOptions = {};
// let lots_test = this.props.lots.forEach((obj) => {
//     formattedOptions[obj.value] = obj
// })

// let obj = {
//     "2019-02-28 02:36:20": "5 minutes",
//     "2019-02-28 23:59:59": "Today",
//     "2019-03-01 02:31:20": "+1 Day",
//     "2019-03-02 02:31:20": "+2 Days",
//     "2019-03-03 02:31:20": "+3 Days",
//     "2019-03-07 02:31:20": "+1 Week",
//     "2019-03-14 02:31:20": "+2 Weeks",
//     "2019-03-21 02:31:20": "+3 Weeks",
//     "2019-03-28 02:31:20": "+1 Month",
//     "2019-04-28 02:31:20": "+2 Months",
//     "2019-05-28 02:31:20": ">2 Months"
// }

// let op = Object.entries(obj)
//     .map(([label, value]) => ({ label, value }))


export class LotSearch extends Component {
    componentDidMount() {
        this.props.getLots()

    }
    render() {
        return (

            <Fragment>

                {console.log(this.props.lot_object)}

                <button className="btn btn-info btn-sm" > click get lot  </button>
                <select
                    // defaultValue ="nice" onChange = {(e) => this.props.getSelectedLot(e.target.getAttribute("key")) }
                    defaultValue="nice" onChange={(e) => console.log(e.target)}
                >
                    {/* {console.log(this.props)} */}
                    {this.props.lots.map(
                        lot =>
                            <option key={lot.id}>{lot.name}</option>
                    )}

                </select>

                <Select
                    options={this.props.lots}

                /> 
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    // lots: state.lotsReducer.lots_payload,    
});



export default connect(mapStateToProps, { TestFunc, getLots, getSelectedLot })(LotSearch)
