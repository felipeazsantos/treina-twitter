export default function Tweet({children}) {
    return (
        <div className={styles.tweetContainer}>
            <img src={'https://github.com/felipeazsantos.png'} />
            <div className={styles.user}>
                <span>Felipe Azevedo</span>
                <span>@felipeazsantos</span>
                <span>há 12 Horas</span>
            </div>
            <div className={styles.tweetText}>
                {children}
            </div>

            
        </div>
        
    )
}