import React from 'react'
import style from './style.css'

const Recipe = ({title,calories,image,ingredients}) => {
	return <div className="rat">
	<h1>{title}</h1>
	<ol>
	{ingredients.map(ingredients=>(
		<li>{ingredients.text}</li>

		))}
	</ol>
	<p> cal:{calories}</p>
	<img className="img" src={image} alt=""/>
	</div>
}
export default Recipe