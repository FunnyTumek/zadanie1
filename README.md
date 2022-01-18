## Projekt numer 1
Aplikcja została wykonana przy użyciu Reacta. Użyta baza danych to PostgreSQL
W aplikacji umożliwiono obliczenie elemntów ciągu Fibonnaciego. Każde obliczenie zapisywane jest w historii.</p>
# Projekt został podzielony na trzy części:

**Client:**
- Main.js - jest komponentem strony głównej
- Documentation.js - komponent odpowiedzialny za dokumentację projektu
- History.js - komponent wyświetlający historię ostatnich obliczeń ciągu fib
- Fib.js - metody umożliwiające komunikację<
- App.js - odpowiedzialne za routing React'a
 
**Serwer:**
- Index.js - dodawanie do bazy rekordów dla k maksymalnego 20
 
**Worker:**
- Index.js - oblicza ciąg Fibonacciego

## Uruchomienie usługi
Aby uruchomić aplikację w katalogu głównym repozytorium należy wpisać polecenie:

`COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose.dev.yml up --build`

Aplikacja jest dostępna na porcie 80.

## Zdjęcie potwierdzające działania usług
![photo](https://github.com/FunnyTumek/zadanie1/blob/main/photo.JPG )
![photo](https://github.com/FunnyTumek/zadanie1/blob/main/photo1.JPG )
