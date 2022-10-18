const RestartComponent = (props) => {
    return (
        <div className="restart-container button-silver" onClick={props.toggleRestartDisplay}>
            <img src="/assets/icon-restart.svg" alt="restart" />
        </div>
    )
}
export default RestartComponent;