import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGaugeHigh,
    faFileContract,
    faNoteSticky,
    faSignInAlt,
    faSignOutAlt,
    faSquarePlus,
    faList,
} from '@fortawesome/free-solid-svg-icons'

function Panel() {
    let currYear = new Date().getFullYear()
    return (
        <nav className='sidePanel'>
            <h1>GET-A-JOB</h1>
            <div className='links'>
                <Link to='/' className='dashboard linkWrap'>
                    <FontAwesomeIcon icon={faGaugeHigh} size='2x' />
                    <span>Dashboard</span>
                </Link>
                <div className='linkGroup'>
                    <Link to='/listings' className='listings linkWrap'>
                        <FontAwesomeIcon icon={faFileContract} size='2x' />
                        <span>Listings</span>
                    </Link>
                    <Link to='/newListing' className='newListing subLinkWrap'>
                        <span>New Listing</span>
                        <FontAwesomeIcon icon={faSquarePlus} size='2x' />
                    </Link>
                </div>
                <Link to='/skills' className='skills linkWrap'>
                    <FontAwesomeIcon icon={faList} size='2x' />
                    <span>Skills</span>
                </Link>
                <Link to='/notes' className='notes linkWrap'>
                    <FontAwesomeIcon icon={faNoteSticky} size='2x' />
                    <span>Notes</span>
                </Link>
            </div>
            <div className='sideBottom'>&copy; {currYear} | Colin M</div>
        </nav>
    )
}

export default Panel
