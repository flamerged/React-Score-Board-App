const players = [
    {
        playerName: 'Guil',
        playerScore: 50,
        id: 1
    },
    {
        playerName: 'Treasure',
        playerScore: 85,
        id: 2
    },
    {
        playerName: 'Ashley',
        playerScore: 95,
        id: 3
    },
    {
        playerName: 'James',
        playerScore: 80,
        id: 4
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

class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
}

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
                    key={player.id.toString()}
                />
            ))}
        </div>
    );
};

ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);
