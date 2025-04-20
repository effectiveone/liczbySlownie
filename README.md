# Liczby Słownie po Polsku

Nowoczesna biblioteka TypeScript do konwersji liczb na ich zapis słowny w języku polskim. Wersja 2.0.0 została całkowicie przepisana z wykorzystaniem najnowszych technologii i best practices.

## Instalacja

```bash
npm install liczbySlowniepopolsku
# lub
yarn add liczbySlowniepopolsku
```

## Użycie

```typescript
import { LiczbySlownie } from 'liczbySlowniepopolsku';

// Podstawowe użycie
const konwerter = new LiczbySlownie();
console.log(konwerter.liczbySlownie(1234)); // "tysiąc dwieście trzydzieści cztery"
console.log(konwerter.kwotaSlownie(1234.56)); // "tysiąc dwieście trzydzieści cztery złote i pięćdziesiąt sześć groszy"

// Z niestandardową konfiguracją
const konwerterNiestandardowy = new LiczbySlownie({
  separator: '-',
  groszeSeparator: 'oraz'
});
console.log(konwerterNiestandardowy.liczbySlownie(21)); // "dwadzieścia-jeden"
console.log(konwerterNiestandardowy.kwotaSlownie(1.01)); // "jeden złotyorazjeden grosz"
```

## Funkcje

### liczbySlownie(liczba: number): string
Konwertuje liczbę na jej zapis słowny.

### kwotaSlownie(kwota: number): string
Konwertuje kwotę (z groszami) na zapis słowny.

## Konfiguracja

Możesz dostosować zachowanie biblioteki poprzez przekazanie obiektu konfiguracyjnego:

```typescript
interface Konfiguracja {
  separator: string; // separator między słowami (domyślnie: spacja)
  groszeSeparator: string; // separator między złotymi a groszami (domyślnie: " i ")
}
```

## Wsparcie dla TypeScript

Biblioteka jest w pełni napisana w TypeScript i zawiera wszystkie potrzebne deklaracje typów.

## Testy

Biblioteka jest w pełni przetestowana. Aby uruchomić testy:

```bash
npm test
# lub
yarn test
```

## Licencja

MIT

## Autor

Konrad Tytus Gruca
