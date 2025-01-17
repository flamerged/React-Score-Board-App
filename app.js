const players = [];

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
            <span className="player-name">
                <button
                    className="remove-player"
                    onClick={() => props.removePlayer(props.id)}
                >
                    ✖
                </button>
                {props.playerName}
            </span>
            <Counter />
        </div>
    );
};

class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    };

    decrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score - 1
        }));
    };

    render() {
        return (
            <div className="counter">
                <button
                    className="counter-action decrement"
                    onClick={this.decrementScore}
                >
                    {' '}
                    -{' '}
                </button>
                <span className="counter-score">{this.state.score}</span>
                <button
                    className="counter-action increment"
                    onClick={this.incrementScore}
                >
                    {' '}
                    +{' '}
                </button>
            </div>
        );
    }
}

class App extends React.Component {
    state = {
        players: [
            {
                playerName: 'Guil',
                id: 1
            },
            {
                playerName: 'Treasure',
                id: 2
            },
            {
                playerName: 'Ashley',
                id: 3
            },
            {
                playerName: 'James',
                id: 4
            }
        ]
    };

    handleRemovePlayer = id => {
        this.setState(prevState => ({
            players: prevState.players.filter(player => player.id !== id)
        }));
    };

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={this.state.players.length}
                />

                {/* Player list*/}
                {this.state.players.map(player => (
                    <Player
                        playerName={player.playerName}
                        key={player.id.toString()}
                        id={player.id}
                        removePlayer={this.handleRemovePlayer}
                    />
                ))}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
