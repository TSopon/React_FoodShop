import React ,{Component} from "react";

export default class Store extends Component{
    render(){
        const {id,name,img,detail,address}=this.props.shop;
        console.log(this.props.shopS)
        return(
            <div>
                <img src={img} width="450px" height="450px"/>
                <h2>{name}</h2>
                <p>{detail}</p>
                <p>{address}</p>
            </div>

        );
    }
}