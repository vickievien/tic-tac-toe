import GameGridItemComponent from "./gameGridItemComponent";

const GameGridComponent = (props) => {
    let gridItemComponents = [];
    for (let i=0; i < 9; i++) {
        gridItemComponents.push (
            <GameGridItemComponent className={`grid-item-${i}`} key={`id-${i}`} togglePlayerState={props.togglePlayerState} playerState={props.playerState}  gridItemState={props.gridItemState} setGridItemState={props.setGridItemState} gridMark={props.gridMark} i={i}/>
        )
    }
    return (
        <section className="game-grid-container">
            {gridItemComponents}
        </section>
    )
}
export default GameGridComponent;