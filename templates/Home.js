module.exports = `
import React, { Component } from 'react';

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';


class Home extends Component {
	state = {};

	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Ionic Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent padding>
					The world is your oyster.
					<p>If you get lost, the <a target="_blank" rel="noopener" href="htts://ionicframework.com/docs">docs</a> will be your guide</p>
				</IonContent>
			</IonPage>
		);
	}
}


export default Home;
`;
