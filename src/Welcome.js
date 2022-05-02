export default function Welcome(props) {
    return (
        <>
            {!props.welcomeToDistancify ? 
                <h2 className="title">Welcome</h2> : 
                <h2 className="title">Welcome to Distancify</h2>
            }
            <h2 className="accountTitle">Create your account.</h2>
            <h5 className="signInTitle">Already a member?  <a href="#">Sign in</a></h5>
        </>
    )
}