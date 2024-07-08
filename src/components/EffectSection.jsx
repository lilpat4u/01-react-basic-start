import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import { useEffect, useState, useCallback } from "react"
import useInput from './hooks/useInput'

export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])
 

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <h3>Effects</h3>

            <Button style={{marginBottom: '1rem'}} buttonClicked={openModal}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>
                    Hello from modal
                </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis corporis ratione voluptas consectetur fuga! Ut amet corporis odio non nostrum modi incidunt? Aspernatur reprehenderit quia at maxime eum porro provident.</p>
                <Button buttonClicked={() => setModal(false)}>Close modal</Button>
            </Modal>
            {loading && <p>loading...</p>}
            {!loading && (
                <>
                <input type="text" className="control" {...input} />
            <ul>
              {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
            </>
            )}
        </section>
    )
}