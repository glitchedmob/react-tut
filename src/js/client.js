import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.component {
	render() {
		return (
			<h1>It Works!</h1>
		);
	}
}

const app = document.getElemetById("app");

ReactDOM.render(<Layout/>, app)