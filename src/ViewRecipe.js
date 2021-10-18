


function ViewRecipe(props) {

  const handleClick = () => {
      props.hide('hide')
  }
  console.log(props.recipe)

    return (
        <div className='view-recipe' onClick={handleClick}>
            <div className='view-recipe-content'>
                <h2>{props.recipe.label}</h2>
                <img src={props.recipe.image} alt={props.recipe.label} />
                <div>
                    <h3>Ingredients</h3>
                    {props.recipe.ingredientLines.map((item, i) => {
                        return <p className='ingredient' key={i}>{item}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ViewRecipe
