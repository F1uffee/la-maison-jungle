import { plantList } from "../datas/plantlist"


function ShoppingList() {
    const categories = plantList.reduce((a,b) => 
    a.includes(b.category) ? a : a.concat(b.category),
    []
)

    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category} </li>
                ))}
            </ul> 
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{plant.name} </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList