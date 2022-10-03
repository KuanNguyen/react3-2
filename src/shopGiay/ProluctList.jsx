import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProluctList extends Component {

    renderShoes = () => {
        return this.props.arrayShoes.map((shoes) => {
            let {id} = shoes;
            return <div className="col-4" key={`shoes-${id}`}>
               <ProductItem getShoeDetail={this.props.getShoeDetail} key={`pair-${shoes.id}`} shoes = {shoes}/>
            </div>
        })
    }


    render() {
        return (
            <div className="row">
                {this.renderShoes()}
            </div>
        )
    }
}
