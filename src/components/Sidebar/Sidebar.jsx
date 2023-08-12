import { Link } from "react-router-dom";


export function Sidebar(){
	return(
		<div className="sidebar">
				<Link to='/'>Dashboard</Link> ||
				<Link to='/department'>Department</Link> ||
				<Link to='/products'>Products</Link>
		</div>	
	)
}