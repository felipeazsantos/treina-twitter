import { useState } from 'react'
import styles from './TextInput.module.css'

export default function TextInput({ placeholder = 'O que está acontecendo?', maxLength, ...props}) {
    const [text, setText] = useState('');

    function onTextChange(e) {
        const value = e.target.value;
        if (value.length <= maxLength) {
            setText(value)
        }
    }

    return (
        <div>
            <textarea 
                className={styles.input} 
                placeholder={placeholder} 
                maxLength={maxLength}
                value={text}
                onChange={onTextChange} 
                {...props} />
            <p>{text.length} / {maxLength}</p>
        </div>
    )
}