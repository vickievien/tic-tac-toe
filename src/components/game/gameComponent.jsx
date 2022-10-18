import { useState, useEffect } from "react";
import HeaderComponent from "../header/headerComponent";
import NextRoundModalComponent from "../nextRoundModal/nextRoundModalComponent";
import RestartModalComponent from "../restart/restartModalComponent";
import GameGridComponent from "./gameGridComponent";
import ScoreboardComponent from "./scoreboardComponent";

const GameComponent = (props) => {
    const [playerState, setPlayerState] = useState('x');
    const [xArray, setXArray] = useState([]);
    const [oArray, setOArray] = useState([]);
    const [gridMark, setGridMark] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
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
    const xMark = document.createElement('img');
    xMark.src="/assets/icon-x.svg";
    xMark.classList.add('grid-mark');
    xMark.alt="x-mark";
    const oMark = document.createElement('img');
    oMark.src="/assets/icon-o.svg";
    oMark.classList.add('grid-mark');
    oMark.alt="o-mark";
    const clearGrid = () => {
        setGridMark(Array(9).fill(null));
        setRestartDisplay(!restartDisplay);
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
        // for (let i=0; i<winningSets.length; i++) {
        //     let [a,b,c] = winningSets[i];
        //     if (arr[a].props.alt && arr[a].props.alt === arr[b].props.alt && arr[a].props.alt === arr[c].props.alt) {
        //         console.log('win!')
        //         return arr[a].props.alt
        //     }
        //     console.log(arr[a].props.alt);
        //     console.log(arr[b].props.alt);
        //     console.log(arr[c].props.alt);
        // }
        for (let i=0; i<winningSets.length; i++) {
            let [a,b,c] = winningSets[i];
            if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
                console.log('win!')
                return arr[a]
            }
            console.log(`arr[a] is ${arr[a]}`);
            console.log(arr[b]);
            console.log(arr[c]);
        }
        return null
    }
    const togglePlayerState = (gridNum) => {
        console.log(`clicking ${gridNum}`)
        if(determineWinner(gridMark)) {
            console.log('there is a win');
            return null
        }
        if (playerState === 'x') {
            setPlayerState('o');
            // document.querySelectorAll('.game-grid-item-container').forEach(gridItem => {
            //     gridItem.classList.remove("o-hover")
            //     gridItem.classList.add("x-hover")
            // })
        } else {
            setPlayerState('x');
            // document.querySelectorAll('.game-grid-item-container').forEach(gridItem => {
            //     gridItem.classList.remove("x-hover")
            //     gridItem.classList.add("o-hover")
            // })
        }
        if(gridMark[gridNum] === null) {
            let newGridMark = [...gridMark];
            newGridMark[gridNum] = (playerState === 'x' ? <img src="/assets/icon-x.svg" alt="x-mark"/> : <img src="/assets/icon-o.svg" alt="o-mark"/>);
            setGridMark(newGridMark);
        }
        console.log(gridMark);
        // if(
        //     ( (xArray.includes(0)) && xArray.includes(1) && xArray.includes(2) )
        //     ||
        //     ( (xArray.includes(3)) && xArray.includes(4) && xArray.includes(5) )
        //     ||
        //     ( (xArray.includes(6)) && xArray.includes(7) && xArray.includes(8) )
        //     ||
        //     ( (xArray.includes(0)) && xArray.includes(3) && xArray.includes(6) )
        //     ||
        //     ( (xArray.includes(1)) && xArray.includes(4) && xArray.includes(7) )
        //     ||
        //     ( (xArray.includes(2)) && xArray.includes(5) && xArray.includes(8) )
        //     ||
        //     ( (xArray.includes(0)) && xArray.includes(4) && xArray.includes(8) )
        //     ||
        //     ( (xArray.includes(2)) && xArray.includes(4) && xArray.includes(6) )
        // ) {
        //     console.log('X wins')
        //     setToggleEndGameModal(true);
        //     setXCounter(xCounter + 1);
        //     setWinnerDisplay('x');
        // }else if(
        //     ( (oArray.includes(0)) && oArray.includes(1) && oArray.includes(2) )
        //     ||
        //     ( (oArray.includes(3)) && oArray.includes(4) && oArray.includes(5) )
        //     ||
        //     ( (oArray.includes(6)) && oArray.includes(7) && oArray.includes(8) )
        //     ||
        //     ( (oArray.includes(0)) && oArray.includes(3) && oArray.includes(6) )
        //     ||
        //     ( (oArray.includes(1)) && oArray.includes(4) && oArray.includes(7) )
        //     ||
        //     ( (oArray.includes(2)) && oArray.includes(5) && oArray.includes(8) )
        //     ||
        //     ( (oArray.includes(0)) && oArray.includes(4) && oArray.includes(8) )
        //     ||
        //     ( (oArray.includes(2)) && oArray.includes(4) && oArray.includes(6) )
        // ) {
        //     console.log('O wins')
        //     setToggleEndGameModal(true);
        //     setOCounter(oCounter + 1);
        //     setWinnerDisplay('o');
        // } else {
        //     setCountingTie(countingTie +1)
        //     // console.log(countingTie)
        //     if(countingTie === 9) {
        //         setToggleEndGameModal(true);
        //         setTieCounter(tieCounter + 1)
        //         setWinnerDisplay('tie');
        //     }
        // }
    }
    useEffect(() => {
        // if winner is X
        // if winner is X
        // if winner is X
    }, [])
    // useEffect(() => {
    //     let mounted = true;
    //     getList()
    //       .then(items => {
    //         if(mounted) {
    //           setList(items)
    //         }
    //       })
    //     return () => mounted = false;
    //   }, [])
    return (
        <div className="game-component-container">
        <HeaderComponent playerState={playerState} setPlayerState={setPlayerState} restartDisplay={restartDisplay} setRestartDisplay={setRestartDisplay} toggleRestartDisplay={toggleRestartDisplay}/>
        <GameGridComponent playerState={playerState} setPlayerState={setPlayerState} togglePlayerState={togglePlayerState} gridMark={gridMark}/>
        <ScoreboardComponent xCounter={xCounter} oCounter={oCounter} tieCounter={tieCounter}/>
        {toggleEndGameModal ?
        <NextRoundModalComponent winnerDisplay={winnerDisplay} setNewGameModal={props.setNewGameModal} clearGrid={clearGrid}/>
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