import { plantList } from "../datas/plantlist"
import '../styles/ShoppingList.css'


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
            <ul className="lmj-plant-list">
                {plantList.map((plant) => (
                    <li key={plant.id} className="lmj-plant-item">
                    {plant.name}
                    {plant.isBestSale && <span>🔥</span>}
                    {plant.isSpecialOffer && <div className="lmj-sales">🎉 Soldé! </div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList