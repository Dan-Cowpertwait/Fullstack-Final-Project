import React from 'react'

export default class HomePage extends React.Component{
    render(){
        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/logo.gif'} alt="logo" />
                <h2> Welcome EdgeRunner </h2>
            </div>
        )
    }
}