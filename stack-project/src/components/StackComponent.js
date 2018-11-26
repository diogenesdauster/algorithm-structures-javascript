import React,{useState,useRef} from "react";
import MyStack from "../utils/MyStack";

function StackComponent(){
  const [stack] = useState(()=>{
    return new MyStack()
  });
  const [size,SetSize] = useState(stack.size());
  const [lastElement,SetLastElement] = useState(stack.peek());

  const textInput = useRef()

  function handleClick(e){

    switch (e.target.innerText) {
      case "Add":
        stack.push(textInput.current.value)
        break;
      case "Remove":
        stack.pop()
        break;
      case "Clear":
        stack.clear()
        break;
      default:
        break;
    }

    SetSize(stack.size())
    SetLastElement(stack.peek())

  }

  return (
    <>
      <input
          type="text"
          ref={textInput} />
       <button onClick={handleClick} >
          Add
      </button>
       <button onClick={handleClick} >
          Remove
      </button>
       <button onClick={handleClick} >
          Clear
      </button>
      <br/>
      <table>
        <thead>
        <tr>
          <th>Size</th>
          <th>Top Value</th>
        </tr>
        </thead>
        <tbody>
          <tr>
          <td>{size}</td>
          <td>{lastElement}</td>
          </tr>
        </tbody>
      </table>
    </>
  );

}

export default StackComponent
