import TextInput from "../components/TextInput";
import { useState } from "react";

export default function Index() {
    const [text, setText] = useState('');
    const [tweetList, setTweetList] = useState([])
    const maxLength = 125;

    function onTextChange(e) {
        const value = e.target.value;
        if (value.length <= maxLength) {
            setText(value)
        }
    }

    function sendTweet(e) {
        setTweetList([...tweetList, text]);
        setText('')
    }

    return (
        <div>
            <h1>TreinaTwitter</h1>
            <div>
                <img src={'https://github.com/felipeazsantos.png'} alt="" />
                <TextInput 
                    placeholder={'O que está acontecendo'}
                    value={text}
                    onChange={onTextChange}
                    maxLength={maxLength} 
                />
            </div>
            <div>
                <div>{text.length} / {maxLength}</div>
                <button onClick={sendTweet}>Tweetar</button>
            </div>

            <ul>
                  {tweetList.map((tweet, i) => <li key={i}>{tweet}</li>)}
            </ul>
        </div>
    )
}