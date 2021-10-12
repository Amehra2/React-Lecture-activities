import React from "react";
import ReactDom from 'react-dom';
import './index.css';
import App from '/App';
import "./style.css";

ReactDOM.render(
  <App />,
  document.getElementById('Root')
);

function Welcome(props){
  return <h1>hello, {props.name}</h1>
}
function clickhandler(){
  window.alert("Hello from React!");
}

function App() {
  return (
    <div>
      <Welcome name=" Mike"/>
      <Welcome name= "Sarah"/>
      <h1 style= {{color:"red"}}> Some Text</h1>
      <button onClick={clickhandler}>
        show message
        </button>


        </div>

  );



export default App;

}
