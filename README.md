# FiboMulti

## Projekt został wykonany na podstawie zadania 9.

## Dodano elementy:
- **Main.js** - komponent strony głównej
- **Documentation.js** - komponent dokumentacji
- **History.js** - komponent wyświetlający historię ostatnich wpisanych indeksów

## Zmodyfikowano następujące elementy:
### client:
- **Fib.js** - dodano metody umożliwiające komunikację z modułem historii
- **App.js** - zrealizowano w formie routera React

### server:
- **index.js** - zmieniono limit dla indeksu k do 20

### worker:
- **index.js** - zmieniono funkcję obliczającą k-ty wyraz ciągu

## Uruchomienie usługi
W katalogu głównym repozytorium można uruchomić usługę poleceniem:

`COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose -f docker-compose.dev.yml up --build`

Aplikacja jest dostępna na porcie 80.

## Zrzut ekranu
![image](scr.png "Zrzut ekranu")
