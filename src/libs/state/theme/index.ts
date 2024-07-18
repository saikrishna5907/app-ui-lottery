import { TLocalStorageValueMap } from '@lottery/types';
import {
  getAppThemeFromLocalStorage,
  setAppThemeInLocalStorage,
} from '@lottery/utils/theme/themehandler';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../queryKeys';

const useThemeState = () => {
  const queryClient = useQueryClient();
  const dataSetter = useMutation({
    mutationFn: async (theme: TLocalStorageValueMap['THEME']) =>
      await setAppThemeInLocalStorage(theme),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.app.theme });
    },
  });

  const dataGetter = useQuery({
    queryKey: queryKeys.app.theme,
    queryFn: getAppThemeFromLocalStorage,
    initialData: getAppThemeFromLocalStorage(),
  });

  const themeState = {
    setData: dataSetter,
    getData: dataGetter,
  };
  return themeState;
};

export default useThemeState;
