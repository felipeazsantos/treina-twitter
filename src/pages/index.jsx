import TextInput from "../components/TextInput";
import Tweet from "../components/Tweet";
import { useState } from "react";
import styles from './Index.module.css';

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
            <h1 className={styles.pageTitle}>TreinaTwitter</h1>
            <div className={styles.tweetContainer}>
                <img 
                    className={styles.avatar} 
                    src={'https://github.com/felipeazsantos.png'} 
                    alt="" />
                <TextInput 
                    placeholder={'O que está acontecendo'}
                    value={text}
                    onChange={onTextChange}
                    maxLength={maxLength} 
                />
            </div>
            <div className={styles.buttonContainer}>
                <div>{text.length} / {maxLength}</div>
                <button
                    className={styles.tweetButton} 
                    onClick={sendTweet}>Tweetar</button>
            </div>

            <ul>
                  {tweetList.map((tweet, i) => {
                    return (
                        <li>
                            <Tweet key={i}>{tweet}</Tweet>
                        </li>
                    )
                  })}
            </ul>
        </div>
    )
}