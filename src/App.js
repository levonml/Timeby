import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
	return(
		<Router>
		<div>
		<div><h1>TimeBy</h1></div>
		<div>
		<Link to= "/2018">2018</Link>
		<Link to= "/2019">2019</Link>
		<Link to= "/2020">2020</Link>
		<Link to= "/2021">2021</Link>
		<Link to= "/">2022</Link>
		</div>
		</div>
		</Router>
	)
}

export default App