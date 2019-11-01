import React from 'react';
import Style from './App.module.css';

import Searchbar from './input-text.js';

const worklist = ['Enter your dream location', 'Why not...Tokyo?', 'Melbourne?', 'Sydney?'];

const serialize = function (form) {
  // Setup our serialized data
  var serialized = [];
  // Loop through each field in the form
  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i];
    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
    // If a multi-select, get all selections
    if (field.type === 'select-multiple') {
      for (var n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
      }
    }
    // Convert field data to a query string
    else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
    }
  }
  return serialized.join('&');
};


class App extends React.Component{
  state={
    showSearch:true,
  }
  render(){
    return (
      <div className={Style.container}>
      <img className={Style.background} src={require('./Images/background.jpg')} alt='animated Searchbar'/>
      <div className={Style.container}>
      <form className={Style.container} onSubmit={(e)=>{
        e.preventDefault();
        var form = e.target;
        var formData = serialize(form);
        var togo = formData.split('=')
        window.location.href = `https://www.google.com/maps/place/${togo[1]}`
      }}>

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
        this.setState({
          showSearch:false
        })
      }}
      onBlur={(e)=>{
        this.setState({
          showSearch:true
        })
      }}
      />
      {
      this.state.showSearch === true &&
        <div className={Style.floater}>
          <img className={Style.searchIcon} src={require('./Images/searchicon.png')} alt='animated Searchbar'/>
        </div>
      }
      </form>
      </div>
      <div className={Style.credit}>
      <a style={{backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: '4px 6px', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif', fontSize: '12px', fontWeight: 'bold', lineHeight: '1.2', display: 'inline-block', borderRadius: '3px'}} href="https://unsplash.com/@seefromthesky?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Ishan @seefromthesky"><span style={{display: 'inline-block', padding: '2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height: '12px', width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-2px', fill: 'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" /></svg></span><span style={{display: 'inline-block', padding: '2px 3px'}}>Ishan @seefromthesky</span></a>
      </div>
      </div>
    );
  }
}

export default App;
