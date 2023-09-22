import React, { useEffect } from 'react';
import { Table, Column, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';
import records0 from './medicalRecords.json';
import records1 from './medicalRecords1.json';


const JustTablePlain = () => {
  const [records, setRecords] = React.useState([]);
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    setRecords(records0);
  }, []);

  useEffect(() => {
    const endTime = performance.now();
    console.log(`>>> diffe`, endTime - window.startTime); 
  });

  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <div style={{ padding: '1em', border: '1px solid red' }}>
        # of records: {records.length}
        <div>
          <button onClick={() => {
            window.startTime = performance.now();
            if (current === 0) {
              setRecords(records1);
              setCurrent(1);
            } else {
              setRecords(records0);
              setCurrent(0);
            }
          }}>Change all records</button>
        </div>
      </div>
      <table>
        {/* Headers */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Diagnosis</th>
            <th>Medication</th>
            <th>Doctor</th>
            <th>Admission Date</th>
            <th>Discharge Date</th>
            <th>Room Number</th>
            <th>Allergies</th>
            <th>Blood Type</th>
            <th>Insurance</th>
            <th>Emergency Contact</th>
            <th>Notes</th>
          </tr>
        </thead>

        {/* Rows */}
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.patientName}</td>
              <td>{record.age}</td>
              <td>{record.gender}</td>
              <td>{record.diagnosis}</td>
              <td>{record.medication}</td>
              <td>{record.doctor}</td>
              <td>{record.admissionDate}</td>
              <td>{record.dischargeDate}</td>
              <td>{record.roomNumber}</td>
              <td>{record.allergies}</td>
              <td>{record.bloodType}</td>
              <td>{record.insuranceProvider}</td>
              <td>{record.emergencyContact}</td>
              <td>{record.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}

export default JustTablePlain;
