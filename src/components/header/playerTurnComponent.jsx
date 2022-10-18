const PlayerTurnComponent = (props) => {
    // playerState={props.playerState} setPlayerState={props.setPlayerState}
    return (
        <div className="player-turn-container semi-navy-container">
            {props.playerState === 'x' &&
                <img src="/assets/icon-x-silver.svg" alt="x-mark"/>
            }
            {props.playerState === 'o' &&
                <img src="/assets/icon-o-silver.svg" alt="o-mark"/>
            }
            <p className="subtitle">turn</p>
        </div>
    )
}
export default PlayerTurnComponent;