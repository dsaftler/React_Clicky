# React_Clicky
This app uses React and inline CSS styling to render a grid of images used in a game of "clicky"
State of the image changes on clicking the image, and logic determines whether the image has been clicked already during this round of play.  
If it has, the grid images are shuffled, and a loss is registered.
If it has not, a "unique click" register is incremented.
If the user clicks every image only once, a Win is registered.

This grid will scale using media queries, but the header was added after, and is not responsive.
Also, I did not realize until I styled the app that hover would not be available without some additional hoop-jumping.  If time permits, I will fix both these issues.
