export type Base = 'bin' | 'oct' | 'dec' | 'hex';

export const BASE_ALPHABETS: Record<Base, string> = {
  bin: '01',
  oct: '01234567',
  dec: '0123456789',
  hex: '0123456789abcdef',
};
