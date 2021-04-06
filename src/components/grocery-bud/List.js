import { FaEdit, FaTrash } from 'react-icons/fa'

function List({ items, removeItem, editingItem }) {

    return (
        <>
            {
                items.map(item => {
                    const { name, id } = item;

                    return (
                        <div key={id} className="content-bud">
                            <p>{name}</p>
                            <div>
                                <button
                                    className="btn-delete-bud"
                                    onClick={() => removeItem(id)}
                                ><FaTrash /></button>
                                <button
                                    className="btn-edit-bud"
                                    onClick={() => editingItem(id)}
                                ><FaEdit /></button>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default List;