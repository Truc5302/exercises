import React from 'react'
import { Players } from '../Share/ListOfPlayers'
export default class Players extends Component {
    return(
        <div className = 'container' >
        {
            Players.map((player) => (
                <div className='column'>
                    <div className='card'>
                        <img src={player.img} />
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            ))
        }
        </div>
    )
    }