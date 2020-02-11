import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeadsLib, getLeadInfo } from '../../actions/leads'

export class LibSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    static propTypes = {
        lots: PropTypes.array.isRequired,
        // leadinfo : PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getLeadsLib();
    }

    // render the component
    render() {
        return (
            <Fragment>
                <h1>
                    <hr />
                    <br />
                    Test filling options Search
                </h1>
                <div className="input-group">
                    <select className="custom-select"
                        id="inputGroupSelect04"
                        aria-label="Example select with button addon"
                        // onChange={}
                    >
                        <option defaultValue>Choose...</option>

                        {/* list of lots */}
                        {this.props.lots.map(
                            lot =>
                                <option key={lot.id} value={lot.id}>
                                    {lot.name}
                                </option>
                        )}
                    </select>

                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Button</button>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    lots: state.lots.lots

});

export default connect(mapStateToProps, { getLeadsLib, getLeadInfo })(LibSearch)
