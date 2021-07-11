import React from 'react';
import {Redirect, Route} from "react-router-dom";


function ProtectedRoute({isAuth, component: Component, ...rest}) {
    return ( <Route {...rest} render={(props)=>{
            if(isAuth){
                console.log('not auth')
                return <Component />
            }else {
                return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            }
        }}
        />
    )
}

export default ProtectedRoute