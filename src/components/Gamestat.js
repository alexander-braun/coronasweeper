import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import setGrid from '../actions/setGrid'
import setGameState from '../actions/setGameState'

function Gamestat(props) {

  const faces = ['☹️','🙂', '😎']

  const restartGame = () => {
    props.setGrid(props.genGrid())
    props.setGameState('running')
  }

  return (
    <div id="game_header">
        <div id="flagcounter" className="brightred">010</div>
        <div id="gameface" onClick={restartGame}>{props.gameState === 'lost' ? faces[0] : props.gameState === 'win' ? faces[2] : faces[1]}</div>
        <div id="time" className="brightred">111</div>
    </div>
  )
}

const mapStateToProps = state => ({
  grid: state.grid,
  gameState: state.gameState
})

const mapActionsToProps = {
  setGrid,
  setGameState
}

export default React.memo(connect(mapStateToProps, mapActionsToProps)(Gamestat))