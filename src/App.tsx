import React from 'react';
import './App.css';
<<<<<<< HEAD
import Technologies from './Technologies';
import Header from './Header';
import Footer from "./Footer";
=======
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
>>>>>>> d483ff06a52a7542f27292ca3f77485f58bd1870


const App = () => {
    return (
        <div>
<<<<<<< HEAD
            <Header/>
            <Technologies/>
            <Footer/>
=======
            <PageTitle title={'This is APP components'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={1}/>
            <Accordion title={'Menu'}/>
            <Accordion title={'Users'}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
>>>>>>> d483ff06a52a7542f27292ca3f77485f58bd1870
        </div>
    );
}

<<<<<<< HEAD
=======
function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}
>>>>>>> d483ff06a52a7542f27292ca3f77485f58bd1870

export default App;
