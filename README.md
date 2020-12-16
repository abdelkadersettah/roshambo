# Roshambo-v1.1

The game is an expansion on the game Rock, Paper, Scissors (roshambo-v1). Each player picks a variable and reveals it at the same time. The winner is the one who defeats the others. In a tie, the process is repeated until a winner is found.
check [Rules](#Rules) to know how you’re going to play this game. the UI of the game is designed by frontendmentor and coded by [abdelkader settah](https://github.com/abdelkadersettah).

## Table of Contents

- [Overview](#Overview)
- [Rules](#Rules)
- [Quick start](#Quick-start)
- [What's included](#What's-included)
- [Copyright](#Copyright)

## Overview

we use Sass to style this game and javascript for players interaction.

players are able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser

  ## Rules

  If the player wins, they gain 1 point. If the computer wins, the player loses one point.
  To give you an idea on how you’re going to play this game, then here are the lists of some of the rules you need to consider before and while playing this Rock-Paper-Scissors-Stone-Lizard-Spock and these include the following:

- Scissors beats Paper
- Paper beats Rock
- Rock beats Lizard
- Lizard beats Spock
- Spock beats Scissors
- Scissors beats Lizard
- Paper beats Spock
- Rock beats Scissors
- Lizard beats Paper
- Spock beats Rock

## Quick start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/abdelkadersettah/roshambo`.

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
ROSHAMBO/
├── dist/
│ ├── css/
│ │  └── main.css
│ ├── images/
│ ├── app.js
│ └── index.html
│
└── src/
│   ├──js/
│   │  ├── models/
│   │  │   ├── Result.js
│   │  │   ├── Score.js
│   │  │   └── Shapes.js
│   │  ├── views/
│   │  │  ├── base.js
│   │  │  ├── resultView.js
│   │  │  ├── rulesView.js
│   │  │  ├── scoresVie.js
│   │  │  └── shapesView.js
│   │  └── index.js
│   ├── sass/
│   ├── abstracts/
│   │ ├── borders.scss
│   │ ├── gradients.scss
│   │ ├── mixins.scss
│   │ └── variables.scss
│   ├── base/
│   │ ├── base.scss
│   │ └── typography.scss
│   ├── components/
│   │ ├── buttons.scss
│   │ ├── menu.scss
│   │ ├── play.scss
│   │ ├── rules-popup.scss
│   │ └── shapes.scss
│   ├── pages/
│   │ └── main.scss
│   └── main.scss
│
├──.babelrc
├──package-lock.json
├──package.json
├──README.md
└──Webpack.config.js
```

## Copyright

Copyright (c) 2020 design a credit to the original author frontendmentor coded by [abdelkader settah](https://github.com/abdelkadersettah)
