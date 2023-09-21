import React, { useEffect } from 'react';
import { Table, Column, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';
import records0 from './medicalRecords.json';
import records1 from './medicalRecords1.json';


const TableReactctVirtualized = () => {
  const [records, setRecords] = React.useState([]);
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    setRecords(records0);
  }, []);


  return (
    <div style={{ height: '70vh', width: '100%' }}>
      Length: {records.length}
      <div style={{ padding: '1em', border: '1px solid red' }}>
        # of records: {records.length}
        <div>
          <button onClick={() => {
            if (current === 0) {
              setRecords(records1);
              setCurrent(1);
            } else {
              setRecords(records0);
              setCurrent(0);
            }
          }}>Change  Records</button>
        </div>
      </div>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            width={width}
            height={height}
            headerHeight={20}
            rowHeight={30}
            rowCount={records.length}
            rowGetter={({ index }) => records[index]}
          >
            <Column label="ID" dataKey="id" minWidth={50} />
            <Column label="Patient Name" dataKey="patientName" width={150} />
            <Column label="Age" dataKey="age" width={50} />
            <Column label="Gender" dataKey="gender" width={100} />
            <Column label="Diagnosis" dataKey="diagnosis" width={150} />
            <Column label="Medication" dataKey="medication" width={150} />
            <Column label="Doctor" dataKey="doctor" width={150} />
            <Column label="Admission Date" dataKey="admissionDate" width={150} />
            <Column label="Discharge Date" dataKey="dischargeDate" width={150} />
            <Column label="Room Number" dataKey="roomNumber" width={100} />
            <Column label="Allergies" dataKey="allergies" width={150} />
            <Column label="Blood Type" dataKey="bloodType" width={100} />
            <Column label="Insurance" dataKey="insuranceProvider" width={200} />
            <Column label="Emergency Contact" dataKey="emergencyContact" width={200} />
            <Column label="Notes" dataKey="notes" width={300} />
          </Table>
        )}
      </AutoSizer>
    </div >
  );
}

export default TableReactctVirtualized;
