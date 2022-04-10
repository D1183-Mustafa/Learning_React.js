import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RecipeCard, RecipeHeader, RecipeImage ,Button} from './HomeStyles'

function RecipeCardComp({recipe}) {
    const navigate = useNavigate()
    const moreClick = (e) => {
        navigate("/details", {state:{recipe}})
    }
  return (
      <RecipeCard>
          <RecipeHeader>
              {recipe.label}
          </RecipeHeader>
          <RecipeImage src={recipe.image}/>
          <Button onClick={moreClick}>Wiew More</Button>

      </RecipeCard>
  )
}

export default RecipeCardComp
