import { describe, expect, it } from 'vitest';
import { parseNim, generateTriangle, generateArithmetic, findPrimes } from './calculations';

describe('Pengolahan NIM', () => {
  it('menghasilkan semua parameter dan hasil contoh tugas', () => {
    expect(parseNim('230411013')).toEqual({nim:'230411013',height:3,start:13,step:1,limit:23});
    expect(generateTriangle(3)).toBe('1\n1 2\n1 2 3');
    expect(generateArithmetic(13,1)).toEqual([13,14,15,16,17,18,19,20,21,22]);
    expect(findPrimes(23)).toEqual([2,3,5,7,11,13,17,19,23]);
  });
  it('menggunakan beda ditambah satu', () => {
    expect(parseNim('230411125')).toEqual({nim:'230411125',height:5,start:25,step:2,limit:35});
    expect(generateArithmetic(25,2)).toEqual([25,27,29,31,33,35,37,39,41,43]);
    expect(generateTriangle(5).split('\n').at(-1)).toBe('1 2 3 4 5');
  });
  it('mempertahankan nol dan menangani tinggi nol', () => {
    expect(parseNim('000')).toEqual({nim:'000',height:0,start:0,step:1,limit:10});
    expect(parseNim(' 001 ')).toEqual({nim:'001',height:1,start:1,step:1,limit:11});
    expect(generateTriangle(0)).toBe('');
    expect(findPrimes(10)).toEqual([2,3,5,7]);
  });
  it('menangani nilai maksimum digit', () => {
    expect(parseNim('999')).toEqual({nim:'999',height:9,start:99,step:10,limit:109});
    expect(generateArithmetic(99,10).at(-1)).toBe(189);
    expect(findPrimes(109).at(-1)).toBe(109);
  });
  it.each(['','12','abc','12.3','-123','12 3'])('menolak input %j', value => {
    expect(() => parseNim(value)).toThrow();
  });
  it('membedakan prima, komposit, dan batas inklusif', () => {
    expect(findPrimes(1)).toEqual([]);
    expect(findPrimes(2)).toEqual([2]);
    expect(findPrimes(9)).toEqual([2,3,5,7]);
  });
});
