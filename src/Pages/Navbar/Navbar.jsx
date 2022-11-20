import React from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import Avatar from '../../components/Avatar'
import { Link, useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'
import './navbar.css'
import {setcurrentUser} from '../../../src/actions/currentUser'
const Navbar = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
//var User=JSON.parse(localStorage.getItem('Profile'))
    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
        dispatch(setcurrentUser(null))
      }
      
    const User=useSelector((state)=>(state.currentUserReducer))

    useEffect(()=>{

        const token=User?.token
        if(token){
            const decodedToken=decode(token)

            if(decodedToken.exp*1000<new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setcurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
  return (
<nav>
    <div className='navbar'>


   
        { <Link to='/'className='nav-item nav-btn'>
            {/* <img src={logo}alt='logo'/> */}

            <p>Home</p>
        </Link> }
        <Link to ='/'className='nav-item nav-btn'>About</Link>
        <Link to ='/'className='nav-item nav-btn'>Products</Link>
        <Link to ='/'className='nav-item nav-btn'>For Teams</Link>
        <form>
            <input type="text"placeholder='search..'/>
            {/* <img src={search} alt="search"width="18" className="search-icon" /> */}
        </form>
        {User==null?
    <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:    
    <>
    {/* <Avatar backgroundColor='009dff'px="10px" py="7px" borderRadius="50%" color="white"><Link to ={`/Users/${User?.result?._id}`} style={{color:"white",textDecoration:'none'}}>{User.result.name.charAt(0).toUppercase()}</Link></Avatar> */}
    <button className='btn btn-primary'onClick={handleLogout}>Log out</button>
    </>
    }


    </div>
</nav>
  )
}

export default Navbar