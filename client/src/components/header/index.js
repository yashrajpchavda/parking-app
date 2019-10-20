import { h } from 'preact';
import { Link } from 'preact-router/match';
import clsx from 'clsx';

import style from './style';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
	// <header class={style.header}>
	// 	<h1>Zimbra Parking</h1>
	// 	<nav>
	// 		<Link activeClassName={style.active} href="/">Home</Link>
	// 		<Link activeClassName={style.active} href="/profile">Me</Link>
	// 		<Link activeClassName={style.active} href="/profile/john">John</Link>
	// 	</nav>
	// </header>
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, style.header)}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Zimbra Parking
          			</Typography>
					<nav>
						<Link activeClassName={style.active} href="/">Home</Link>
	 					<Link activeClassName={style.active} href="/login">LOGIN</Link>
				 	</nav>
				</Toolbar>
			</AppBar>
		</div>
	);

};

export default Header;
