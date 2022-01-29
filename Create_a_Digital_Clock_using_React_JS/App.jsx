import React, { useState } from "react";

const App = () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);
    const updateTime= () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    };

    setInterval(updateTime, 1000);
return(
<>
    <h1> {ctime} </h1>
    
</>

);

}

export default App;