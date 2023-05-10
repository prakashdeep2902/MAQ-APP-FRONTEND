import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export function attemps_number(result){

    return result.filter(r=>r!=undefined).length;
}

export function earnPoints_number(result,answers){

   return result.map((element,i)=>answers[i]===element+1).filter(i=>i).map(i=>10).reduce((prev,curr)=>(curr+prev),0)
}


// check user auth

export function CheckUserExist({children}){


    const auth=useSelector(state=>state.result.userId)
    return auth ? children:<Navigate to='/' replace={true} ></Navigate>
}
