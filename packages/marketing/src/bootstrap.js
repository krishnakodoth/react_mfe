
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


console.log("Marketing App !");

// Mount function to start the app

const mount = (el) => {
    ReactDOM.render(<App />, el);
};


// If we are in development and in isolation
// call mount immediately

console.log("NODE_ENV", process.env.NODE_ENV);
if(process.env.NODE_ENV === "development"){
  console.log("Development mode");
    const devRoot = document.querySelector("#_marketing-dev-root");
    if(devRoot){
        mount(devRoot);
    }
}

// If we are in development but running through container
// and we should export the mount function

export { mount };
