import { useEffect, useState } from "react";
import data,{answer} from "../database/data";
import { useDispatch } from "react-redux";
import * as Action from '../redux/Question_reducer';

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setData((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setData((prev) => ({ ...prev, isLoading: false }));
          setData((prev) => ({ ...prev, apiData: {question,answer} }));
          // dispatch an action
          dispatch(Action.startExamAction({question,answer}));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setData((prev) => ({ ...prev, isLoading: false }));
        setData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setData];
};

// move action dispach function

export const MoveNextQuestion = () =>async (dispach)=> {

  try {

    dispach(Action.moveNextAction())
  
  } catch (error) {
    console.log(error)
  }
}

export const MovePrvQuestion = () =>async (dispach)=> {

  try {

    dispach(Action.movePrevAction())
  
  } catch (error) {
    console.log(error)
  }
}