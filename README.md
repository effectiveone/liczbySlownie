# Przekształcanie liczb na słowa

<p>Ten projekt umożliwia przekształcenie liczby na jej słowną reprezentację. Na przykład, podając 1234 jako argument, zwrócona zostanie wartość "jeden tysiąc dwieście trzydzieści cztery".</p>

## Jak używać

<p>Aby korzystać z tego projektu, należy wywołać funkcję liczbySlownie z odpowiednim argumentem.</p>
<br>
<p>Funkcja liczbySlownie przyjmuje argument typu number i zwraca słowną reprezentację liczby.</p>

```
import { liczbySlownie } from "./liczbySlownie";

console.log(liczbySlownie(1234));
// Zwraca "jeden tysiąc dwieście trzydzieści cztery"
```

## Jak działa

<p>Projekt działa poprzez dzielenie liczby na grupy cyfr - zawsze po trzy cyfry. Następnie każda z tych grup jest przetwarzana, a ich słowna reprezentacja jest dodawana do wyniku.</p>
<br>
<p>Jeśli liczba posiada część dziesiętną, to zostaje ona oddzielona od części całkowitej i przetwarzana osobno.</p>

## Co zawiera

<p>Projekt zawiera moduł liczbySlownie, który eksportuje funkcję liczbySlownie. Moduł zapis zawiera stałe używane przez funkcję liczbySlownie, takie jak słowne reprezentacje jednostek, dziesiątek, setek, itd.</p>

## Jak uruchomić

<p>Aby uruchomić projekt, należy zainstalować zależności poprzez wywołanie polecenia npm install, a następnie wywołać skrypt start poleceniem npm start.</p>

## Autor

<p>Ten projekt został stworzony przez Konrad Gruca.</p>
