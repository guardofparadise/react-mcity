import React from 'react';
import Layout from './HOC/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/AuthRoutes/PrivateRoutes';
import PublicRoute from './components/AuthRoutes/PublicRoutes';

import Home from './components/Home';
import SignIn from './components/SingIn';
import TheTeam from './components/TheTeam';
import TheMatches from './components/TheMatches';
import NotFound from './components/ui/not_found';

import Dashboard from './components/Admin/Dashboard';
import AdminMatches from './components/Admin/matches';
import AddEditMatch from './components/Admin/matches/addEditMatch';
import AdminPlayers from './components/Admin/players';
import AddEditPlayers from './components/Admin/players/addEditPlayer';

const Routes = (props) => {

	return (
		<Layout>
			<Switch>
				<PrivateRoute {...props} exact component={Dashboard} path="/dashboard"/>
				<PrivateRoute {...props} exact component={AdminMatches} path="/admin_matches"/>
				<PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match/:id"/>
				<PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match"/>
				<PrivateRoute {...props} exact component={AdminPlayers} path="/admin_players"/>
				<PrivateRoute {...props} exact component={AddEditPlayers} path="/admin_players/add_players/:id"/>
				<PrivateRoute {...props} exact component={AddEditPlayers} path="/admin_players/add_players"/>
				<PublicRoute  {...props} restricted={false} exact component={Home} path="/"/>
				<PublicRoute  {...props} restricted={true} exact component={SignIn} path="/sign_in"/>
				<PublicRoute  {...props} restricted={false} exact component={TheTeam} path="/the_team"/>
				<PublicRoute  {...props} restricted={false} exact component={TheMatches} path="/the_matches"/>
				<PublicRoute  {...props} restricted={false} component={NotFound}/>
			</Switch>
		</Layout>
	)
}

export default Routes;
