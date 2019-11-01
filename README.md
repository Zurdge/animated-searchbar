# Animated Searchbar for ReactJS

## Working Demo
https://zurdge.github.io/animated-searchbar/

## Install via NPM
npm i animated-searchbar

<Searchbar
  name={'WhereToGo'} //Field name of search bar
  className={Style.input} // Classname for styling
  ONLYSHOWONFOCUS={true} // When not clicked on and 'Acive', hide the animated text
  blinker={true} // 
  minLength={1} //
  maxLength={10} //
  typeList={[]} // Takes an array of strings e.g. ['Welcome to githut!', 'Type your query here']
  typeDelay={3000} // After completing a string from the array...how long should it wait in ms
  typeSpeed={{min:50, max:200}} // how quickly should it type? generates a random delay between this range
  onClick={(e)=>{}} // 
  onHover={(e)=>{}} //
  onFocus={(e)=>{}} //
  onBlur={(e)=>{}} //
/>
