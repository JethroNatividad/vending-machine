import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Cola.css'
class Cola extends Component{
    constructor(props){
        super(props)
        this.state = {
            goBackBtn: false
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({goBackBtn: true})
        }, 4000)
    }
    render(){
        return (
            <div className='Cola'>
                <img alt='cola.gif' src='https://i.giphy.com/media/hQKiGV6MG8WmsHg2yx/giphy.webp'/>
                <div className='stars'></div>
                <div className='twinkling'></div>
                <div className='clouds'></div>
                {this.state.goBackBtn && <Link className='go-back' exact to='/'>Go back</Link>}
                
            </div>
        )
    }
}
export default Cola