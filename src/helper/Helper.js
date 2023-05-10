import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'


export function attemps_number(result) {

    return result.filter(r => r !== undefined).length;
}

export function earnPoints_number(result, answers) {

    return result.map((element, i) => answers[i] === element + 1).filter(i => i).map(i => 10).reduce((prev, curr) => (curr + prev), 0)
}
export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}


// check user auth

export function CheckUserExist({ children }) {


    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to='/' replace={true} ></Navigate>
}

// *****get server data******
export async function GetServerData(url, callback) {
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data
}
// GetServerData('http://localhost:5000/result')
export async function PostServerData(url, result, callback) {
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data
}