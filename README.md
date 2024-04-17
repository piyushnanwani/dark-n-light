# useContext Hook for Light & Dark Mode Themes

## Steps
1. Create a new React app with vite `npx create-vite@latest`
2. We create a context variable using "createContext" method. And then wrap our whole `<App />` component with it. And provide it the value of "isDark" state variable
3. Now this "isDark" state variable is accessible to all its children
4. Using conditional rendering we update the color / design of our complete app or particular components based on the value of "isDark"


## Screenshots
> Light Mode

<p align="center" >
<img src="https://github.com/piyushnanwani/dark-n-light/blob/main/screenshots/light-mode.png" width="700px">
</p>

> Dark Mode
 
<p align="center" >
<img src="https://github.com/piyushnanwani/dark-n-light/blob/main/screenshots/dark-mode.png" width="700px">
</p>
