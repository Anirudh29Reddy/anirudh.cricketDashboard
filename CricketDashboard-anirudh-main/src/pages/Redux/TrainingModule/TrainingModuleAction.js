import { setMatchData, setLoading, setError } from "../TrainingModule/TrainingModuleSlice";
import * as request from '../TrainingModule/TrainingModuleCRUD'


export const loadMatchData = (userId) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const data = await request.fetchMatchData(userId);
    dispatch(setMatchData(data));
  } catch (error) {
    dispatch(setError(error));
  }
};
