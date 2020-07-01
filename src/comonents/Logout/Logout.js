import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logout} from '../../store/action/auth'

class Logout extends Component {
    componentDidMount(){
        this.props.logout()
    }

    render(){
        return <Redirect to={'/'}/>
    }

}

function mapDispathToProps(dispatch){
    return{
        logout: () => dispatch(logout())
    }
}


export default connect(null, mapDispathToProps)(Logout)