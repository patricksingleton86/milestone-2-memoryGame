`python3 -m http.server`

# Flip It

Tile flip pattern match game, click the tiles to display the hidden pictures, find all the matching pairs to win. Created for my milestone project as part of the Full Stack Software Development course.

## UX

As a site user, I would like to:
* play
* see my time
* see the fastest time
* learn how to play
* contact the creator

### Strategy

Build a simple memory game that users find fun to play.

### Scope

Keep it simple, a single page with everything the user needs

The game will be the main focus

Links for how to play and contact information. 

### Structure

As the game is what users are coming for, it will be front and center.

The timer and best time will be displayed above to let users know what the challenge is.

A reset button for if the user wishes to start over.

A "how to play" button which triggers a modal containing instructions and a "contact" button which trigger a modal with contact information.

### Skeleton

[Wireframes](https://github.com/patricksingleton86/milestone-2-memoryGame/blob/master/wireframes/memoryGame-wireframes.pdf)

### Surface

Everything should be as simple and obvious as possible.

## Features

* Click to flip tiles to display the picture at the back. 
* Timer starts on first click. 
* Reset button for starting over.
* How to play and contact buttons to display desired information.

## Technologies Used

HTML5 for the layout.

CSS3 for styling.

Javascript for functions and interactivity.

Bootstrap was used for responsive grid and modals.

Jquery was used for functions and interactivity.

## Testing

Majority of testing done with Google developer tools.

All links are working as desired:
* The how to play and contact buttons open their respective modals.
* The game timer starts on the first tile flipped and stops when all tiles are matched.
* The best time is retrieved from local storage and if beaten, is replaced with the new fastest time.
* Reset button resets timer and shuffles tiles

HTML ran through W3 Validator

CSS ran through W3 Jigsaw

JS ran through JS Hint

## Deployment

Site Deployed to Github pages

In Github: 
* select yout repositories
* select milestone-2-memoryGame
* select settings
* Scroll to Github Pages section and select Branch:master
* Click save

If you wish to run this code, copy and paste git clone https://github.com/patricksingleton86/milestone-2-memoryGame.git to your terminal

## Credits

### Images

Images obtained from Pexels

pexels-aleksey-kuprikov-4024484

pexels-anna-shvets-3852161

pexels-cleyton-ewerton-4995693

pexels-dina-nasyrova-3808243

pexels-ellie-burgin-4612722

pexels-jeffrey-czum-3330118

stockvault-brain-as-black-lightbulb175284