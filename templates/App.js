module.exports = `
	import React, { Component } from 'react';
	import { BrowserRouter as Router, Route } from 'react-router-dom';
	
	import { IonApp, IonPage } from '@ionic/react';
	import './App.css';
	import Home from './pages/Home/Home';
	import '@ionic/core/css/core.css';
	import '@ionic/core/css/ionic.bundle.css';


	class App extends Component {
	
		render() {
			return (
				<Router>
					<IonApp>
						<IonPage id="main">
							<Route path="/" exact component={Home} />
						</IonPage>
					</IonApp>
				</Router>
			);
		}
	}


	export default App;
`;
