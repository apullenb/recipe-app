


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
                <button style={close}>X CLOSE</button>
            </div>
        </div>
    )
}

export default ViewRecipe

const close = {
    border: '2px solid #abecd6',
    padding: '1% 2%',
    color: '#abecd6',
    textAlign:'right',
    marginLeft: '80%',
    backgroundColor: '#1d8d8d',
    marginTop: '15px'
}