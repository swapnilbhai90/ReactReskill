import React from "react";
import axios from "axios"; // uimport axios
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class ApiCall extends React.Component {

 
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
            <div className="App">
                <h1 className="geeks">Api Call</h1>
                <h3>Fetch data from an api in react</h3>
                <div className="container">
                    {items.map((item) => (
                        <div className="item" onClick={console.log("data")}>
                            <ol key={item.id}>
                                <div>

                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.username},
                                </div>
                                <div>
                                    Full_Name: {item.name},
                                </div>
                                <div>
                                     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ApiCall;