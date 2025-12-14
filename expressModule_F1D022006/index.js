// index.js
const express = require('express');
const math = require('./utils/math');
const profileRouter = require('./routes/profile');

const app = express();
const port = 3000;

const myNIM = 'F1D022006';
const myName = 'Gusti Ayu Devi Anjani Putri';

// Router profile
app.use('/profile', profileRouter);

// Route: /
// Menampilkan NIM dan Nama
app.get('/', (req, res) => {
  res.send(`
    <h1>NIM: ${myNIM}</h1>
    <h2>Nama: ${myName}</h2>
  `);
});

// Route: /hitung
// Menampilkan hasil math.js
app.get('/hitung', (req, res) => {
  const a = 10;
  const b = 5;

  res.send(`
    <h1>Hasil Operasi Matematika</h1>
    <ul>
      <li>Tambah (${a} + ${b}) = ${math.tambah(a, b)}</li>
      <li>Kurang (${a} - ${b}) = ${math.kurang(a, b)}</li>
      <li>Kali (${a} × ${b}) = ${math.kali(a, b)}</li>
      <li>Bagi (${a} ÷ ${b}) = ${math.bagi(a, b)}</li>
    </ul>
  `);
});
// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
