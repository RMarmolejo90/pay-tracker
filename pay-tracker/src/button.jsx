import React,{ useState, useEffect }from "react";



function ClockBtn(props){
    const [CurrentTimer, updateCount] = useState(0);
    useEffect(() => {
        updateCount
        return () => {
            (CurrentTimer + 1)
        };
    }, 1000);

    return(
        <div>
            <h2>
                {CurrentTimer}
            </h2>
            <button
            onClick={(e)=>{
                updateCount(e.target.value)
            }}>
                Clock-In
            </button>
        </div>
    )
}

export default ClockBtn;