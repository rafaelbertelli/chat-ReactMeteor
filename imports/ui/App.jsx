import React , { Component } from 'react';
import Login from './components/Login.jsx'
import Chat from './components/Chat.jsx';

// =============
// App Component
// =============
class App extends Component {

	render() {
		let loading = this.props.loading;
		let currentUser = this.props.currentUser;

		if(loading) {
			return (<div className="loading">Loading...</div>);
		} else {
			if(currentUser) {
				return (<Chat currentUser={currentUser} />);
			} else {
				return (<Login />);
			}
		}
	}

}

export default App;
