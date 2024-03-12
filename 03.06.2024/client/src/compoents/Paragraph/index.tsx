interface ParagraphProps{
    text?: string
}

const Paragraph = ({text='fields with \'*\' are required'}:ParagraphProps)=>{
    return(
        <p>{text}</p>
    )
}

export default Paragraph