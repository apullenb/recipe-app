import React from 'react'

function Recipe(props) {
    const recipe = props.recipe.recipe
    return (
        <div>
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.image} />
            <p>{Math.floor(recipe.calories)}</p>
        </div>
    )
}

export default Recipe
