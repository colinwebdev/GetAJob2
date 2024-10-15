import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDashboard } from '../features/listings/listingSlice'

function Dashboard() {
    let { dashboard } = useSelector((state) => state.listings)
    let [isLoading, setIsLoading] = useState(false)
    let dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getDashboard())
    }, [dispatch])

    return (
        <div className='page dashboard flex flex-col'>
            <div className='header'>
                <h1>Dashboard</h1>
            </div>
            Test: {dashboard}
        </div>
    )
}

export default Dashboard
