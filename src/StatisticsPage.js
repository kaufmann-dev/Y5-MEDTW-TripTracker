import React, { useState } from "react";


function Statistics() {
  const [trips, setTrips] = useState(getTripsFromLocalStorage());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedPurpose, setSelectedPurpose] = useState("Arbeit");
  const totalMileageForMonth = calculateTotalMileageForMonth(Number(selectedMonth));
  const totalMileageForYear = calculateTotalMileageForYear(Number(selectedYear));
  const frequencyForPurpose = calculateFrequencyForPurpose(selectedPurpose);
  const averagePassengers = calculateAveragePassengers();

  function getTripsFromLocalStorage() {
    const trips = JSON.parse(localStorage.getItem("tripData"));
    return trips || [];
  }

  function calculateTotalMileageForMonth(month) {
    const filteredTrips = trips.filter(
      (trip) => new Date(trip.startDate).getMonth() === month
    );
    return filteredTrips.reduce(
      (total, trip) => total + (trip.endMileage - trip.startMileage),
      0
    );
  }
  
  function calculateTotalMileageForYear(year) {
    const filteredTrips = trips.filter(
      (trip) => new Date(trip.startDate).getFullYear() === year
    );
    return filteredTrips.reduce(
      (total, trip) => total + (trip.endMileage - trip.startMileage),
      0
    );
  }
  
  function calculateFrequencyForPurpose(purpose) {
    const filteredTrips = trips.filter((trip) => trip.purpose === purpose);
    return filteredTrips.length;
  }
  
  function calculateAveragePassengers() {
    const totalPassengers = trips.reduce(
      (total, trip) => total + Number(trip.passengers),
      0
    );
    return totalPassengers / trips.length;
  }

  

  return (
    <>
      <h1>Statistiken</h1>
      <form className="row">
        <div className="col-12 col-md-4">
          <label className="form-label">Monat</label>
          <select
            className="form-select"
            value={selectedMonth}
            onChange={(event) => setSelectedMonth(event.target.value)}
          >
            <option value={0}>Januar</option>
            <option value={1}>Februar</option>
            <option value={2}>März</option>
            <option value={3}>April</option>
            <option value={4}>Mai</option>
            <option value={5}>Juni</option>
            <option value={6}>Juli</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>Oktober</option>
            <option value={10}>November</option>
            <option value={11}>Dezember</option>
          </select>
        </div>
        <div className="col-12 col-md-4">
        <label className="form-label col-12 col-md-4">Jahr</label>
          <input
            className="form-control"
            type="number"
            value={selectedYear}
            onChange={(event) => setSelectedYear(event.target.value)}
          />
        </div>
        <div className="col-12 col-md-4">
          <label className="form-label">Zweck</label>
          <select
            className="form-select"
            value={selectedPurpose}
            onChange={(event) => setSelectedPurpose(event.target.value)}
          >
            <option value="Arbeit">Arbeit</option>
            <option value="Einkaufen">Einkaufen</option>
            <option value="Freizeit">Freizeit</option>
          </select>
        </div>
      </form>
      <div className="pt-3">
        <p>Kilometer im {Number(selectedMonth) + 1}. Monat {selectedYear}: <b>{totalMileageForMonth} km</b></p>
        <p>Kilometer in {selectedYear}: <b>{totalMileageForYear} km</b></p>
        <p>Fahrten mit Zweck "{selectedPurpose}": <b>{frequencyForPurpose}</b></p>
        <p>Durchschnittliche Mitfahrer pro Fahrt: <b>{averagePassengers.toFixed(2)}</b></p>
      </div>
    </>
  );
}
export default Statistics;