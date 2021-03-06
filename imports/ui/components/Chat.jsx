import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import NewMessage from './NewMessage.jsx';


class Chat extends Component {

    handleLogout() {
        Meteor.logout((e) => {
            if(e) console.log(e);
            else console.log('Logged Out');
        })
    }        

    render() {
        
        let currentUser = this.props.currentUser;

        return (
            <div className="chat">
                <nav>
                    <div className="row">
                        <div className="col-xs-6 username">{currentUser.username}</div>
                        <div className="col-xs-6 logout" onClick={() => this.handleLogout()}>Logout</div>
                    </div>
                </nav>
                <div className="main container">
                    <div className="messages row">
                        <div className='col-lg-8 col-lg-offset-2 col-sm-12'>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h4 className="list-group-item-heading">Nome</h4>
                                    <p className="list-group-item-text">Mensagem</p>
                                    <p className="list-group-item-text">01/01/2017</p>
                                </li>
                                <li className="list-group-item">
                                    <h4 className="list-group-item-heading">Nome</h4>
                                    <p className="list-group-item-text">Mensagem</p>
                                    <p className="list-group-item-text">01/01/2017</p>
                                </li>
                                <li className="list-group-item">
                                    <h4 className="list-group-item-heading">Nome</h4>
                                    <p className="list-group-item-text">Mensagem</p>
                                    <p className="list-group-item-text">01/01/2017</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <NewMessage currentUser={currentUser} />
                </div>
            </div>
        )
    }
}

export default Chat;