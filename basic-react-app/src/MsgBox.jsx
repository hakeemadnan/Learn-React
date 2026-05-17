function Message({username="adnan",textcolor ="black"}){
    
    return(
        <div className="msg">
            <h4 style={{color: textcolor}}>Hello,{username}</h4>
        </div>
    )
}

export default Message;


