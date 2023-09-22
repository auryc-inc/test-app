import React, { useEffect } from 'react';
import { Table, Column, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';
import records0 from './medicalRecords.json';
import records1 from './medicalRecords1.json';


const TableWithShadowDom = () => {
  const [records, setRecords] = React.useState([]);
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    setRecords(records0.slice(0, 100));
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
              setRecords(records1.slice(0, 100));
              setCurrent(1);
            } else {
              setRecords(records0.slice(0, 100));
              setCurrent(0);
            }
          }}>Change all records</button>
        </div>
      </div>
      <table>
        <tbody>
          {records.map(record => (
            <table-row key={record.id}>
              <td slot="patientName" width="200px" width="100px">{record.patientName}</td>
              <td slot="age" width="50px" >{record.age}</td>
              <td slot="gender" width="60px">{record.gender}</td>
              <td slot="diagnosis" width="100px">{record.diagnosis}</td>
              <td slot="medication" width="100px">{record.medication}</td>
              <td slot="doctor" width="100px">{record.doctor}</td>
              <td slot="admissionDate" width="100px">{record.admissionDate}</td>
              <td slot="dischargeDate" width="100px">{record.dischargeDate}</td>
              <td slot="roomNumber" width="100px">{record.roomNumber}</td>
              <td slot="allergies" width="100px">{record.allergies}</td>
              <td slot="bloodType" width="100px">{record.bloodType}</td>
              <td slot="insuranceProvider" width="100px">{record.insuranceProvider}</td>
              <td slot="emergencyContact" width="100px">{record.emergencyContact}</td>
              <td slot="notes" width="100px">{record.notes}</td>
            </table-row>
          ))}
        </tbody>
      </table>
    </div >
  );
}

export default TableWithShadowDom;
