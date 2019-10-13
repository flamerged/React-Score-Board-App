const players = [
    {
        playerName: 'Guil',
        playerScore: 50
    },
    {
        playerName: 'Treasure',
        playerScore: 85
    },
    {
        playerName: 'Ashley',
        playerScore: 95
    },
    {
        playerName: 'James',
        playerScore: 80
    }
];

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

const App = props => {
    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                totalPlayers={props.initialPlayers.length}
            />

            {/* Player list*/}
            {props.initialPlayers.map(player => (
                <Player
                    playerName={player.playerName}
                    playerScore={player.playerScore}
                />
            ))}
        </div>
    );
};

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);
