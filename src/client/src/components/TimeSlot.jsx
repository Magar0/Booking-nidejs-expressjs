import React from 'react'

const TimeSlot = ({ slots, changeSlot, selectedSlot }) => {
    return (
        <div className='slot-row'>
            <h3>Select a Time Slot</h3>
            <div>
                {
                    slots.map((item, ind) => (
                        <div className={`slot-column ${selectedSlot === item ? "slot-column-selected" : null}`} key={ind} onClick={() => changeSlot(item)} >{item}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default TimeSlot