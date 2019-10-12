import { createElement } from 'preact';
import style from './style';
import gql from 'graphql-tag';

import { useQuery } from '@apollo/react-hooks';

const SAY_HI = gql`
	{
		sayHi
	}
`;

const Home = () => {
	const { loading, data } = useQuery(SAY_HI);

	if(data) {
		console.log('data is', data);
	}
	return (
		loading ? 
			<h1>Loading...</h1> :
			(<div class={style.home}>
				<h1>{data.sayHi}</h1>
				<p>This is the Home component.</p>
			</div>)
		
	)
};

export default Home;
