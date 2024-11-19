import React from "react";
import axios from "axios"; // uimport axios
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileCard from "./CarCard";
import "../carWebsite/carProfile.css";


class ProductApiCall extends React.Component {

 
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        axios.get(
                "https://dummyjson.com/products"
            )
            .then((res) => {
                this.setState({
                    items: res.data,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );

        return (
            <div>
               <div class="mydiv"   align="center">
     Mercedes Owner List 
     <hr></hr>
     {/* <ul>
     <Link to='/'>Home</Link>
  
</ul> */}


        </div>
        
                <div class="flex-container">
                    {items.products.map((item) => (

                            <ProfileCard name={item.title} email={item.category} 
                            price={item.price} stock={item.stock} url={item.thumbnail}/>
      
                       
                    ))}
                      
                </div>
            </div>
        );
    }
}

export default ProductApiCall;