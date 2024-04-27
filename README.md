<h1>MineSweep</h1>
The Minesweep game is a fun game aim to for users who are currently looking to pass a couple of minutes in their day.
You start at the starting line and the aim is to get to the finishing line without hitting the invisible mines that are place around the board.

A link for the game can be found here https://8000-joshrudge22-minefieldpr-doaju9of9pk.ws-eu110.gitpod.io/

<h2>Site Owner Goals</h2>

•	To provide the user with a fun easy game to play that should take a couple of minutes to complete.

•	To present the user with a website that is visually appealing and fully responsive.

•	Push and frustrate the user into completing the game.

<h2>User Feedback</h2>
Tested by family and friends. They all enjoyed with no issues saying it reminded them of playing a game like this back in their childhood.


<h2>Design</h2>

<h3>Imagery</h3>
For my background I have gone for a retro image to match the retro game that I have created. The image works very well on all devices.

![background](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/dae8d48f-2911-4b38-8b4c-abe25c8598fa)

I also used the games image as my favicon

![favicon-16x16](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/061b3562-46e6-4036-a075-1b5c97c984d2)

<h3>Colour Scheme</h3>
I used the #FFFFFF for the text as it was easier to read with my retro background.

![#ffffff](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/a2446ac1-4f7e-43d0-8ba6-dc3fab6fcc38)

For the starting cell I added finishCellElement.style.backgroundColor = 'green'; to the javascript code

![#367c2b](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/24a2cbbb-4166-4f52-af05-6bd721aad3ce)

For the finishing cell I added finishCellElement.style.backgroundColor = 'red'; to the javascript code

![#e11f1c ](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/7031351a-49c0-42f2-9ce1-40228a84c5ba)

For the user when they make a move to the next space and for the buttons to start and restart the game I used #007bff.

![#007bff](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/332fe885-4255-47ed-ae19-dbcfa2577bff)

For the mines I used #e11f1c.

![#e11f1c ](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/7031351a-49c0-42f2-9ce1-40228a84c5ba)

<h3>Fonts</h3>
I used Google Fonts Jersey 25 or all the text on the page and I have sans-serif as a backup just encase Jersey 25 doesn’t show. The main reason for going for this font was it gave a retro look to the website which kind of matches the background image.

<h3>Layout</h3>
The lay out of the game is a game board and two buttons. There are two cells that have two different colours, you have the starting cell which is the starting line where the user begins and you have the red cell which is the finishing line where the user needs to get to in order to complete the game.
When the user hits a mine the cell then changes to a big red X showing the user that they have hit a mine. To make it a little bit more difficult for the user the red X disappears when the user clicks start game.

<h3>Moblie Lighthouse</h3>

![lighthouse moblie](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/4275669b-ce43-42b8-8f38-2a472d23e10f)

<h3>Desktop Lighthouse</h3>

![lighthouse desktop](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/ed0073c2-0543-4694-9b4d-04a28c06864e)

<h3>Wireframes</h3>

![Wireframes](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/db766774-46e9-42ed-ab86-53529f681448)

<h3>Game Area</h3>
The game board has 56 cells, one with a green cell showing the user this is the start line and one with a red cell showing the user where the finish line is. The user can only make move one cell at a time, when they move off the starting cell the cell the user moves to changes to blue to show the user where they are and the options they have.

There are 15 mines hidden around the board. Once the user hits a mine they will see a red X on the cell they try to move to, in order for the user to start the game again they can click start again and the user goes back to the starting cell and the mines stay where they are. Meaning if the user can remember where they last hit a mine they can avoid the mine.

If the user completes the game by getting to the finishing cell they get a congratulations message and can they click on restart game which randomizes the mines giving the user a new game.

<h2>Testing</h3>

<h3>Am I Responsive?</h3>

![responsive](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/7877bcb5-39e3-4885-ab54-d1bad19023e0)
<h3>Validator Testing
<h4>HTML</h4>
o	No errors were found when passing through the official W3C Markup Validator

![W3C - Hmtl Validator](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/21cf14b8-0800-4a71-ac62-f1dccdd1521c)
<h4>CSS</h4>
o	No errors were found when passing through the official W3C CSS Validator

![W3C - CSS Validator](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/16b9318b-cdf6-42c3-9030-e777bdff4729)
<h4>Javascript</h4>
o	No errors were found when passing through the the JSHint Validator

![JSHint](https://github.com/JoshRudge22/Minefield-Project-2/assets/139856712/3a35b0e7-0291-47f5-8a0e-d0bb04102c56)

<h2>Accessibility</h2>
<h3>Game Testing</h3>
The game was thoroughly tested by friends and family to ensure that everything worked as intended including the following:
o	Starting and finishing coloured cells stayed the same colour through out their experince.
o	They were aware when they did or didn't hit a mine.
o	They could read the instructions and buttons below
o	Buttons were working correctly as they were advertised
<h3>Device Testing</h3>
I also used the following website to test responsiveness:

<h2>Fixed Bugs</h2>
An issue I have was when the user clicks restart game sometimes the starting and finish cells which are coloured in would go missing. In order to fix this I add in CellElement.style.backgroundColor which now keeps the colour regardless of how many times the user restarts the game.

<h2>Known Bugs</h2>
There are no known bugs.

<h2>Technologies Used</h2>
<h3>Languages</h3>

•	JavaScript

•	HTML5

•	CSS3

<h2>Frameworks - Libraries - Programs Used</h2>

•	Am I Responsive - Used to verify responsiveness of website on different devices.

•	Responsinator - Used to verify responsiveness of website on different devices.

•	Lucidspark - Used to generate Wireframe images.

•	Chrome Dev Tools - Used for overall development and tweaking, including testing responsiveness and performance.

•	GitHub - Used for version control and hosting.

•	Google Fonts - Used to import and alter fonts on the page.

•	W3C - Used for HTML & CSS Validation.

•	Favicon - Used to create the favicon.

•	Freepik – For my background image.

<h2>Deployment</h2>
The site was deployed using GitHub pages. The steps to deploy using GitHub pages are:

1.	Go to the repository on GitHub.com
  
2.	Select 'Settings' near the top of the page.
  
3.	Select 'Pages' from the menu bar on the left of the page.
  
4.	Under 'Source' select the 'Branch' dropdown menu and select the main branch.
  
5.	Once selected, click the 'Save'.

6.	Deployment should be confirmed by a message on a green background saying "Your site is published at" followed by the web address.
The live link can be found here -  

<h2>Resources Used</h2>

Love Maths - Code Institute

Rock - Paper = Sicssors - Code Institute

Stack Overflow

<h2>Acknowledgments</h2>
My mentor Antonio for his support and advice.
