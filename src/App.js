import './App.css';
import {useState} from "react";
import {Tr10, Tr8, Tr16} from "./translatefunctions/tr";

function App() {
    let [tenState, tenSetState] = useState();
    let [eightState, eightSetState] = useState();
    let [sixteenState, sixteenSetState] = useState();

    let tenInput = (e)=> {
     let sum = e.target.value
     tenSetState(Tr10(sum))
    }
    let eightInput =(e)=>{
        let sum = e.target.value
        eightSetState(Tr8(sum))
    }
    let sixInput =(e)=>{
        let sum = e.target.value
        sixteenSetState(Tr16(sum))
    }
  return (
    <div className="container">
        <h1 className="p-3 text-center">Калькулятор систем счислений</h1>
        <h5 className="p-1">Из 2-й системы в 10-ю систему</h5>

      <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={tenInput} placeholder="Введите 2-ое число"/>
      </div>
        <div className="alert alert-primary" role="alert">
            <h4>  {tenState} </h4>
        </div>

        <h5 className="p-1">Из 2-й системы в 8-ю систему</h5>
        <div className="input-group mb-3">
            <input type="text" onChange={eightInput} className="form-control" placeholder="Введите 2-ое число"/>
        </div>
        <div className="alert alert-success" role="alert">
            <h4> {eightState} </h4>
        </div>

        <h5 className="p-1">Из 2-й системы в 16-ю систему</h5>
        <div className="input-group mb-3">
  <input  onChange={sixInput} type="text" className="form-control" placeholder="Введите 2-ое число" />
        </div>
        <div className="alert alert-info" role="alert">
            <h4> {sixteenState} </h4>
        </div>
    </div>
  );
}

export default App;
