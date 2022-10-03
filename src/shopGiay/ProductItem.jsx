import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let { shoes, getShoeDetail } = this.props;
    let { id, image, price, name } = shoes;
    return (
        <div className='card' >
        <div>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
                <button onClick={() => {
                    getShoeDetail(id);
                }} data-toggle="modal" data-target="#modelId" className="btn btn-info">see more</button>
            </div>
        </div>

    </div>
    )
  }
}
