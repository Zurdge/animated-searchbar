import React from 'react';
import Style from './input-text.module.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class App extends React.Component{
  state={
    placeholder : '',
  }
  typeList_int = 0;
  typeDelay = this.props.typeDelay || 2500;
  componentDidMount(){
    this._blinker();
    this._animatePlaceholder();
    this._updatePlaceholder();
  }
  typespeed(){
    var range;
    try{
      range = {
        min : this.props.typeSpeed.min,
        max : this.props.typeSpeed.max,
      }
    }catch(e){
      range = {
        min : 1,
        max : 200,
      }
    }

    var speed = getRandomInt(range.min, range.max);
    return(speed)
  }
  _blinker(){
    if(!this.props.blinker){return}
    setInterval(()=>{
      this.blinker = !this.blinker;
    },500)
  }
  _animatePlaceholder(){
    // Check if animatePlaceholder is null?
    if(!this.animatePlaceholder){this.animatePlaceholder = ''}
    setTimeout(()=>{
      try{
        var currentPlaceholder = this.props.typeList[this.typeList_int];
        // Check if placeholder is fully typespeed
        if(this.animatePlaceholder == currentPlaceholder){
          setTimeout(()=>{
            this.animatePlaceholder = '';
            this.typeList_int += 1;
            if(this.typeList_int >= this.props.typeList.length){
              this.typeList_int = 0;
            }
            this._animatePlaceholder();
          },this.typeDelay)
        }else{
          // Type our latters of typeList
          var newPlaceholder = '';
          for(var i = 0; i <= this.animatePlaceholder.length; i++){
            newPlaceholder += currentPlaceholder.charAt(i);
          }
          this.animatePlaceholder = newPlaceholder;
          this.setState({
            animateDelay:this.typespeed(),
          })
          this._animatePlaceholder();
        }
      }catch(e){
        console.log(e)
      }
    },this.state.animateDelay)
  }
  _updatePlaceholder(){
    setInterval(()=>{
      if(this.element === document.activeElement || !this.props.ONLYSHOWONFOCUS){
        var placeholder = this.animatePlaceholder;
        if(this.blinker){
          placeholder += '_';
        }
        this.setState({
          placeholder:placeholder,
        })
      }else{
        this.setState({
          placeholder:'',
        })
      }
    },100)
  }
  render(){
    return (
      <input
        ref={(r)=>{this.element = r}}
        className={this.props.className || Style.input}
        type="text"
        name={this.props.name || 'AnimatedSearchbar'}
        autoComplete={this.props.autocomplete || 'AnimatedSearchbar'}
        list={this.props.list || null}//	The id of the <datalist> element that contains the optional pre-defined autocomplete options
        maxLength={this.props.maxLength || 99}//	The maximum number of characters the input should accept
        minLength={this.props.minLength || 0}//	The minimum number of characters long the input can be and still be considered valid
        pattern={this.props.pattern || null}//	A regular expression the input's contents must match in order to be valid
        placeholder={this.state.placeholder || null}//	An exemplar value to display in the input field whenever it is empty
        readOnly={this.props.readonly || false}//	A Boolean attribute indicating whether or not the contents of the input should be read-only
        size={this.props.size || null}//	A number indicating how many characters wide the input field should be
        spellCheck={this.props.spellcheck || null}//	Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used

        onClick={(e)=>{
          try{
            this.props.onClick(e);
          }catch(e){}
        }}
        onFocus={(e)=>{
          try{
            this.props.onFocus(e);
          }catch(e){}
        }}
        onBlur={(e)=>{
          try{
            this.props.onBlur(e);
          }catch(e){}
        }}
      />
    );
  }
}
export default App;
