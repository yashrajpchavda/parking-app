import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { Link } from 'preact-router/match';
import clsx from 'clsx';

import { AuthContext } from './../../context/auth';

import style from './style';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const Header = () => {
	const { logout, user } = useContext(AuthContext);

	const classes = useStyles();

	const menuBar = user ? (
		<nav>
			<Link activeClassName={style.active} onClick={logout}>LOGOUT</Link>
		</nav>
	) : (
		null
	);

	return (
		<div className={clsx(classes.root, style.header)}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Zimbra Parking
          			</Typography>
					{menuBar}
				</Toolbar>
			</AppBar>
		</div>
	);

};

export default Header;
