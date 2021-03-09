import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import './ProfileScreen.css'

function ProfileScreen() {
    const user=useSelector(selectUser);
    var date=new Date()
    var dd=date.getDate()
    if(dd<10) dd='0'+dd;
    var Today=dd+"/"+(date.getMonth()+1)+"/"+ date.getFullYear();
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                         alt="avatar"/>
                         <div className="profileScreen_details">
                             <h2>{user.email}</h2>
                             
                             <div className="profileScreen_plans">
                                    <h3>Plans</h3>
                                    <p className="profileScreen_renewDate">Renewal date: {Today}</p>
                                    <div className="profileScreen_payments">
                                        <div className="plans">
                                            <div>
                                            <h2>Netflix Standard</h2>
                                            <small>1080p</small>
                                            </div>
                                            <button>Subscribe</button>
                                        </div>
                                        <div className="plans">
                                        <div>
                                            <h2>Netflix Basic</h2>
                                            <small>480p</small>
                                            </div>
                                            <button>Subscribe</button>
                                        </div>
                                        <div className="plans">
                                        <div>
                                            <h2>Netflix Premium</h2>
                                            <small>4k+HDR</small>
                                            </div>
                                            <button>Subscribe</button>
                                        </div>
                                    </div>

                                 <button 
                                 onClick={()=> auth.signOut()}
                                  className="profileScreen_signOut">
                                      Sign Out
                                 </button>
                             </div>
                         </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
