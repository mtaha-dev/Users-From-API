import {useState, useEffect} from "react"
import ShowUsers from "./Show Users/ShowUsers"


function GetUsers(){

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{

        const getUsers = async ()=>{

            try{

                const response = await fetch("https://jsonplaceholder.typicode.com/users")

                if(!response.ok){

                    throw new Error("Makin la data la walo")
                }

                const data = await response.json()
                setUsers(data)

            }catch(err){

                setError(err.message)
            }
        }

        getUsers()

    }, [])

    function addUser(newUser) {
        setUsers(prevUsers => [
            ...prevUsers,
            {
                ...newUser,
                id: prevUsers.length + 1
            }
        ])
    }

    return(

        <>
            <ShowUsers users={users} error={error} addUser={addUser} />
        </>
        
    )
}

export default GetUsers