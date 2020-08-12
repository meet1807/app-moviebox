# steps followed during the project:

1. create the basic frontend using `npx create-react-app frontend`
2. Get rid of unnecessary code.
   install latest version of bootstrap for easy designing and responsiveness.
   `npm i bootstrap`
   install axios to fetch data from backend:
   `npm i axios`
   add the following line in package.json file when in development environment to talk to backend server. (5000 is the port number)
   `"proxy": "http://localhost:5000"`
3. App component will hold all the routings.
4. create a Home component to hold all other components.
5. create movieBlock, card, row components(Reusable) to fetch data from backend and display it.
6. Add lazy load functionality to images - renders images that can be visiable on the viewports at a time. Increases the component loading performance and decreases the time it take to render it. also it downloads the images when it will be visible in the viewport(screen). so site loads faster ( Smooth experience)
   Read the whole blog here by Malcolm Laing :
   https://medium.com/frontend-digest/progressively-loading-images-in-react-107cb075417a
7. Add jumbotron to give information about this app. (Static component)
8. Add Banner component at the top of the website below nav-bar.
9. Add NavBar with links to home genres( action, romance, comedy, documentry) ,login ,search funtionality.
10. Add footer
11.
