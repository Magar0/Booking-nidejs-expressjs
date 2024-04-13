import React, { useEffect, useState } from "react";
import '../styles/App.css';
import '../styles/bootstrap.min.css'
import { movies, slots, seats } from "./data";
import SelectMovie from "./SelectMovie";
import TimeSlot from "./TimeSlot";
import Seats from "./Seats";
import LastBooking from "./LastBooking";

const App = () => {

  const [movie, setMovie] = useState();
  const [slot, setSlot] = useState();
  const [seat, setSeat] = useState({
    A1: 0, A2: 0, A3: 0, A4: 0, D1: 0, D2: 0
  });
  const [lastBooking, setLastBooking] = useState({});

  //handle change in input
  const changeMovie = (e) => setMovie(e);
  const changeSlot = (e) => setSlot(e);
  const changeSeat = (e, item) => {
    setSeat(pre => (
      ({ ...pre, [item]: Number(e.target.value) })
    ))
  }

  //fetching last booking details
  const getLastBooking = () => {
    fetch('/api/booking')
      .then(res => res.json())
      .then(data => setLastBooking(data))
      .catch(err => console.log(err))

  }

  //booking seat
  const handleSubmit = async () => {
    if (!movie || !slot) {
      return alert("Please select a movie and time slot")

    }
    if (!seat.A1 && !seat.A2 && !seat.A3 && !seat.A4 && !seat.D1 && !seat.D2) {
      return alert("please select at least one seat")
    }

    try {
      const option = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie, slot, seats: seat })
      }
      const res = await fetch("/api/booking", option)
      if (res.ok) {
        setLastBooking({ seats: seat, slot, movie })
        // resetting input on success
        setMovie()
        setSlot()
        setSeat({
          A1: 0, A2: 0, A3: 0, A4: 0, D1: 0, D2: 0
        })
        alert("Booking successful!")
      } else alert("Error Booking!!")
    } catch (err) {
      console.log(err);
      alert("Error Booking!!")
    }

  }

  useEffect(() => {
    getLastBooking();
    const storedMovie = localStorage.getItem("movie")
    const storedSeat = JSON.parse(localStorage.getItem("seats"))
    const storedSlot = localStorage.getItem("slot")
    if (storedMovie) {
      setMovie(storedMovie)
    }
    if (storedSeat) {
      setSeat(storedSeat)
    }
    if (storedSlot) {
      setSlot(storedSlot)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("movie", movie)
    localStorage.setItem("seats", JSON.stringify(seat))
    localStorage.setItem("slot", slot)
  }, [movie, slot, seat])
  // write your code here
  return (<>
    <div className="container pt-4 mainBox">
      <h1>Book The Show!!</h1>
      <div className="row ">

        <div className="col-8">
          <SelectMovie movies={movies} changeMovie={changeMovie} selectedMovie={movie} />
          <TimeSlot slots={slots} changeSlot={changeSlot} selectedSlot={slot} />
          <Seats seats={seats} changeSeat={changeSeat} selectedSeat={seat} />
          <button className=" btn btn-primary" onClick={handleSubmit}>Book Now</button>
        </div>
        <div className="col-3">
          <LastBooking lastBookedData={lastBooking} />
        </div>
      </div>
    </div>
  </>);
}


export default App;
