import React from "react"
import Omark from "./oMarkComponent"
import Xmark from "./xMarkComponent"
import Tiemark from "./tieMarkComponent"
const NextRoundModalComponent = (props) => {
    const toggleQuitGame = () => {
        props.setNewGameModal(true);
    }
    return (
            <div className="modal-full-container">
            <section className="modal-container">
                {props.winnerDisplay === 'x' ? <Xmark /> : props.winnerDisplay === 'o' ? <Omark /> : props.winnerDisplay === 'tie' ? <Tiemark /> :""}
                <div>
                    <a href='#' className='button button-silver button-modal' onClick={toggleQuitGame}>Quit</a>
                    <a href='#' className='button button-yellow button-modal'onClick={props.clearRound}>Next Round</a>
                </div>
            </section>
            </div>
    )
}
export default NextRoundModalComponent;