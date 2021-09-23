Contains components which we are ideally going to re-use, broken down into three parts

### Elements

Contains small things like button, alerts etc

### layouts

Contains things like boxes, sliders (boxes with image and text passed as a props).

these elements when passed different props renders different things for example Header in this app can be reusable for different screens

### Sections

Contains things like navbar, footer, contact us form

These elements are generally meant to render same thing at different places for example Horizontal and vertical scroll

Scroll component have dependency on Home component (for context), this restricts us from using it for other purposes
