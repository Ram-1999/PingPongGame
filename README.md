# Ping Pong Game

A classic Ping Pong game implemented using JavaScript, HTML, and CSS. This project features a simple and interactive interface where you can play a game of Ping Pong against the computer or a friend.

## Features

- Two-player mode on the same computer
- Simple and intuitive controls
- Score tracking
- Responsive design

## Demo

Check out the live demo [here](#).

## Getting Started

Follow these instructions to set up and run the Ping Pong game on your local machine.

### Prerequisites

- Web browser (e.g., Chrome, Firefox, Safari)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ping-pong-game.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ping-pong-game
    ```

3. Open `index.html` in your web browser to play the game.

## Usage

### Controls

- **Player 1 (Left Paddle)**:
  - Move up: `W` key
  - Move down: `S` key
- **Player 2 (Right Paddle)**:
  - Move up: `Up Arrow` key
  - Move down: `Down Arrow` key

### Game Modes

- **Single Player**: Play against a simple AI. The AI movement is coded in the `script.js` file.
- **Two Player**: Play against another player using the keyboard controls mentioned above.

## Customization

You can customize various aspects of the game, such as paddle speed, ball speed, and game aesthetics by editing the `style.css` and `script.js` files.

### Example: Changing Ball Speed

To change the ball speed, update the `ballSpeed` variable in the `script.js` file:

```javascript
let ballSpeed = 5;
