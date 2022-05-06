import fork from "../Assets/fork.png"

function Recipe ({label, calories, image, ingredients, cuisine, mealType, time, weight}) {
    
return(
    <div className="recipe eachRec">
        <h2 className="recipe__title">{label}</h2>
        <div className="recipe__about">
            <p>Type: {mealType}</p>
            <p>Cuisine: {cuisine}</p>
            <p>Total time: {time} minutes</p>
            <p>Total weight: {weight.toFixed()} g</p>
            <h5>{calories.toFixed()} kCal</h5>
        </div>
        <img src={image} className='recipe__image' alt="food"/>
        <ul>
            {ingredients.map(ingredient => (
                <li className="recipe__list">
                    <img src={fork} alt="icon"/>
                    {ingredient}
                </li>
            ))}
        </ul>

        <hr></hr>

    </div>
)
};

export default Recipe;