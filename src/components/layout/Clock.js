import React from 'react';

const Clock=()=>{
    const [time,setTime]=React.useState(new Date());

    React.useEffect(()=>{
        setInterval(()=>tick(),1000)
    })
    function tick(){
        setTime(new Date());
    }
    return(
        <div class="center card">
            <span class ="white-text">{time.toLocaleTimeString()}</span>
        </div>
    )
}

export default Clock;