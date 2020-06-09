import React from "react"

const PizzaForm = (props) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" 
            placeholder="Pizza Topping"
            name="topping"
            onChange={props.change} 
            value={props.pizzaInForm.topping}
            />
        </div>
        <div className="col">
          <select className="form-control"
            name="size"
            onChange={props.change} 
            value={props.pizzaInForm.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio"/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" name={props.pizzaInForm.id} onClick={props.submit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
 