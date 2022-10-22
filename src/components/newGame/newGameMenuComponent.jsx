import { useState } from "react";
import XoLogoComponent from "../header/xoLogoComponent";
const NewGameMenuComponent = (props) => {
    const [xMark, setXMark] = useState(false);
    const [oMark, setOMark] = useState(false);
    const [playerSelectErrorModal, setPlayerErrorModal] = useState(false);
    const toggleXMark = () => {
        setXMark(!xMark);
        if (oMark) {
            setOMark(!oMark);
        }
    }
    const toggleOMark = () => {
        setOMark(!oMark);
        if (xMark) {
            setXMark(!xMark);
        }
    }
    const playerSelectionError = () => {
        setPlayerErrorModal(!playerSelectErrorModal);
    }
    return (
        <div className="new-game-menu-container">
            <XoLogoComponent />
            <div className="new-game-menu-player-container semi-navy-container">
                <p>Pick Player 1's Mark</p>
                <div className="new-game-menu-player-selection">
                    <div onClick={toggleXMark}>
                        {xMark
                        ?
                        <img src="/assets/icon-x.svg" alt="" />
                        :
                        <img src="/assets/icon-x-silver.svg" alt="" />
                        }
                    </div>
                    <div className={oMark ? 'o-selected' : ''} onClick={toggleOMark}>
                        <img src="/assets/icon-o-outline.svg" alt="" />
                    </div>
                </div>
                <p>Remember: X goes first</p>
            </div>
            {/* <a href='#' className='button button-yellow'>New Game (vs CPU)</a> */}
            <a href='#' className='button button-light-blue'
            onClick={(!xMark && !oMark) ? playerSelectionError : props.toggleNewGameModal}>New Game (vs Player)</a>
            {playerSelectErrorModal ?
            <p className="player-mark-error-message">Please pick a mark for Player 1</p>
            : ''}
        </div>
    )
}
export default NewGameMenuComponent;