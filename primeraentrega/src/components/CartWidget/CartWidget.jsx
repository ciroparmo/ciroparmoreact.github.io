import React from "react";
import './cartwidget.css'

const CartWidget = ({numero}) => {
  return (
    <div className="container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti6bXRtDG7kIS6JlbHYhWxLgMfkn8SyhDsg&usqp=CAU"></img>
      <span> {numero} </span>
    </div>
  )
}

export default CartWidget;