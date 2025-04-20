# Changelog

Wszystkie istotne zmiany w tym projekcie będą udokumentowane w tym pliku.

Format jest oparty na [Keep a Changelog](https://keepachangelog.com/pl/1.0.0/),
a ten projekt przestrzega [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-04-20

### Dodano

- Pełne wsparcie dla TypeScript
- Nowa klasa `LiczbySlownie` z metodami `liczbySlownie` i `kwotaSlownie`
- Możliwość konfiguracji separatorów i odmiany
- Kompleksowe testy jednostkowe
- Automatyczne generowanie dokumentacji
- CI/CD z GitHub Actions
- Automatyczne publikowanie pakietu na npm
- Wsparcie dla różnych formatów modułów (ESM, CommonJS)
- Lepsze formatowanie kodu z Prettier
- Linting z ESLint
- Git hooks z Husky
- Conventional Commits z commitlint
- Automatyczne zarządzanie wersjami z standard-version

### Zmieniono

- Przepisano cały projekt na TypeScript
- Zastąpiono Webpack nowoczesnym Vite
- Zaktualizowano strukturę projektu
- Poprawiono obsługę błędów i typów

### Usunięto

- Stare pliki JavaScript
- Konfigurację Webpack
- Konfigurację Babel

## [1.0.8] - 2022-04-20

### Dodano

- Wsparcie dla liczb ujemnych
- Wsparcie dla liczb z groszami

### Zmieniono

- Poprawiono obsługę błędów

## [1.0.0] - 2022-04-20

### Dodano

- Pierwsza wersja biblioteki
- Podstawowa funkcjonalność konwersji liczb na zapis słowny
