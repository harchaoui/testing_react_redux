import React, { Component, Fragment, useState } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLots, getCategories, getSupports, getProducts } from '../../actions/leads'

export class LibSearch extends Component {
    componentDidMount() {
        this.props.getLots();
        this.props.getCategories();
        this.props.getSupports();
        this.props.getProducts();
    }

    static propTypes = {
        lots: PropTypes.array.isRequired,
        categories: PropTypes.array.isRequired,
        supports: PropTypes.array.isRequired,
        // lot_id: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            lot_id: {},
            category_id: {},
            support_id: {},
            product_id: {}
        };

        //get the lot id change
        this.handleLotIDChange = this.handleLotIDChange.bind(this);

        // get the category id change
        this.handleCatIDChange = this.handleCatIDChange.bind(this);

        // get the support id change
        this.handleSupportIDChange = this.handleSupportIDChange.bind(this);

        // get the products id change
        this.handleProductIDChange = this.handleProductIDChange.bind(this);

        
        // handle lot submition
        this.onSubmitLot = this.onSubmitLot.bind(this);
        this.onSubmitCategory = this.onSubmitCategory.bind(this);
        this.onSubmitSupport = this.onSubmitSupport.bind(this);

    }
    // lot id
    handleLotIDChange(event) {
        this.setState({ lot_id: event.target.value });
        console.log("Called -> handleLotIDChange")

    }
    onSubmitLot(e) {
        e.preventDefault();
        this.props.getCategories(this.state.lot_id)
    }


    // category id
    handleCatIDChange(e) {
        this.setState({ category_id: e.target.value });
        // console.log(this.state.category_id);
    }

    onSubmitCategory(e) {
        e.preventDefault();
        this.props.getSupports(this.state.category_id)
    }
    // support id
    handleSupportIDChange(e) {
        this.setState({ support_id: e.target.value });

        console.log(this.state.support_id);
    }
    onSubmitSupport(e){
        e.preventDefault();
        this.props.getProducts(this.state.category_id)
    }

    handleProductIDChange(event) {
        this.setState({ product_id: event.target.value });

        console.log(this.state.product_id);
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    // render the component
    render() {
        return (
            <Fragment>
                <hr />
                <br />
                <p>
                    select lot, category and support to
                    show the list of products
                </p>
                <div className="container">
                    {/* Start Lot Selection Dropdown list */}
                    <div className="row">
                        <form onSubmit={this.onSubmitLot}>
                            <div className="input-group col">
                                <select className="custom-select"
                                    id="inputGroupSelect04"
                                    aria-label="Example select with button addon"
                                    onChange={this.handleLotIDChange}
                                >
                                    <option defaultValue>Lots...</option>
                                    {/* list of lots */}
                                    {this.props.lots.map(
                                        lot =>
                                            <option key={lot.id} value={lot.id}>
                                                {lot.label}
                                            </option>
                                    )}
                                </select>
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </form>
                        {/* End Lot Selection Dropdown list */}

                        {/* Start Categories Selection Dropdown list */}

                        <form onSubmit={this.onSubmitCategory}>
                            <div className="input-group col">
                                <select className="custom-select"
                                    id="inputGroupSelect04"
                                    aria-label="Example select with button addon"
                                    onChange={this.handleCatIDChange}
                                >
                                    <option defaultValue>Categories...</option>
                                    {/* list of lots */}
                                    {this.props.categories.map(
                                        category =>
                                            <option key={category.id} value={category.id}>
                                                {category.label}
                                            </option>
                                    )}
                                </select>
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </form>
                        {/* End Categories Selection Dropdown list */}



                        {/* Start Supports Selection Dropdown list */}
                        <form onSubmit={this.onSubmitSupport}>
                        <div className="input-group col">
                            <select className="custom-select"
                                id="inputGroupSelect04"
                                aria-label="Example select with button addon"
                                onChange={this.handleSupportIDChange}
                            >
                                <option defaultValue>Supports...</option>
                                {/* list of lots */}
                                {this.props.supports.map(
                                    support =>
                                        <option key={support.id} value={support.id}>
                                            {support.label}
                                        </option>
                                )}
                            </select>
                            <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </form>
                        {/* Start Supports Selection Dropdown list */}
                    </div>
                </div>



                {/* Start Products Selection table list */}
                <h1> Products information </h1>
                <table className="table table-striped border">
                    <thead>
                        <tr>
                            <th>Nom du Produit</th>
                            <th>Prix Moyen </th>
                            <th>Unité</th>
                            {/* <th>Indice BT</th>
                            <th>BT Actuel </th> */}
                            <th>Details</th>
                            {/* <th />
                            <th /> */}
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.products.map(product => (

                            <tr key={product.id} >
                                <td> {product.label}</td>
                                <td> {product.prix_moyen} </td>
                                <td> {product.unit} </td>
                                {/* <td> {product.indice_bt} </td>
                                <td> {product.bt_actuel} </td> */}
                                <td> {product.details} </td>

                                {/* <td>
                                    <button
                                        type="button"
                                        className="btn btn-info btn-sm"
                                    // onClick={this.props.getLeadInfo.bind(this, lead.id)}
                                    >
                                        Info
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                    // onClick={this.props.deleteLead.bind(this,lead.id)}
                                    >
                                        delete
                                    </button>
                                </td> */}
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

                {/* {console.log(this.props)} */}
            </Fragment >
        )
    }
}

const mapStateToProps = state => ({
    lots: state.lots_r.lots,
    categories: state.categories_r.categories,
    supports: state.supports_r.supports,
    products: state.products_r.products,
});

export default connect(
    mapStateToProps,
    // mapDispatchToProps,
    { getLots, getCategories, getSupports, getProducts }
)(LibSearch)
