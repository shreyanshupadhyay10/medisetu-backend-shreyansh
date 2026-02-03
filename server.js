import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import patientRoutes from './src/routes/paitentRoutes.js'; 
import doctorRoutes from './src/routes/doctorRoutes.js';

const app = express();


app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/medisetu', {
    serverSelectionTimeoutMS: 5000,
    family: 4 
})
.then(() => console.log("✅ DATABASE IS LIVE AND CONNECTED!"))
.catch((err) => {
    console.log("❌ CONNECTION ERROR!");
    console.log(err.message);
});


app.use('/api', patientRoutes);
app.use('/api/doctor', doctorRoutes);

app.get('/', (req, res) => {
  res.send("Medisetu Patient API is up and running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});