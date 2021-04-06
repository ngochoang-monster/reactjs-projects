import { useState } from 'react'
import Menu from './Menu';
import Category from './Category';
import data from './data';

const allFilters = ['all', ...new Set(data.map(item => item.category))]


function Run() {
    const [items, setItem] = useState(data);
    const [categories, setCategory] = useState(allFilters)


    const filterItems = (category) => {
        console.log(category);
        if (category === 'all') {
            setItem(data)
            return;
        }
        const newItems = data.filter(item => item.category === category);
        setItem(newItems)
    }

    return (
        <main className='main'>
            <h2 className='title-menu-header'>Our Menu</h2>
            <Category filterItems={filterItems} categories={categories} />
            <div className='container'>
                <Menu menuItems={items} />
            </div>
        </main>
    )
}

export default Run
