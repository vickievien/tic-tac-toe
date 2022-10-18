const GameGridItemComponent = (props) => {
    return (
        <div className={`semi-navy-container game-grid-item-container ${props.className} ${props.playerState === 'x' ? 'x-hover' : props.playerState === 'o' ? 'o-hover' : "" } ${props.gridMarkDisplay[props.i] === null ? "" : 'no-hover'}`} onClick={() => props.togglePlayerState(props.i)}>
            {props.gridMarkDisplay[props.i]}
            {/* {props.gridMark[props.i]} */}
        </div>
    )
}
export default GameGridItemComponent;

