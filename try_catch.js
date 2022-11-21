useEffect(() => {
  const fetchMovies = async () => {
    dispatch(movieActions.moviesRequested());
    try {
      const res = await api
        .get(`/?APIKey=${APIKey}&s=${searchTerm}&type=movie`)
        .catch((err) => {
          // If this catch is not here, we still catch the error as "Axios Error"
          throw err.message; //throws an error if it can't reach the server "Network Error"
        });
      if (res.data.Response === "False") {
        throw new Error("something is wrong with the request."); //this is the "custom error" we thrown.
      } else {
        dispatch(movieActions.moviesFetchSucceeded(res.data.Search));
      }
    } catch (error) {
      dispatch(movieActions.moviesFetchFailed(error));
    }
  };
  fetchMovies().then(() => {
    console.log("after fetchMovies function.");
    console.log(store.getState());
  });
}, []);
