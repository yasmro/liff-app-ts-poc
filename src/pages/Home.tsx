import React from 'react'
import { Link } from 'react-router-dom'

const Home = (): React.ReactElement => {
    return (
        <div>
            Home
            <Link to="/voucher">Voucher</Link>
        </div>
    )
}

export default Home
