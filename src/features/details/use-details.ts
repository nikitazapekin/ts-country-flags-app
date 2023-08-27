import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import { clearDetails, loadCountryByName} from './details-slice';
import { useAppDispatch } from 'store';
import { selectDetails } from './details-selectors';
export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch]);

  return details;
}
