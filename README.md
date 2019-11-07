<p align="center"><img src="AnimatedSearchbar.gif" /></p>

<h1 align="center"> Animated Searchbar - ReactJS </h1>

<p align="center"> Create a searchbar that talks back to the user </p>

<hr/>

<p> `A ReactJS component which takes all the default variables of a <input type='text' name="fname"/> and an additional array of string varialbes to type out to the user`></p>

<

<h3> Demo </h3>

<a href="https://zurdge.github.io/animated-searchbar/"> Animated Searchbar </a>

<h3> Code Demo </h3>

```html

const worklist = ['Enter your dream location', 'Why not...Tokyo?', 'Melbourne?', 'Sydney?'];
<Searchbar
name={'WhereToGo'}
className={Style.input}
ONLYSHOWONFOCUS={true}
blinker={true}
minLength={1}
maxLength={10}
typeList={worklist}
typeDelay={3000}
typeSpeed={{min:50, max:200}}

onClick={(e)=>{
  console.log('onClick');
}}
onHover={(e)=>{
  console.log('onHover');
}}
onFocus={(e)=>{

}}
onBlur={(e)=>{

}}
/>

```

<h3> Download & Installation </h3>

```shell
$ npm i animated-searchbar
```

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>James Edward Burdge</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
