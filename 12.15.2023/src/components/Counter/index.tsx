import React from 'react'
import Paragraph from "../Paragraph";

function Counter(): React.JSX.Element{
    const [count, setCount]  = React.useState<number>(0)

    return (
        <>
            <Paragraph content={`Clicked ${count} time(s)`}/>
            <button onClick={() => setCount((old)=> ++old)}>Click me</button>
            <button onClick={() => setCount(0)}>Clear</button>
        </>
    )
}

export default Counter