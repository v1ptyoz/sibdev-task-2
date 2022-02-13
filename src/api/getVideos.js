import axios from "axios";
import { SetLoading, SetVideos } from "../store/videos/actions";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: "AIzaSyCar-Ek4AETFxNI8c0hnpzx4NHZZXVcAsU",
  },
  headers: {}
})

export function getVideos({ query, deep = 12 }) {
  return async function (dispatch) {
    dispatch(SetLoading());

    try {
      const response = await youtube.get("/search", {
        params: {
          q: query,
          maxResults: deep
        }
      });

      // получим все заголовки
      const titles = response.data.items.map(item => {
        return {
          id: item.id.videoId,
          title: item.snippet.title,
        }
      });

      // получим все ID
      const videoIDs = response.data.items.map(item => item.id.videoId);

      // получим все количества просмотров
      const videoStatResponse = await youtube.get("/videos", {
        params: {
          part: "statistics",
          id: videoIDs.join(",")
        }
      })
      
      const views = videoStatResponse.data.items.map(item => {
        return {
          id: item.id,
          count: item.statistics.viewCount,
        }
      });

      // получим все ID категорий
      const videoCategoryResponse = await youtube.get("/videos", {
        params: {
          part: "snippet",
          id: videoIDs.join(",")
        }
      })
      const allCategoriesId = videoCategoryResponse.data.items.map(item => item.snippet.categoryId)
      const categoriesIdForVideos = videoCategoryResponse.data.items.map(item => {
        return {
          id: item.id,
          categoryId: item.snippet.categoryId
        }
      });

      // получим все названия категорий
      const categoryResponse = await youtube.get("/videoCategories", {
        params: {
          part: "snippet",
          id: allCategoriesId.join(","),
        }
      })
      const categories = categoryResponse.data.items.map(item => {
        return {
          categoryId: item.id,
          category: item.snippet.title
        }
      })

      const categoriesTitleForVideos = categoriesIdForVideos.map(item => {
        const {category} = categories.filter(cat => item.categoryId === cat.categoryId)[0]
        return {
          id: item.id,
          category,
        }
      })

      const result = videoIDs.map(id => {
        const {title} = titles.filter(item => item.id === id)[0];
        const {count} = views.filter(item => item.id === id)[0];
        const {category} = categoriesTitleForVideos.filter(item => item.id === id)[0];
        return {
          id,
          title,
          count,
          category
        }
      })

      dispatch(SetVideos({ list: result, query }));
      
    } catch (e) {
      console.log(e);
    }
  }
}