import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { SearchSuggestionsResponse } from 'types/Search.type';
import baseUrl from 'utils/http';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const user = localStorage.getItem('userLogin');
      if (user) {
        const userData = JSON.parse(user) as UserLoginResponse;
        const token = userData ? userData.token : '';
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    getSuggestionsForSearch: build.query<SearchSuggestionsResponse[], string>({
      query: (searchTerm) => ({
        url: `Product/SuggestionsForSearch?searchTerm=${encodeURIComponent(searchTerm)}`,
        method: 'GET'
      })
    })
  })
});

// Export the hook for the search query
export const { useGetSuggestionsForSearchQuery } = searchApi;
