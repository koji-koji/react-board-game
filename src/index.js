import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// controlled componentになった。
class Square extends React.Component {

  render() {
    return (
      <button
        className="square"
        // this.props.onClick()で、BoardのonClickイベントハンドラをコールする。その結果、handleClickがコールされる
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squeares: Array(9).fill(null)
    };
  }

  handleClick(i) {
    // イミュータブルにしたいので、constで書いて、新しく設定している。
    // これにより、巻き戻しの実装が簡単になる。
    // ミュータブルだとオブジェクトツリーの全体を走査するよ必要がある。
    // pure componentを構築しやすい。
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squeares[i]}
        onClick={() => {this.handleClick(i)}}
      />
    )
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
