import React, { useEffect } from 'react';
import 'react-virtualized/styles.css';
import records0 from './medicalRecords.json';
import records1 from './medicalRecords1.json';


const NUM_ROWS = 100;
const TableWithShadowDom = () => {
  const [records, setRecords] = React.useState([]);
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    setRecords(records0.slice(0, NUM_ROWS));
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
              setRecords(records1.slice(0, NUM_ROWS));
              setCurrent(1);
            } else {
              setRecords(records0.slice(0, NUM_ROWS));
              setCurrent(0);
            }
          }}>Change all records</button>
        </div>
      </div>

      <table-component>
        {records.map((record, i) => (
          <table-row key={i}>
            <table-cell>
              {record.patientName}
            </table-cell>
            <table-cell>
              {record.age}
            </table-cell>
            <table-cell>
              {record.gender}
            </table-cell>
            <table-cell>
              {record.diagnosis}
            </table-cell>
            <table-cell>
              {record.medication}
            </table-cell>
            <table-cell>
              {record.doctor}
            </table-cell>
            <table-cell>
              {record.admissionDate}
            </table-cell>
            <table-cell>
              {record.dischargeDate}
            </table-cell>
            <table-cell>
              {record.roomNumber}
            </table-cell>
            <table-cell>
              {record.allergies}
            </table-cell>
            <table-cell>
              {record.bloodType}
            </table-cell>
            <table-cell>
              {record.insuranceProvider}
            </table-cell>
            <table-cell>
              {record.emergencyContact}
            </table-cell>
            <table-cell>
              {record.notes}
            </table-cell>
          </table-row>
        ))}
      </table-component>
    </div >
  );
}

export default TableWithShadowDom;
