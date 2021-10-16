import $axios from 'axios';

export const FT_VN_SERVICE = 'https://msapi.survivalapp.com';

const handleHeaderMenuItemsAPI = res => {
  let results = [];
  if (res.status !== 200 || !res?.data?.siteUrls) {
    return results;
  }

  res.data.siteUrls.forEach(({ children }) => {
    results = results.concat(children);
  });
  
  return results;
};

export const getHeaderMenuItems = async () => {
  const res = await $axios.get(`${FT_VN_SERVICE}/ft-vn/site/header`);
  return handleHeaderMenuItemsAPI(res);
};
