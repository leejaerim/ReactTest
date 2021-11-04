import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { Redirect } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

var style = {
  backgroundImage:
    "url(" + "https://media.giphy.com/media/02P36zcZT7NOufHIMo/giphy.gif" + ")",
  width: "10%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }
  logout = () => {
    axios
      .post("http://localhost:8000/app/logout/", {}) //정상 수행
      .then((Response) => {
        if (Response.status === 201 || Response.status === 200) {
          if (Response.data.status === "Success") {
            sessionStorage.removeItem("uid");
            this.props.history.push("/");
          }
        } else {
          alert("로그아웃 실패");
        }
      })
      //에러
      .catch((err) => {
        console.log(err);
      });
  };
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares || squares[i])) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    //this.setState({xIsNext : !xIsNext})
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  render() {
    if (sessionStorage.getItem("uid") == null) {
      return <Redirect to="/" />;
    }
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to  game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner : " + winner;
    } else {
      status = "Next Player : " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <button onClick={this.logout} variant="primary" type="button">
            로그아웃
          </button>
          <section style={style}>
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </section>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
//const numbers = [1, 2, 3];
//const doubled = numbers.map(x => x * 2); // [2, 4, 6]
//다음과 같이 map 객체를 쓸수 있다.
// ========================================
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Game;
// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
