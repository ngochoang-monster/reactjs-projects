import { useState, useEffect } from 'react';

import List from './List';
import Alert from './Alert';


const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}

function Run() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage);
    const [isEdit, setIsEdit] = useState(false);
    const [idEdit, setIdEdit] = useState('');

    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setShow(true, 'Vui lòng nhập', 'danger')
        } else if (name.trim() && isEdit) {
            setList(
                list.map(item => {
                    if (item.id === idEdit) {
                        return { ...item, name }
                    }
                    return item;
                })
            )
            setName('');
            setIsEdit(false);
            setIdEdit(null);
            setShow(true, 'Sửa thành công', 'success')
        } else if (name.trim()) {
            const newItem = {
                id: new Date().getTime().toString(),
                name: name,
            };

            setList([...list, newItem]);
            setName('')
            setShow(true, 'Thêm thành công', 'success');
        } else {
            setShow(true, 'Bạn chưa nhập gì', 'danger')
        }

    }

    const setShow = (show = false, msg = '', type = '') => {
        setAlert({ show, msg, type });
    }

    const removeItem = (id) => {
        const newList = list.filter(item => item.id !== id);

        setList(newList);
        setShow(true, 'Xóa thành công', 'success-delete');
    }

    const editingItem = (id) => {
        const item = list.find(item => item.id === id)
        setName(item.name);
        setIsEdit(true);
        setIdEdit(id);
        setShow(true, 'Bạn đang sửa', 'danger');
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list]);

    return (
        <>
            <section className='container-bud'>
                {alert.show && <Alert {...alert} removeAlert={setShow} list={list} />}
                <h2>Grocery Bud</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="e.g. eggs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className="btn-submit-bud"
                        type="submit">{
                            isEdit ? 'Edit' : 'Submit'
                        }
                    </button>
                </form>
                {
                    list.length ?
                        <div className="main-bud">
                            <List items={list} removeItem={removeItem} editingItem={editingItem} />
                            <button onClick={() => {
                                setList([]);
                                setShow(true, 'Xóa thành công', 'success-delete');
                            }}>Clear all</button>
                        </div>
                        : <div className="main-bud">
                            <h2>No Item</h2>
                        </div>
                }
            </section>
        </>
    );
}

export default Run;