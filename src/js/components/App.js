import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { userSelector, fetchUserDetails } from '../slices/usersreducer'
import { validationSelector, checkInputValidation, removeInputValidation } from "../slices/validationreducer"


const App = () => {

  const { users } = useSelector(userSelector)
  const { requiredEmptyField } = useSelector(validationSelector)
  const [name, setValue] = useState("")
  const [title, setTitle] = useState("")
  const [address, setAddress] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(fetchUserDetails())
    console.log(users)

  }, [dispatch])

  const renderRecipes = () => {
    return users.map(recipe =>
      <div key={recipe.id} className='tile'>
        <h2>{recipe.id}</h2>
        <p>{recipe.name}</p>
      </div>
    )
  }
  const blurValue = (event) => {
    switch (event.target.name) {
      case "field1": name.length === 0 ? dispatch(checkInputValidation("required name is empty")) : ""
        break;
      default:
        break;

    }
    //  if(event.target.value.length===0) return dispatch(checkInputValidation("bokka")
    //   )
  }
  const changeTitle = (event) => {
    setTitle(event.target.value)
  }

  const changeValue = (e) => {
let name, address,title;
    switch (e.target.name){
    case "1" : setValue(e.target.value)
    break;
    case "2" : setAddress(e.target.value)
    break;
    case "3" : setTitle(e.target.value)
    break;
    default : alert("sarriga chesi dengu");
    break;

    }
   
  }
  const changeAddress = (event) => {
    setAddress(event.target.value)
  }
  const submitInput = () => {

    if (name.length !== 0 || address.length === 0 || title.length > 10) return dispatch(removeInputValidation())
  }


  return (
    <div>
      <lable>name :  &nbsp;</lable>
      <input value={name} name="1" onChange={changeValue} onBlur={blurValue} />
      {name.length === 0 && <p style={{ color: "red" }}>{requiredEmptyField}</p>}
      <br />
      <label>address : &nbsp;</label>
      <input value={address} name="2" onChange={changeAddress} />
      {address.length === 0 && <p style={{ color: "red" }}>{requiredEmptyField}</p>}
      <br />
      <label>title : &nbsp;</label>

      <input value={title} name="3" onChange={changeTitle} />
      {title.length <= 10 && <p style={{ color: "red" }}>{requiredEmptyField}</p>}

      <br />

      <button onClick={submitInput}>submit</button>
      <hr />
      {process.env.API_URL}
      {renderRecipes()}
    </div>
  );
}


export default App;
