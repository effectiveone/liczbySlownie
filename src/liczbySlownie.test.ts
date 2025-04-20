import { describe, it, expect } from 'vitest';
import { LiczbySlownie } from './liczbySlownie';

describe('LiczbySlownie', () => {
  const konwerter = new LiczbySlownie();

  describe('liczbySlownie', () => {
    it('powinien zwrócić "zero" dla liczby 0', () => {
      expect(konwerter.liczbySlownie(0)).toBe('zero');
    });

    it('powinien poprawnie konwertować liczby jednocyfrowe', () => {
      expect(konwerter.liczbySlownie(1)).toBe('jeden');
      expect(konwerter.liczbySlownie(5)).toBe('pięć');
      expect(konwerter.liczbySlownie(9)).toBe('dziewięć');
    });

    it('powinien poprawnie konwertować liczby dwucyfrowe', () => {
      expect(konwerter.liczbySlownie(10)).toBe('dziesięć');
      expect(konwerter.liczbySlownie(11)).toBe('jedenaście');
      expect(konwerter.liczbySlownie(20)).toBe('dwadzieścia');
      expect(konwerter.liczbySlownie(21)).toBe('dwadzieścia jeden');
    });

    it('powinien poprawnie konwertować liczby trzycyfrowe', () => {
      expect(konwerter.liczbySlownie(100)).toBe('sto');
      expect(konwerter.liczbySlownie(101)).toBe('sto jeden');
      expect(konwerter.liczbySlownie(200)).toBe('dwieście');
      expect(konwerter.liczbySlownie(999)).toBe('dziewięćset dziewięćdziesiąt dziewięć');
    });

    it('powinien poprawnie konwertować liczby czterocyfrowe', () => {
      expect(konwerter.liczbySlownie(1000)).toBe('tysiąc');
      expect(konwerter.liczbySlownie(1001)).toBe('tysiąc jeden');
      expect(konwerter.liczbySlownie(2000)).toBe('dwa tysiące');
      expect(konwerter.liczbySlownie(9999)).toBe(
        'dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć'
      );
    });

    it('powinien poprawnie konwertować liczby ujemne', () => {
      expect(konwerter.liczbySlownie(-1)).toBe('minus jeden');
      expect(konwerter.liczbySlownie(-1000)).toBe('minus tysiąc');
    });
  });

  describe('kwotaSlownie', () => {
    it('powinien poprawnie konwertować kwoty całkowite', () => {
      expect(konwerter.kwotaSlownie(1)).toBe('jeden złoty');
      expect(konwerter.kwotaSlownie(2)).toBe('dwa złote');
      expect(konwerter.kwotaSlownie(5)).toBe('pięć złotych');
    });

    it('powinien poprawnie konwertować kwoty z groszami', () => {
      expect(konwerter.kwotaSlownie(1.01)).toBe('jeden złoty i jeden grosz');
      expect(konwerter.kwotaSlownie(2.02)).toBe('dwa złote i dwa grosze');
      expect(konwerter.kwotaSlownie(5.05)).toBe('pięć złotych i pięć groszy');
    });

    it('powinien poprawnie konwertować ujemne kwoty', () => {
      expect(konwerter.kwotaSlownie(-1.01)).toBe('minus jeden złoty i jeden grosz');
      expect(konwerter.kwotaSlownie(-2.02)).toBe('minus dwa złote i dwa grosze');
    });
  });

  describe('konfiguracja', () => {
    it('powinien respektować niestandardową konfigurację', () => {
      const konwerter = new LiczbySlownie({
        separator: '-',
        groszeSeparator: 'oraz',
      });

      expect(konwerter.liczbySlownie(21)).toBe('dwadzieścia-jeden');
      expect(konwerter.kwotaSlownie(1.01)).toBe('jeden złotyorazjeden grosz');
    });
  });
});
