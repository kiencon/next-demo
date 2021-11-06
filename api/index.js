import $axios from 'axios';
let cachedSiteHeaderResult = {};

export const FT_VN_SERVICE = 'https://msapi.template.com';
export const LIMIT_TEMPLATE = 100;

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
  if (cachedSiteHeaderResult.status === 200) {
    console.log('using cached cachedSiteHeaderResult result');
    return cachedSiteHeaderResult;
  }
  const res = await $axios.get(`${FT_VN_SERVICE}/ft-vn/site/header`);

  if (res.status === 200) {
    console.log('cached cachedSiteHeaderResult');
    cachedSiteHeaderResult = res;
  }

  return handleHeaderMenuItemsAPI(res);
};

const handleEditableUrlsAPI = res => {
  let results = [];
  if (res.status !== 200 || !res?.data?.siteUrls) {
    return results;
  }

  res.data.siteUrls.forEach(({ children }) => {
    results = results.concat(children);
    const subUrls = children.children;
    if (Array.isArray(subUrls)) {
      results = results.concat(subUrls);
    }
  });
  
  return results;
};

export const getEditableUrls = async () => {
  if (cachedSiteHeaderResult.status === 200) {
    console.log('using cached cachedSiteHeaderResult result');
    return cachedSiteHeaderResult;
  }

  const res = await $axios.get(`${FT_VN_SERVICE}/ft-vn/site/header`);

  if (res.status === 200) {
    console.log('cached cachedSiteHeaderResult');
    cachedSiteHeaderResult = res;
  }

  return handleEditableUrlsAPI(res);
};

export const fetchSubLandingPageSite = async (query) => {
  const { data } = await $axios.get(`${FT_VN_SERVICE}/site/landingpage?url=/editable/${query}`);
  return data;
};

export const searchPageSite = async (query) => {
  const { data } = await $axios.get(`${FT_VN_SERVICE}/site/searchpage/${query}?page=0&limit=${LIMIT_TEMPLATE}`);
  return data;
};
