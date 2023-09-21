const fs = require('fs');

const generateMedicalRecords = (n) => {
    const names = ["Alice", "Bob", "Charlie", "David", "Ella", "Fiona", "George", "Hannah"];
    const diagnoses = ["Flu", "Cold", "Fever", "Fracture", "Sprain", "Allergy", "Infection"];
    const medications = ["Ibuprofen", "Paracetamol", "Amoxicillin", "Aspirin", "Cetirizine"];
    const doctors = ["Dr. Smith", "Dr. Jones", "Dr. Williams", "Dr. Brown", "Dr. Taylor"];
    const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    const insuranceProviders = ["HealthCare Inc.", "Wellness Group", "LifeMed Associates"];

    const records = [];

    for (let i = 0; i < n; i++) {
        const admissionDate = new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000));
        const dischargeDate = new Date(admissionDate.getTime() + Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000));

        const record = {
            id: i + 1,
            patientName: names[Math.floor(Math.random() * names.length)],
            age: Math.floor(Math.random() * 60) + 20,
            gender: Math.random() > 0.5 ? "Male" : "Female",
            diagnosis: diagnoses[Math.floor(Math.random() * diagnoses.length)],
            medication: medications[Math.floor(Math.random() * medications.length)],
            doctor: doctors[Math.floor(Math.random() * doctors.length)],
            admissionDate: admissionDate.toISOString().split('T')[0],
            dischargeDate: dischargeDate.toISOString().split('T')[0],
            roomNumber: `${Math.floor(Math.random() * 400 + 100)}${["A", "B"][Math.floor(Math.random() * 2)]}`,
            allergies: ["Peanuts", "Seafood", "Dairy", "None"][Math.floor(Math.random() * 4)],
            bloodType: bloodTypes[Math.floor(Math.random() * bloodTypes.length)],
            insuranceProvider: insuranceProviders[Math.floor(Math.random() * insuranceProviders.length)],
            emergencyContact: `${names[Math.floor(Math.random() * names.length)]} (Relative)`,
            notes: "No additional notes."
        };

        records.push(record);
    }

    return records;
};

const records = generateMedicalRecords(10000);
fs.writeFileSync('src/medicalRecords.json', JSON.stringify(records, null, 4));
