import React, { useState } from 'react';

function AddTripForm() {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startMileage, setStartMileage] = useState('');
  const [endMileage, setEndMileage] = useState('');
  const [purpose, setPurpose] = useState('');
  const [passengers, setPassengers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripData = {
      startLocation,
      endLocation,
      startDate,
      startTime,
      endDate,
      endTime,
      startMileage,
      endMileage,
      purpose,
      passengers,
    };
    var existingEntries = JSON.parse(localStorage.getItem("tripData"));
    if(existingEntries == null) existingEntries = [];
    existingEntries.push(tripData);
    localStorage.setItem("tripData", JSON.stringify(existingEntries));
    alert('Trip data saved to local storage!');
  };

  return (
    <>
      <h1>Datensatz hinzufügen</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label className='form-label'>Start location</label>
          <input className='form-control' type="text" value={startLocation} onChange={(e) => setStartLocation(e.target.value)} />
        </div>
        <div class="mb-3">
          <label className='form-label'>End location</label>
          <input className='form-control' type="text" value={endLocation} onChange={(e) => setEndLocation(e.target.value)} />
        </div>
        <div class="mb-3">
          <label className='form-label'>Start date</label>
          <input className='form-control' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div class="mb-3">
          <label className='form-label'>Start time</label>
          <input className='form-control' type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div class="mb-3">
          <label className='form-label'>End date</label>
          <input className='form-control' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div class="mb-3">
          <label className='form-label'>End time</label>
          <input className='form-control' type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
        <div class="mb-3">
          <label className='form-label'>Start mileage</label>
          <input className='form-control' type="number" value={startMileage} onChange={(e) => setStartMileage(e.target.value)} />
        </div>
        <div class="mb-3">
          <label className='form-label'>End mileage</label>
          <input className='form-control' type="number" value={endMileage} onChange={(e) => setEndMileage(e.target.value)} />
        </div>
        <div class="mb-3">
          <label className='form-label'>Purpose</label>
          <select className='form-select' value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option value="Arbeit">Arbeit</option>
            <option value="Einkaufen">Einkaufen</option>
            <option value="Freizeit">Freizeit</option>
          </select>
        </div>
        <div class="mb-3">
          <label className='form-label'>Passengers</label>
          <input className='form-control' type="text" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
        </div>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddTripForm;
