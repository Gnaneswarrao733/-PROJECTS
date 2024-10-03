
import React from 'react';
import './CounterApp.css';
import './RealtimeInput.css';
import './Listcomponent.css';
import './Toggleswitch.css';
import './Calculator.css';
import './Datafetch.css';


import CounterApp from './CounterApp';
import RealtimeInput from './RealtimeInput';
import Listcomponent from './Listcomponent';
import Toggleswitch from './Toggleswitch';
import Calculator from './Calculator';
import Datafetch from './Datafetch';



const App = () => {
    return (
        <div>
            <CounterApp />
            <RealtimeInput />
            <Listcomponent />
            <Toggleswitch />
            <Calculator />
            <Datafetch />
            
        </div>
    );
};

export default App;
