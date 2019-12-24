import React ,{Component} from "react";

export default class Store extends Component{
    render(){
        const {id,name,img,detail,address}=this.props.shop;
        console.log(this.props.shopS)
        return(
            <div className="shop">
                <div className="img-container">
                    <img src={img}/>
                    <span className="close-btn" >
                        <i class="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="shop-info">
                    <h3>{name}</h3>
                    <h4>{detail}</h4>
                    <h5>{address}</h5>
                </div>
                
            </div>

        );
    }
}