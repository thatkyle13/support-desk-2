import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

export const useAuthStatus= () => {
    const {user} = useSelector((state) => state.auth)

    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)


    useEffect(() => {
        user ? setLoggedIn(true) : setLoggedIn(false)
        setCheckingStatus(false)
    },[user])

    return {loggedIn, checkingStatus}
}
