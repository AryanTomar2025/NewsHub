import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { useEffect } from "react";
/**
 *     Context API
 * context creation -- data accumulate which we need
 * then we need provider
 * then we need consumer - now in new version we don't need consumer
 * now  we can use  hooks(useContext) to consume the data.
 * use context hook replace consumer part
 *
 */

const NEWS_API = "https://hn.algolia.com/api/v1/search?";
const AppContext = React.createContext(); // context creation

// to create a provider function

const initialState = {
  isdLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log("Error");
    }
  };

  const removePost = (post_id) => {
    dispatch({ type: "REMOVE_POST", payload: post_id });
  };
  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };
  useEffect(() => {
    fetchApiData(`${NEWS_API}query=${state.query}&page=${state.page}`);
  }, [state.query , state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook create

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
