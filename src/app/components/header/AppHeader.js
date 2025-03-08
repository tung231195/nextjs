import { auth } from "@/app/auth/auth"
import { SignOut } from "../auth/signout-button"

const HeaderApp = async() => {
    const session = await auth()
    console.log('get session', session  )
    return (
        <header>
            <div className="welcome">
                {session && 
                    <>
                        <div> {session.user.name} </div>
                        <div> {session.user.email} </div>
                    </>
 
                }
            </div>
            <ul className="menu-container">
                <SignOut />
            </ul>
        </header>
    )
}
export default HeaderApp