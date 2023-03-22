import React, { useState, useEffect } from 'react';

function TripOverview() {
  const [tripData, setTripData] = useState([]);
  const [sortType, setSortType] = useState('startDate');
  const [filterLocation, setFilterLocation] = useState('');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('tripData'));
    setTripData(storedData || []);
  }, []);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterLocation(e.target.value);
  };

  const sortedTrips = [...tripData].sort((a, b) => {
    if (sortType === 'startDate') {
      return new Date(b.startDate + 'T' + b.startTime) - new Date(a.startDate + 'T' + a.startTime);
    }
    if (sortType === 'startMileage') {
      return b.startMileage - a.startMileage;
    }
    if (sortType === 'endMileage') {
      return b.endMileage - a.endMileage;
    }
  });

  const filteredTrips = sortedTrips.filter((trip) => {
    return trip.startLocation.toLowerCase().includes(filterLocation.toLowerCase());
  });

  return (
    <>
      <h1>Overview</h1>

      <div className='mb-3'>
        <label className='form-label'>Sort by</label>
        <select className='form-select' value={sortType} onChange={handleSortChange}>
          <option value="startDate">Start Date</option>
          <option value="startMileage">Start Mileage</option>
          <option value="endMileage">End Mileage</option>
        </select>
      </div>

      <div className='mb-3'>
        <label className='form-label'>Filter by start location</label>
        <input className='form-control' type="text" value={filterLocation} onChange={handleFilterChange} />
      </div>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Start Location</th>
            <th>End Location</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Start Mileage</th>
            <th>End Mileage</th>
            <th>Purpose</th>
            <th>Passengers</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrips.map((trip, index) => (
            <tr key={index}>
              <td>{trip.startLocation}</td>
              <td>{trip.endLocation}</td>
              <td>{trip.startDate} {trip.startTime}</td>
              <td>{trip.endDate} {trip.endTime}</td>
              <td>{trip.startMileage}</td>
              <td>{trip.endMileage}</td>
              <td>{trip.purpose}</td>
              <td>{trip.passengers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TripOverview;
