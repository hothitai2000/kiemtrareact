import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { matchPath } from "react-router-dom";
// import { Match } from "@testing-library/react";
import axios from "../api/axios";
import { matchPath } from "react-router-dom";



const USER_REGEX = /^[A-zA-Z][a-zA-Z0-9_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[!@#$%]).{8,24}$/;

const REGISTER_URL='/registe'


const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [ValidName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setpwd] = useState('');
    const [ValidPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [ValidMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, SeterrMsg] = useState('');
    const [success, SetSuccess] = useState(false);

useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
}, [user]
)

useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);


}, [pwd, matchPwd])
useEffect(() => {
    SeterrMsg('');
}, [user, pwd, matchPwd])
const handleSubmit = async (e) => {
    e.prevenDefault();
    const v1 = USER_REGEX.test(user)
    const v2 = USER_REGEX.test(pwd);
    if (!v1 || !v2) {
        SeterrMsg("Invalid Entry");
        return;
    }
    try{
        const response=await axios.post(REGISTER_URL,
            JSON.stringify({user,pwd}),
            {
                headers:{'content-Type':'application/json'},
                withCredentials: true
            }
        );
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response))
        SetSuccess(true);

    } catch (err){
        if(!err?.response){
            SeterrMsg('No Server Response')
        }else if (err.response?.useState===409){
            SeterrMsg('Username Taken');
        }else{
            SeterrMsg('Register Failed')
        }
        errRef.current.focus();
    }
    // console.log(user,pwd);
    // SetSuccess(true);
}

return (
    <>
    {success ? (
        <section>
          <h1>success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
    ) : (
    
    <section>

        <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>


        <form onSubmit={handleSubmit}>
            
            <label htmlFor="'userName">
                UserName:
                <span className={ValidName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={ValidName || !user ? "hire" :
                    "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
                Type="text"
                id="userName"
                Ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={ValidName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />

            <p id="uidnote" className={userFocus && user &&
                !ValidName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                letters,numbers,underscores,hyphens allowwed.
            </p>

            
            <label htmlFor="'password">
                Password:
                <span className={ValidPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={ValidPwd || !pwd ? "hire" :
                    "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
                Type="password"
                id="password"
                Ref={userRef}
                autoComplete="off"
                onChange={(e) => setpwd(e.target.value)}
                required
                aria-invalid={ValidPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
            />

            <p id="pwdnote" className={pwdFocus && !ValidPwd ? "instructions" :
                "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special characters.<br />
                letters,numbers,underscores,hyphens
                Allowwed special characters:<span aria-label="exclamation mark">!</span>
                {/* <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</
                span> <span aria-label="dollar sign">$</span><span
                aria-label="percent">%</span> */}
            </p>



            <label htmlFor="confirm_pwd">
                confirm Password:
                <span className={ValidMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={ValidMatch || !matchPwd ? "hire" :
                    "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
                Type="password"
                id="confirm_pwd"
                Ref={userRef}
                autoComplete="off"
                onChange={(e) => setMatchFocus(e.target.value)}
                required
                aria-invalid={ValidMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus &&  !ValidMatch ? "instructions" :
                "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input first
            </p>

            <button disabled={!ValidName || !ValidPwd || !ValidMatch ? true : false}
            >Singn up</button>

        </form>
        <p>
            Already Register?<br />
            <span className="line">
                <a href="#">Sign In</a>
            </span>
        </p>

    </section>
    )}
    </>
 )
}

export default Register;