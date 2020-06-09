import React from "react"

const Pizza = (props) => {

  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" name={props.id} onClick={props.onClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
 