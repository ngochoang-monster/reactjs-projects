

function Menu({ menuItems }) {
    return (
        <>
            {
                menuItems.map(menu => {
                    const { id, price, img, title, desc } = menu;
                    return (
                        <div className="wrap-menu" key={id}>
                            <img src={img} alt={title} className="img-menu" />
                            <header className="wrap-header">
                                <div className="box-title">
                                    <h3>{title}</h3>
                                    <p>${price}</p>
                                </div>
                                <p className="title">{desc}</p>
                            </header>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Menu;