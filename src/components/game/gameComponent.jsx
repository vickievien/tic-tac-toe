import { useState, useEffect } from "react";
import HeaderComponent from "../header/headerComponent";
import NextRoundModalComponent from "../nextRoundModal/nextRoundModalComponent";
import RestartModalComponent from "../restart/restartModalComponent";
import GameGridComponent from "./gameGridComponent";
import ScoreboardComponent from "./scoreboardComponent";

const GameComponent = (props) => {
    const [playerState, setPlayerState] = useState('x');
    const [gridMark, setGridMark] = useState(Array(9).fill(null));
    const [gridMarkDisplay, setGridMarkDisplay] = useState(Array(9).fill(null));
    const [xCounter, setXCounter] = useState(0);
    const [oCounter, setOCounter] = useState(0);
    const [countingTie, setCountingTie] = useState(1);
    const [tieCounter, setTieCounter] = useState(0);
    const [winnerDisplay, setWinnerDisplay] = useState('');
    const [toggleEndGameModal, setToggleEndGameModal] = useState(false);
    const [restartDisplay, setRestartDisplay] = useState(false);
    const toggleRestartDisplay = () => {
        setRestartDisplay(!restartDisplay)
    }
    
    const clearGrid = () => {
        setGridMark(Array(9).fill(null));
        setGridMarkDisplay(Array(9).fill(null));
        setRestartDisplay(!restartDisplay);
        setCountingTie(0);
    }

    const clearRound = () => {
        setGridMark(Array(9).fill(null));
        setGridMarkDisplay(Array(9).fill(null));
        setToggleEndGameModal(!toggleEndGameModal);
        setCountingTie(0);
    }

    const determineWinner = (arr) => {
        const winningSets = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i=0; i<winningSets.length; i++) {
            let [a,b,c] = winningSets[i];

            if (arr[a] === 'x' && arr[b] === 'x' && arr[c] === 'x') {
                console.log('x wins!');
                setToggleEndGameModal(true);
                setXCounter(xCounter + 1);
                setWinnerDisplay('x');
                return;
            } else if (arr[a] === 'o' && arr[b] === 'o' && arr[c] === 'o') {
                console.log('o wins');
                setToggleEndGameModal(true);
                setOCounter(oCounter + 1);
                setWinnerDisplay('o');
                return;
            } else {
                let newCountingTie = countingTie +1;
                setCountingTie(newCountingTie);
                console.log(countingTie)
                
                if(newCountingTie === 9) {
                    setToggleEndGameModal(true);
                    setTieCounter(tieCounter + 1)
                    setWinnerDisplay('tie');
                    return;
                }
            }
        }
        return null
    }

    const togglePlayerState = (gridNum) => {
        let newGridMark = [...gridMark];

        if(newGridMark[gridNum] === null) {
            newGridMark[gridNum] = (playerState === 'x' ? "x" : "o");
            
            let newGridMarkDisplay = [...gridMarkDisplay];
            newGridMarkDisplay[gridNum] = (playerState === 'x' ? <img src="/assets/icon-x.svg" alt="x-mark"/> : <img src="/assets/icon-o.svg" alt="o-mark"/>);
            
            setGridMark(newGridMark);
            setGridMarkDisplay(newGridMarkDisplay);
        }

        if(determineWinner(newGridMark)) {
            return;
        }

        if (playerState === 'x') {
            setPlayerState('o');
        } else {
            setPlayerState('x');
        }
    }



    // const togglePlayerState = (gridNum) => {
    //     console.log(`clicking ${gridNum}`)
    //     if(determineWinner(gridMark)) {
    //         console.log('there is a win');
    //         return null
    //     }
    //     if (playerState === 'x') {
    //         setPlayerState('o');
    //     } else {
    //         setPlayerState('x');
    //     }

    //     if(gridMark[gridNum] === null) {
    //         let newGridMark = [...gridMark];
    //         newGridMark[gridNum] = (playerState === 'x' ? "x" : "o");
    //         setGridMark(newGridMark);
            
    //         let newGridMarkDisplay = [...gridMarkDisplay];
    //         newGridMarkDisplay[gridNum] = (playerState === 'x' ? <img src="/assets/icon-x.svg" alt="x-mark"/> : <img src="/assets/icon-o.svg" alt="o-mark"/>);
    //         setGridMarkDisplay(newGridMarkDisplay);
    //     }

    // }

     
    return (
        <div className="game-component-container">
        <HeaderComponent playerState={playerState} setPlayerState={setPlayerState} restartDisplay={restartDisplay} setRestartDisplay={setRestartDisplay} toggleRestartDisplay={toggleRestartDisplay}/>
        <GameGridComponent playerState={playerState} setPlayerState={setPlayerState} togglePlayerState={togglePlayerState} gridMarkDisplay={gridMarkDisplay} gridMark={gridMark}/>
        <ScoreboardComponent xCounter={xCounter} oCounter={oCounter} tieCounter={tieCounter}/>
        {toggleEndGameModal ?
        <NextRoundModalComponent winnerDisplay={winnerDisplay} setNewGameModal={props.setNewGameModal} clearRound={clearRound}/>
        :
        ""
        }
        {restartDisplay ?
        <RestartModalComponent toggleRestartDisplay={toggleRestartDisplay} clearGrid={clearGrid}/>
        :
        ""}
    </div>
    )
}
export default GameComponent;

