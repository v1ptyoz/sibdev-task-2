export const SET_VIDEOS = "SET_VIDEOS";
export const SET_LOADING = "SET_LOADING";

export const SetLoading = () => ({
  type: SET_LOADING
})

export const SetVideos = (payload) => ({
  type: SET_VIDEOS,
  payload,
})