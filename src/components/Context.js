import React, { Component } from 'react'

export const DataContext = React.createContext();


export class DataProvider extends Component {

    state = {
        products: [
            {
                "id": "1",
                "title": "Nike Air Force 1 '07",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png",
                "price": 23,
                "count": 1,
                "content": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court." ,
                "description": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court."
            },
            {
                "id": "2",
                "title": "Nike Dunk High Retro SE",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dee60c30-766a-4bda-a69d-48ac9f884a98/dunk-high-retro-se-shoes-tXRLdK.png",
                "price": 19,
                "count": 1,
                "content": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court." ,
                "description": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court."
            },
            {
                "id": "3",
                "title": "Nike Air Monarch IV",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/uirypqqxq83mwcjbf9ej/air-monarch-iv-training-shoe-cc3XbD.png",
                "price": 50,
                "count": 1,
                "content": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court." ,
                "description": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court."
            },
            {
                "id": "4",
                "title": "Nike Air Force 1 '07 LV8",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14e557a6-5c91-4baf-a9e5-ac1d34262b6b/air-force-1-07-lv8-shoe-dGlKF3.png",
                "price": 15,
                "count": 1,
                "content": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court." ,
                "description": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court."
            },
            {
                "id": "5",
                "title": "Nike Blazer Mid '77 Jumbo",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a39b3392-1672-4364-a4e9-0c948f4cafcf/blazer-mid-77-jumbo-shoes-kWXfC7.png",
                "price": 10,
                "count": 1,
                "content": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court." ,
                "description": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court."
            },
            {
                "id": "6",
                "title": "NikeCourt Zoom Vapor Cage 4 Rafa",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a309e2eb-314b-422b-84b7-b20b557fcdfb/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-cS7wct.png",
                "price": 17,
                "count": 1,
                "content": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court." ,
                "description": "nnovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. Signature Rafael Nadal details let you rep your favourite player while you run the court."
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}