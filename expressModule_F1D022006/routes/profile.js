// routes/profile.js
const express = require('express');
const profileRouter = express.Router();

// Data profile
const profileData = [
  {
    nim: 'F1D022006',
    nama: 'Ayu Putri',
    jurusan: 'Teknik Informatika'
  },
  {
    nim: 'F1D022036',
    nama: 'Tsalist Agna',
    jurusan: 'Teknik Informatika'
  },
  {
    nim: 'F1D022052',
    nama: 'Gusbram',
    jurusan: 'Teknik Informatika'
  }
];


// Route: /profile
// Menampilkan seluruh data profile
profileRouter.get('/', (req, res) => {
  res.json(profileData);
});

// Route: /profile/:nim
// Menampilkan detail profile berdasarkan NIM
profileRouter.get('/:nim', (req, res) => {
  const nim = req.params.nim;
  const detail = profileData.find(p => p.nim === nim);

  if (detail) {
    res.json(detail);
  } else {
    res.status(404).json({
      message: 'Profile tidak ditemukan.'
    });
  }
});

module.exports = profileRouter;
