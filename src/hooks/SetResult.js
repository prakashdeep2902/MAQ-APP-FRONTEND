import { PostServerData } from '../helper/Helper'
import * as Action from '../redux/Result_reducer'
export const PushAnswer = (result) => async (dispatch) => {

    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }

}


export const updateResult = (index) => async (dispatch) => {

    try {

        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}

// ***insert user data */

export const usePublishResult = (resultData) => {

 
    const { result, username } = resultData;
    (async () => {
        try {

            if (result !== [] && !username) {
                throw new Error("couldn't get Result");
            }
            await PostServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/result`,resultData,data=>data)
        } catch (error) {

            console.log(error)
        }
    })();

}
