import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import rocketImg from './assets/rocket.png';
import SignUp from './components/SignUp';

const App = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4">
                    <SignUp />
                </div>
                <div className="col-md-7 my-auto">
                    <img className="img-fluid w-100" src={rocketImg} alt="check source" />
                </div>
            </div>
        </div>
    )
}

export default App;
