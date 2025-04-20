export interface Odmiana {
  jeden: string;
  dwa: string;
  piec: string;
}

export interface Konfiguracja {
  odmiana: Odmiana;
  separator: string;
  groszeSeparator: string;
}

const domyslnaKonfiguracja: Konfiguracja = {
  odmiana: {
    jeden: '',
    dwa: 'y',
    piec: '',
  },
  separator: ' ',
  groszeSeparator: ' i ',
};

const jednosci: string[] = [
  '',
  'jeden',
  'dwa',
  'trzy',
  'cztery',
  'pięć',
  'sześć',
  'siedem',
  'osiem',
  'dziewięć',
];
const nastki: string[] = [
  'dziesięć',
  'jedenaście',
  'dwanaście',
  'trzynaście',
  'czternaście',
  'piętnaście',
  'szesnaście',
  'siedemnaście',
  'osiemnaście',
  'dziewiętnaście',
];
const dziesiatki: string[] = [
  '',
  '',
  'dwadzieścia',
  'trzydzieści',
  'czterdzieści',
  'pięćdziesiąt',
  'sześćdziesiąt',
  'siedemdziesiąt',
  'osiemdziesiąt',
  'dziewięćdziesiąt',
];
const setki: string[] = [
  '',
  'sto',
  'dwieście',
  'trzysta',
  'czterysta',
  'pięćset',
  'sześćset',
  'siedemset',
  'osiemset',
  'dziewięćset',
];

export class LiczbySlownie {
  private konfiguracja: Konfiguracja;

  constructor(konfiguracja: Partial<Konfiguracja> = {}) {
    this.konfiguracja = { ...domyslnaKonfiguracja, ...konfiguracja };
  }

  public liczbySlownie(liczba: number): string {
    if (liczba === 0) return 'zero';

    const jestUjemna = liczba < 0;
    let reszta = Math.abs(liczba);
    const czesci: string[] = [];

    if (reszta >= 1000000000) {
      const miliardy = Math.floor(reszta / 1000000000);
      const miliardySlownie = this.przetworzGrupe(miliardy, 'miliard', 'miliardy', 'miliardów');
      if (miliardySlownie) czesci.push(miliardySlownie);
      reszta %= 1000000000;
    }

    if (reszta >= 1000000) {
      const miliony = Math.floor(reszta / 1000000);
      const milionySlownie = this.przetworzGrupe(miliony, 'milion', 'miliony', 'milionów');
      if (milionySlownie) czesci.push(milionySlownie);
      reszta %= 1000000;
    }

    if (reszta >= 1000) {
      const tysiace = Math.floor(reszta / 1000);
      const tysiaceSlownie = this.przetworzGrupe(tysiace, 'tysiąc', 'tysiące', 'tysięcy');
      if (tysiaceSlownie) czesci.push(tysiaceSlownie);
      reszta %= 1000;
    }

    if (reszta > 0) {
      const jednostkiSlownie = this.przetworzGrupe(reszta, '', '', '');
      if (jednostkiSlownie) czesci.push(jednostkiSlownie);
    }

    let wynik = czesci.filter(Boolean).join(this.konfiguracja.separator);
    if (jestUjemna) {
      wynik = 'minus' + (wynik ? this.konfiguracja.separator + wynik : '');
    }
    return wynik;
  }

  public kwotaSlownie(kwota: number): string {
    const jestUjemna = kwota < 0;
    const zlote = Math.floor(Math.abs(kwota));
    const grosze = Math.round((Math.abs(kwota) - zlote) * 100);

    let wynik = '';

    if (jestUjemna) {
      wynik += 'minus ';
    }

    wynik += this.liczbySlownie(zlote) + ' ' + this.odmianaZlotych(zlote);

    if (grosze > 0) {
      wynik +=
        this.konfiguracja.groszeSeparator +
        this.liczbySlownie(grosze) +
        ' ' +
        this.odmianaGroszy(grosze);
    }

    return wynik;
  }

  private przetworzGrupe(liczba: number, forma1: string, forma2: string, forma5: string): string {
    if (liczba === 0) return '';

    const setkiIndex = Math.floor(liczba / 100);
    const dziesiatkiIndex = Math.floor((liczba % 100) / 10);
    const jednosciIndex = liczba % 10;
    const liczbaJednosci = liczba % 100;

    const czesci: string[] = [];

    // Dodaj setki
    if (setkiIndex > 0) {
      czesci.push(setki[setkiIndex]);
    }

    // Dodaj dziesiątki i jedności
    if (liczbaJednosci >= 10 && liczbaJednosci <= 19) {
      czesci.push(nastki[liczbaJednosci - 10]);
    } else {
      if (dziesiatkiIndex > 0) {
        czesci.push(dziesiatki[dziesiatkiIndex]);
      }
      if (jednosciIndex > 0 || (liczba === 1 && forma1 === 'tysiąc')) {
        czesci.push(jednosci[jednosciIndex]);
      }
    }

    const liczebnik = czesci.filter(Boolean).join(this.konfiguracja.separator);
    const odmiana = this.odmianaLiczby(liczba, forma1, forma2, forma5);

    if (!odmiana) return liczebnik;
    if (!liczebnik) return odmiana;
    if (liczba === 1 && forma1 === 'tysiąc') return odmiana;

    return liczebnik + this.konfiguracja.separator + odmiana;
  }

  private odmianaLiczby(liczba: number, forma1: string, forma2: string, forma5: string): string {
    if (!forma1 && !forma2 && !forma5) return '';
    if (liczba === 1) return forma1;
    if (liczba % 100 >= 12 && liczba % 100 <= 14) return forma5;
    if (liczba % 10 >= 2 && liczba % 10 <= 4) return forma2;
    return forma5;
  }

  private odmianaZlotych(liczba: number): string {
    return this.odmianaLiczby(liczba, 'złoty', 'złote', 'złotych');
  }

  private odmianaGroszy(liczba: number): string {
    return this.odmianaLiczby(liczba, 'grosz', 'grosze', 'groszy');
  }
}
