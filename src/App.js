import './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
function App() {
	return (
		<div className="App">
			<Layout>
				<Header />
				<code>
					<a
						className="App-link"
						href="https://www.linkedin.com/in/ghdiep/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</code>
				<hr />

				<code>
					<a href="/triforce">Triforce</a>
				</code>
				<hr />
				<code>
					<a href="/resume">Resume</a>
				</code>
				<hr />

				<code className="hidden">
					<a href="/moco-liquor-license">MoCo Liquor License (old data)</a>
				</code>

				<Footer />
			</Layout>
		</div>
	);
}

export default App;
