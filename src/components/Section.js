import React, { Component } from 'react'
import Products from './section/Products'
import {Route, Routes} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'
import DetailPage from './section/DetailPage'

export class Section extends Component {
    render() {
        return (
            <Routes>
                    <Route exact path="/" element={<Products />} />
                    <Route exact path="/product/:id" element={<DetailPage />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/payment" element={<Payment />} />
            </Routes>
        )
    }
}

export default Section