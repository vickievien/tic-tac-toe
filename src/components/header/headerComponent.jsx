import PlayerTurnComponent from "./playerTurnComponent";
import RestartComponent from "./restartComponent";
import XoLogoComponent from "./xoLogoComponent";
const HeaderComponent = (props) => {
    return (
        <header>
            <XoLogoComponent />
            <PlayerTurnComponent playerState={props.playerState}/>
            <RestartComponent restartDisplay={props.restartDisplay} setRestartDisplay={props.setRestartDisplay} toggleRestartDisplay={props.toggleRestartDisplay}/>
        </header>
    )
}
export default HeaderComponent;