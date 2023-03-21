import React from 'react';
import './App.css';
import Technologies from './Technologies';
import Header from './Header';
import Star from "./Star";

const App = () => {
    return (
        <div>
            <AppTitle/>
            <Star/>
            <Header/>
            <Technologies/>
        </div>
    );
}

function AppTitle () {
    return <>Hello everybody</>
}
export default App;
