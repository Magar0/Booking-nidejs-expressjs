import React from 'react'

const LastBooking = ({ lastBookedData }) => {
    const { seats, movie, slot, message } = lastBookedData

    return (
        <div className='last-order '>
            <h3>Last Booking Details:</h3>
            {
                message ? <p>No booking details found.</p> :
                    <>
                        <ul className='list-unstyled '>
                            <li>seats:
                                <ul>
                                    <li>A1: <span>{seats?.A1}</span></li>
                                    <li>A2: <span>{seats?.A2}</span></li>
                                    <li>A3: <span>{seats?.A3}</span></li>
                                    <li>A4: <span>{seats?.A4}</span></li>
                                    <li>D1: <span>{seats?.D1}</span></li>
                                    <li>D2: <span>{seats?.D2}</span></li>
                                </ul>
                            </li>
                            <li>MOVIE: <span>{movie}</span></li>
                            <li>SLOT: <span>{slot}</span></li>
                        </ul>
                    </>
            }
        </div>
    )
}

export default LastBooking