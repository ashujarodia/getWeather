import React from 'react'

export default function component() {
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const weekNames =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const date = new Date();
 
    const finalDate = `${weekNames[date.getDay()]}, ${monthNames[ date.getMonth()]} ` + date.getDate() 

    return (
        <>
            {finalDate}
        </>
    )
}
