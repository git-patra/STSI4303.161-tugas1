# Panduan menjalankan lokal dan merekam video praktikum

## 1. Persiapan pertama kali

Buka Terminal (macOS) dan jalankan satu per satu:

```bash
cd "/Users/patra/Project/praktikum-nim-typescript"
node --version
npm --version
npm install
npm run dev
```

Gunakan Node.js 20.19 atau lebih baru. Bila perintah node/npm tidak ditemukan, pasang Node.js terlebih dahulu, lalu buka ulang Terminal. `npm install` membutuhkan internet; setelah dependency terpasang, aplikasi bisa dijalankan lokal tanpa internet.

Buka http://127.0.0.1:5173 di browser. Biarkan Terminal tetap berjalan selama menggunakan aplikasi. Untuk berhenti, tekan Control+C di Terminal tersebut.

## 2. Menjalankan lagi saat hari perekaman

```bash
cd "/Users/patra/Project/praktikum-nim-typescript"
npm run dev
```

Tidak perlu menjalankan npm install setiap kali. Bila muncul pesan port 5173 sudah dipakai, buka alamat di atas: server sebelumnya mungkin masih aktif. Untuk restart, tekan Control+C pada Terminal server sebelumnya, lalu jalankan lagi. Jangan menutup Terminal selama rekaman.

Sebelum rekaman, buka folder proyek di editor kode. Siapkan tab `src/calculations.ts`, Terminal, dan browser. Kosongkan form dengan Reset. Isi identitas asli Anda ketika demonstrasi, bukan identitas contoh.

## 3. Alur rekaman 4–6 menit

### 00:00–00:30 — Perkenalan

“Perkenalkan, nama saya [nama], NIM [NIM], kelas [kelas]. Pada video ini saya mendemonstrasikan tiga soal menggunakan TypeScript: pola segitiga, deret aritmatika, dan bilangan prima.”

### 00:30–01:15 — Menjalankan proyek

Tampilkan Terminal, masuk ke folder proyek, dan jalankan `npm run dev`. Buka alamat lokal di browser. Jelaskan bahwa TypeScript diproses oleh Vite agar dapat dijalankan browser. HTML untuk struktur halaman, CSS untuk tampilan, dan TypeScript untuk logika.

### 01:15–02:00 — Input dan parameter

Isi nama, kelas, serta NIM asli. Tekan Hitung hasil. Jelaskan digit terakhir untuk tinggi, dua digit terakhir untuk angka awal, digit ketiga dari belakang ditambah satu untuk beda, dan dua digit terakhir ditambah 10 untuk batas prima.

Katakan: “Untuk beda aritmatika, saya mengikuti contoh pada soal, yaitu digit ketiga dari belakang ditambah satu.”

### 02:00–03:45 — Kode, hasil, dan analisis

Buka `src/calculations.ts` sambil memperlihatkan hasil di browser:

1. `parseNim`: NIM disimpan sebagai string agar nol di depan tidak hilang. `slice` mengambil digit yang dibutuhkan, lalu `Number` mengubah potongannya menjadi angka.
2. `generateTriangle`: loop luar mengatur baris; loop dalam mengisi angka 1 hingga nomor baris. Tinggi 0 tidak menghasilkan baris.
3. `generateArithmetic`: loop 10 kali, memakai `start + i * step`. Indeks dimulai dari 0, sehingga suku pertama sama dengan angka awal.
4. `findPrimes`: kandidat mulai dari 2. Jika habis dibagi suatu angka dari 2 sampai akar kandidat, kandidat bukan prima. Batas akhir ikut diperiksa. Angka 1 bukan prima.

Baca beberapa hasil dari NIM asli dan cocokkan secara manual dengan rumus. Sebagai pembanding, NIM contoh 230411013 harus menghasilkan tinggi 3, deret 13 sampai 22, serta prima 2, 3, 5, 7, 11, 13, 17, 19, 23.

### 03:45–04:30 — Pengujian

Coba NIM `12` dan tunjukkan validasi. Coba `000` untuk tinggi nol. Kembalikan ke NIM asli. Bila ingin menunjukkan tes otomatis, buka Terminal kedua (jangan menghentikan server):

```bash
cd "/Users/patra/Project/praktikum-nim-typescript"
npm test
npm run build
```

`npm test` memeriksa algoritma; `npm run build` memeriksa tipe TypeScript dan membangun aplikasi.

### 04:30–05:00 — Penutup

“Dari praktik ini, saya memahami penggunaan string untuk mengambil digit NIM, perulangan bersarang, rumus aritmatika, serta percabangan untuk memeriksa bilangan prima. Ketiga hasil sudah dibandingkan dengan ketentuan soal. Terima kasih.”

## 4. Sebelum mengumpulkan

- Buka `docs/laporan-praktikum.docx` di Microsoft Word.
- Isi nama, NIM, kelas, dan tanggal; tambahkan hasil serta screenshot NIM asli pada bagian yang disediakan.
- Rekam aktivitas Anda sendiri, termasuk pengetikan, menjalankan aplikasi, dan menjelaskan hasil.
- Unggah video ke layanan yang diperbolehkan dosen, pastikan izin tautannya dapat ditonton dosen, lalu tempel tautan ke laporan.
- Periksa ulang kode, hasil, dan tautan. Upload laporan Word dan link video sesuai instruksi pengumpulan.
