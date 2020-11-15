import { axiosInstance } from './config';

export const getBannerRequest = () => {
    return axiosInstance.get('/banner');
}

export const getRecommendListRequest = () => {
    return axiosInstance.get('/personalized');
}

/**
 * 歌手列表
 */

export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest = (category, alpha, count) => {
	return axiosInstance.get(`/artlist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}
