import React from 'react'
import './index.scss'

type ParagraphClass = 'small' | 'medium' | 'large'
interface ParagraphProps{
    content: string
    customClass?: ParagraphClass
}

function Paragraph({content, customClass = 'medium'}: ParagraphProps): React.JSX.Element{
    return <p className={`paragraph paragraph__${customClass}`}>{content}</p>
}

export default Paragraph