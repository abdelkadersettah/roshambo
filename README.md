# Roshambo-v1

Rock paper scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock", "paper", and "scissors", the UI of the game is designed by frontendmentor and coded by [abdelkader settah](https://github.com/abdelkadersettah).

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

- Paper beats Rock
- Rock beats Scissors
- Scissors beats Paper

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

<!-- - Scissors beats Paper
- Paper beats Rock
- Rock beats Lizard
- Lizard beats Spock
- Spock beats Scissors
- Scissors beats Lizard
- Paper beats Spock
- Rock beats Scissors
- Lizard beats Paper
- Spock beats Rock -->
