import React from "react";
import axios from "axios"; // uimport axios
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProfileCard from "./CarCard";
import "../carWebsite/carProfile.css";


class CarApiCall extends React.Component {

 
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
                "https://jsonplaceholder.typicode.com/users"
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
                    {items.map((item) => (

                            <ProfileCard name={item.name} email={item.email} url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      
                       
                    ))}
                      {items.map((item) => (

<ProfileCard text={item.name} email={item.email} url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>


))}
                </div>
            </div>
        );
    }
}

export default CarApiCall;