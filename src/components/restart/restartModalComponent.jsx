const RestartModalComponent = (props) => {
    return (
            <div className="modal-full-container">
            <section className="modal-container">
                <div className="message-container">
                    <p>Restart Game?</p>
                </div>
                <div>
                    <a href='#' className='button button-silver button-modal' onClick={props.toggleRestartDisplay}>No, cancel</a>
                    <a href='#' className='button button-yellow button-modal' onClick={props.clearGrid}>Next Round</a>
                </div>
            </section>
            </div>
    )
}
export default RestartModalComponent;