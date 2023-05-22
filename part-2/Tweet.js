"use strict";

function Tweet({ username, name, date, message }) {
    
    const myMessage = {
        color: "black",
        backgroundColor: "lightblue",
        marginTop: "1rem"
    }
    


    return (
        <div className="message">
            <div>username: {username} name: {name}</div>
            <div> message: {message} date: {date}</div>
        </div>)
}