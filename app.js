const Header = props => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span>Players: {props.totalPlayers}</span>
        </header>
    );
};

const Player = props => {
    return (
        <div className="player">
            <span className="player-name">{props.playerName}</span>
            <Counter score={props.playerScore} />
        </div>
    );
};

const Counter = props => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
};

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={1} />

            {/* Player list*/}

            <Player playerName="Guil" playerScore={35} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
