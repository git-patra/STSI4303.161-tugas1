export function parseNim(value: string): {
  nim: string; height: number; start: number; step: number; limit: number;
} {
  const nim = value.trim();
  if (!/^[0-9]{3,}$/.test(nim)) {
    throw new Error('NIM harus berisi minimal 3 digit angka, tanpa huruf atau tanda baca.');
  }
  const start = Number(nim.slice(-2));
  return {
    nim,
    height: Number(nim.slice(-1)),
    start,
    step: Number(nim.slice(-3, -2)) + 1,
    limit: start + 10,
  };
}

// Soal 1: loop luar untuk baris, loop dalam untuk angka pada baris.
export function generateTriangle(height: number): string {
  const rows: string[] = [];
  for (let row = 1; row <= height; row++) {
    const numbers: number[] = [];
    for (let number = 1; number <= row; number++) {
      numbers.push(number);
    }
    rows.push(numbers.join(' '));
  }
  return rows.join('\n');
}

// Soal 2: indeks 0 menghasilkan suku pertama, yaitu start.
export function generateArithmetic(start: number, step: number): number[] {
  const sequence: number[] = [];
  for (let i = 0; i < 10; i++) {
    sequence.push(start + i * step);
  }
  return sequence;
}

// Soal 3: kandidat prima dimulai dari 2; batas akhir ikut diperiksa.
export function findPrimes(limit: number): number[] {
  const primes: number[] = [];
  for (let candidate = 2; candidate <= limit; candidate++) {
    let isPrime = true;
    for (let divisor = 2; divisor * divisor <= candidate; divisor++) {
      if (candidate % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(candidate);
  }
  return primes;
}
