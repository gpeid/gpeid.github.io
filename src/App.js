import './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
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
			<code>
				<a href="/triforce">Triforce</a>
			</code>
			<code>
				<a href="/moco-liquor-license">MoCo Liquor License (old data)</a>
			</code>
			<Footer />
		</div>
	);
}

export default App;
