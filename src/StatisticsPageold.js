import React, { useState, useEffect } from 'react';

function StatisticsPage() {
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    const storedTripData = JSON.parse(localStorage.getItem('tripData')) || [];
    setTripData(storedTripData);
  }, []);

  function calculateMonthlyMileage(month, year) {
    const trips = tripData.filter((trip) => {
      const tripMonth = new Date(trip.startDate).getMonth();
      const tripYear = new Date(trip.startDate).getFullYear();
      return tripMonth === month && tripYear === year;
    });
    const totalMileage = trips.reduce((acc, trip) => {
      return acc + trip.endMileage - trip.startMileage;
    }, 0);
    return totalMileage;
  }

  function calculateYearlyMileage(year) {
    const trips = tripData.filter((trip) => {
      const tripYear = new Date(trip.startDate).getFullYear();
      return tripYear === year;
    });
    const totalMileage = trips.reduce((acc, trip) => {
      return acc + trip.endMileage - trip.startMileage;
    }, 0);
    return totalMileage;
  }

  function calculateFrequencyOfPurpose(purpose) {
    const trips = tripData.filter((trip) => {
      return trip.purpose === purpose;
    });
    return trips.length;
  }

  function calculateAveragePassengersPerTrip() {
    const totalPassengers = tripData.reduce((acc, trip) => {
      return acc + trip.passengers;
    }, 0);
    const averagePassengers = totalPassengers / tripData.length;
    return averagePassengers;
  }

  return (
    <div>
      <h1>Statistiken</h1>
      <p>Monatliche Kilometer im Jahr 2023: {calculateMonthlyMileage(0, 2023)}</p>
      <p>Jährliche Kilometer im Jahr 2023: {calculateYearlyMileage(2023)}</p>
      <p>Anzahl der Pendelfahrten zur Arbeit: {calculateFrequencyOfPurpose('Pendeln')}</p>
      <p>Durchschnittliche Anzahl der Mitfahrer pro Fahrt: {calculateAveragePassengersPerTrip()}</p>
    </div>
  );
}

export default StatisticsPage;
