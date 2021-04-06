


function Category({ filterItems, categories }) {
    return (
        <article className="box-category">
            {
                categories.map((category, index) => {
                    return (
                        <div key={index}>
                            <button
                                className="category-btn"
                                onClick={() =>
                                    filterItems(category)} >
                                {category}
                            </button>
                        </div>
                    )
                })
            }

        </article>
    );
};

export default Category;
