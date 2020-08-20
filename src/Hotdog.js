import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import hotdogImg from './hotdog.png'
import './Hotdog.css'
class Hotdog extends Component{
    constructor(props){
        super(props);
        this.state = {
            h3hidden: true,
            playing: false,
            goBackBtn: false 
        }
        this.audio = new Audio('/dog.mp3')
        this.Play = this.Play.bind(this)
    }
    Play(){
        setTimeout(()=>{
            this.setState(st => ({...st, playing: true}))
        }, 1000)
        this.audio.play()
        setTimeout(()=>{
            this.setState(st => ({...st, playing: false}))
        }, 5400)
    }
    Show = () => {
       this.setState({h3hidden: false})
    }
    Hide = () => {
       this.setState({h3hidden: true})
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({goBackBtn: true})
        }, 4000)
    }
    render(){
        return(
            <div className='Hotdog'>
                {this.state.playing && <img alt='dancing dog gif' className='dancingDog' src='https://i.giphy.com/media/Dl2seYrwPvfjO/giphy.webp'/>}
                <div style={{display: this.state.playing ? 'none' : 'block'}}>
                    <h3 style={{visibility: this.state.h3hidden ? 'hidden' : ' '}}>Click me!</h3>
                    <img alt='hotdog' className='Hotdog-img' onClick={this.Play} onMouseOver={this.Show} onMouseOut={this.Hide} src={hotdogImg}/>
                    {this.state.goBackBtn && <Link className='go-back' exact to='/'>Go back</Link>}
                </div>
            </div>
        )
    }
}
export default Hotdog;