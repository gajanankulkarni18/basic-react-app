import logo from './logo.svg';
import './App.css';
import DComponent, { TestComponent } from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import HelloComponent from './components/HelloComponent';
import PropsFunctionalComponent from './components/PropsFunctionalComponent';
import PropsClassComponent from './components/PropsClassComponent';
import StateComponent from './components/StateComponent';
import CounterClassComponent from './components/CounterClassComponent';
import HookCounterComponent from './components/HookCounterComponent';

function App() {
  return (
    <div className="App">
      {/* <DComponent />
      <TestComponent /> */}
      {/* <ClassComponent /> */}
      {/* <HelloComponent /> */}
      {/* <PropsFunctionalComponent name="Gajanan" Location="India" /> */}
      {/* <PropsClassComponent name="Rohit" Location="USA" /> */}
      {/* <StateComponent /> */}
      {/* <CounterClassComponent /> */}
      {/* <HookCounterComponent /> */}
      <br></br>
      <br></br>
      <a href="http://intelliconnect.stg.cch.com" target="_blank">Intelliconnect STG</a>
      <br></br>
      <br></br>
      <br></br>
      <a href="https://intelliconnect-onega.wkgadev.net/" target="_blank">Intelliconnect INTA</a>
      <br></br>
      <br></br>
      <br></br>
      <a href="http://intelliconnect-qa.wk-onega.com/" target="_blank">Intelliconnect QA</a>

    </div>
  );
}

export default App;
