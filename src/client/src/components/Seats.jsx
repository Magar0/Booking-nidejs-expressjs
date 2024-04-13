import React from 'react'

const Seats = ({ seats, changeSeat, selectedSeat }) => {
    return (
        <div className='seat-row'>
            <h3 >Select the Seats</h3>
            <div>
                {
                    seats.map((item, ind) => (

                        <div className={`slot-column ${selectedSeat === item ? "slot-column-selected" : null}`} key={ind} >
                            <p>{item}</p>
                            <input type="number" value={selectedSeat[item] || 0} onChange={(e) => changeSeat(e, item)} min={0} max={30} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Seats