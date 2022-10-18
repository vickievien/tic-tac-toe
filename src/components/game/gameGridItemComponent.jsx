const GameGridItemComponent = (props) => {
    return (
        <div className={`semi-navy-container game-grid-item-container ${props.className}`} onClick={() => props.togglePlayerState(props.i)}>
            {props.gridMarkDisplay[props.i]}
        </div>
    )
}
export default GameGridItemComponent;