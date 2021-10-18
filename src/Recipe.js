import React from 'react'

function Recipe(props) {
    const recipe = props.recipe.recipe
    return (
        <div className=''>
            <h2>{recipe.label}</h2>
            <h4>Calories: {Math.floor(recipe.calories).toLocaleString()}</h4>
            <img src={recipe.image} alt={recipe.image} />
            <p><button>View Recipe</button></p>
        </div>
    )
}

export default Recipe
