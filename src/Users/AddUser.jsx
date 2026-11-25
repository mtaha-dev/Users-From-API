import { useState } from "react"
import styles from "./AddUser.module.css"

function AddUser({ onAdd, onCancel }) {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const newUser = {
            name,
            username,
            email,
            address: {
                city,
                street,
                geo: {
                    lat,
                    lng
                }
            }
        }

        onAdd(newUser)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>

            <h2>Ajouter un utilisateur</h2>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={e => setCity(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={e => setStreet(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Latitude"
                value={lat}
                onChange={e => setLat(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Longitude"
                value={lng}
                onChange={e => setLng(e.target.value)}
                required
            />

            <div className={styles.buttons}>
                <button type="submit">
                    Ajouter
                </button>

                <button type="button" onClick={onCancel}>
                    Annuler
                </button>
            </div>

        </form>
    )
}

export default AddUser