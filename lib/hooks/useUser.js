import { useState } from "react"

const DEFAULT_OPTIONS = {
    headers: { 
        "Content-Type": "application/json" 
    },
}
  

const useUser = async() => {
    const [user, setUser] = useState()
    const res = await fetch(`${process.env.BASE_URL}/api/user`, { ...DEFAULT_OPTIONS })
    const data = await res.json()

    setUser(data)

    return [user]
}

export {
    useUser
}