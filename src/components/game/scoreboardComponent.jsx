const ScoreboardComponent = (props) => {
    return (
        <section className="scoreboard-container">
            <section className="score-container">
                <h3>Player X</h3>
                <p>{props.xCounter}</p>
            </section>
            <section className="score-container">
                <h3>Ties</h3>
                <p>{props.tieCounter}</p>
            </section>
            <section className="score-container">
                <h3>Player O</h3>
                <p>{props.oCounter}</p>
            </section>
        </section>
    )
}
export default ScoreboardComponent;