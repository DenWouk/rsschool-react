export const articlesMockData = [
  {
    author: 'author1',
    content: 'content1',
    description: 'description1',
    publishetAt: 'publishetAt1',
    source: {
      id: null,
      name: 'name1',
    },
    title: 'title1',
    url: 'url1',
    urlToImage: 'urlToImage1',
  },
  {
    author: 'author2',
    content: 'content2',
    description: 'description2',
    publishetAt: 'publishetAt2',
    source: {
      id: null,
      name: 'name2',
    },
    title: 'title2',
    url: 'url2',
    urlToImage: 'urlToImage2',
  },
];

export const contextMockData = {
  searchValue: 'searchValue',
  setSearchValue: () => {},
  page: 1,
  setPage: () => {},
  pageSize: 10,
  setPageSize: () => {},
  articles: articlesMockData,
  setArticles: () => {},
};

export const articlesEmptyMockData = [];

export const contextEmptyMockData = {
  searchValue: 'searchValue',
  setSearchValue: () => {},
  page: 1,
  setPage: () => {},
  pageSize: 10,
  setPageSize: () => {},
  articles: articlesEmptyMockData,
  setArticles: () => {},
};
