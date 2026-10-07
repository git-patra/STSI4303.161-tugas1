# Praktikum NIM — TypeScript

Aplikasi satu halaman untuk pola segitiga, 10 suku aritmatika, dan bilangan prima berdasarkan NIM. Dibangun dengan TypeScript strict, Vite, HTML, dan CSS tanpa backend.

## Menjalankan lokal

Node.js >=20.19.0 dan npm diperlukan.

```bash
cd "/Users/patra/Project/praktikum-nim-typescript"
npm install
npm run dev
```

Buka http://127.0.0.1:5173. Biarkan Terminal tetap aktif; Control+C untuk berhenti. Saat menjalankan berikutnya cukup `npm run dev` dari folder repo.

```bash
npm test
npm run build
npm run preview
```

Preview memakai alamat yang ditampilkan Terminal (biasanya http://127.0.0.1:4173).

## Aturan tugas

- NIM: string minimal 3 digit; spasi luar dibuang, karakter selain angka ditolak.
- Segitiga: tinggi = digit terakhir. Tinggi 0 berarti tidak ada baris.
- Aritmatika: awal = dua digit terakhir; beda = digit ketiga dari belakang **+ 1**; cetak 10 suku. Aturan +1 mengikuti contoh karena teks soal dan contoh berbeda.
- Prima: batas inklusif = dua digit terakhir + 10; mulai dari 2, karena 1 bukan prima.
- NIM hanya dipakai di halaman, tidak disimpan atau dikirim ke server.

## Berkas utama

- `src/calculations.ts`: algoritma ketiga soal.
- `src/calculations.test.ts`: pengujian algoritma.
- `src/main.ts`: input, validasi tampilan, dan hasil.
- `src/style.css`: tampilan responsif.
- `docs/panduan-video.md`: panduan khusus run lokal, naskah, dan checklist pengumpulan.
- `docs/laporan-praktikum.docx`: laporan dengan kode; lengkapi identitas, hasil NIM asli, serta tautan rekaman sebelum dikumpulkan.

NIM 230411013 dalam dokumentasi merupakan contoh soal, bukan identitas mahasiswa.
