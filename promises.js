api
  .get(`/?APIKey=${APIKey}&=${searchTerm}&=movie`)
  .then((res) => {
    console.log(res.data.Response);
    if (res.data.Response === "False") {
      return Promise.reject("something is wrong with the request sent");
      // this is the custom error handling
    } else {
      dispatch(movieActions.moviesFetchSucceeded(res.data.Search));
    }
  })
  .catch((err) => {
    //this handles the "Network Error"
    console.log(err);
    dispatch(movieActions.moviesFetchFailed(err));
  });
console.log("res", res);
