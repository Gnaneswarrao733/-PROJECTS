
import React from 'react';
import './Timer.css';
import './Todolist.css';
import './Dynamicbackground.css';
import './Randomquotegenerator.css';
import './Fileuploader.css';
import './Authentication.css';




import Timer from './Timer';
import Todolist from './Todolist';
import Dynamicbackground from './Dynamicbackground';
import Randomquotegenerator from './Randomquotegenerator';
import FileUploader from './Fileuploader';
import Authentication from './Authentication';




const App = () => {
    return (
        <div>
            <Timer />
            <Todolist />
            <Dynamicbackground />
            <Randomquotegenerator />
            <FileUploader />
            <Authentication />
            


            
        </div>
    );
};

export default App;
