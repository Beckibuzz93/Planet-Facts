# Frontend Mentor - Planets fact site solution
This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f).

# Links
- Solution URL: [Add solution URL here]()
- Live Site URL: [Add live site URL here]()

# Description
This application is a solution to the frontend mentor challenge cited above. 

# Installation 
## Clone this repo 
```bash 
git clone git@github.com:Beckibuzz93/Planet-Facts.git
```
## Navigate to the app folder
```bash
cd Beckibuzz93/Planet-Facts
```
<h2> For developers only! </h2>

## Install packages
```bash
npm install
```
## Run development server from terminal
```
npm run dev
```

## Run testing from terminal
```
Just tests - npm run test
Coverage - npm run coverage 
```

# Technologies used
1. ReactJS, Vite, React Router Dom, Jest(https://www.npmjs.com/package/jest)
2. Custom CSS
3. Google fonts

# What I learned

### Using props for CSS 
- To avoid rewriting code, I learned to use props for CSS, for example: 
```html
<div className={props.anyClassNameHere}> </div>
```
### Scaling SVGs
- During this I have learned to scale SVGs with the transform property, by taking the width and height of the SVG and adapting that. 
- For example, if the SVG was 'width: 450' the css property would be:

```css
.svg-image {
  transform: scale(0.45);
}
```
- You can then use this and adapt it for different screen sizes, for example I added 10 for tablets and small screens and an extra 30 for desktops. 

### Nested routes in react router dom 

- In react router dom, they have nested routes so that you can have multiple navigations on one page. 

- For example in the main App/Routes component you can have:
```js 
<Route path='/mercury' element={<Components.MercuryNav/>}>
  <Route index element={<Pages.MercuryOverview/>}/>
  <Route path='structure' element={<Pages.MercuryStructure/>} />
  <Route path='surface'  element={<Pages.MercurySurface/>} />
</Route>
```
- Then in the component you would Links or NavLinks like:
```js 
<NavLink to='/mercury' end><span>01</span> Overview </NavLink>
<NavLink to='/mercury/structure'><span>02</span> Structure </NavLink>
<NavLink to='/mercury/surface'><span>03</span> Surface </NavLink>
```
- Note: NavLink comes with an isActive/.active class to easily style the links, whilst Link does not.


# Useful resources

- [React Router Dom - Nestest Routes](https://www.robinwieruch.de/react-router-nested-routes/) - This article helped to understand nested routes in react router dom, I'd recommend it to anyone still learning this concept.

- [React Router Docs](https://reactrouter.com/en/main/components/nav-link) - This is the react router documentation - Read it, documentation is good!

- [Scaling SVGS](https://css-tricks.com/scale-svg/) - CSS-Tricks helps with any CSS needs, this article explains SVGS in detail.


# Credits
## This project was created by: 

[Becki: Beckibuzz93](https://github.com/Beckibuzz93)
