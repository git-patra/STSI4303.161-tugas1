import './style.css';
import { parseNim, generateTriangle, generateArithmetic, findPrimes } from './calculations';

// Elemen berasal dari index.html; perhitungan dipisahkan agar mudah diuji.
const form = document.querySelector<HTMLFormElement>('#nim-form')!;
const nim = document.querySelector<HTMLInputElement>('#nim')!;
const results = document.querySelector<HTMLElement>('#results')!;
const error = document.querySelector<HTMLElement>('#error')!;
const status = document.querySelector<HTMLElement>('#status')!;

function setText(id: string, value: string): void {
  document.getElementById(id)!.textContent = value;
}

function clearResults(): void {
  results.hidden = true;
  error.hidden = true;
  error.textContent = '';
  nim.removeAttribute('aria-invalid');
  status.textContent = 'Masukkan NIM, lalu pilih Hitung hasil untuk memulai.';
}

form.addEventListener('input', clearResults);
form.addEventListener('reset', () => {
  clearResults();
  nim.focus();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearResults();
  try {
    const data = parseNim(nim.value);
    status.textContent = `Hasil untuk NIM ${data.nim}`;
    setText('triangle-info', `Digit terakhir = ${data.height}. Tinggi segitiga = ${data.height} baris.`);
    setText('triangle-output', generateTriangle(data.height) || 'Tinggi 0: tidak ada baris yang dicetak.');
    setText('arithmetic-info', `Dua digit terakhir = ${data.nim.slice(-2)} → awal ${data.start}. Beda = ${data.nim.slice(-3, -2)} + 1 = ${data.step}.`);
    setText('arithmetic-output', generateArithmetic(data.start, data.step).join(', '));
    setText('prime-info', `Batas akhir = ${data.start} + 10 = ${data.limit}. Cari bilangan prima dari 1 sampai ${data.limit}.`);
    setText('prime-output', findPrimes(data.limit).join(', '));
    results.hidden = false;
  } catch (cause) {
    error.textContent = cause instanceof Error ? cause.message : 'NIM tidak dapat diproses.';
    error.hidden = false;
    nim.setAttribute('aria-invalid', 'true');
    nim.focus();
  }
});
