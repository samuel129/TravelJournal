import React from 'react';
import styles from "./style.css"
import Data from "./data.js"

export default function Entry(props) {
	return (
		<div className="card">
			<div>
				<img src="japan.jpg"></img>
			</div>
			<div className="card-textbox">
				<div className="card-location"> <h4>J A P A N</h4></div>
				<h1>Dotonbori</h1>
				<h3>12 Jan. 2021 ~ 12 Jan. 2022</h3>
				<h6></h6>
			</div>
		</div>
	)
}