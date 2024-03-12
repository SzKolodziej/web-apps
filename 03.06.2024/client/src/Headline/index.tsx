interface headlineProps{
    text: string,
    level?: 1 | 2
}

const Headline = ({text, level=1}: headlineProps)=>{
    switch(level){
        case 1:
            return(<h1>{text}</h1>)
        case 2:
            return(<h2>{text}</h2>)
    }
}

export default Headline