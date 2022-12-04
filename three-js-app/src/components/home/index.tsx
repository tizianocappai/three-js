import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<div id='sidebar'>
				{/* other elements */}

				<nav>
					<ul>
						<li>
							<Link to={`base-cube`}>Base Cube</Link>
						</li>
						<li>
							<Link to={`base-cube-animated`}>
								Base Cube Animated
							</Link>
						</li>
					</ul>
				</nav>

				{/* other elements */}
			</div>
		</>
	);
}

export default Home;
