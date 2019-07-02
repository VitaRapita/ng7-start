export default interface IArticle {
  id: number;
  week: number;
  year: number;
  state: number;
  author: {
    first_name: string;
    last_name: string;
    email: string;
    language: string;
    id: number;
  };
  grid: {
    id: number;
    title: string;
    configuration: object;
  };
  signature: {
    id: number;
    title: string;
    value: string;
  };
  author_id: number;
  texts: [
    {
      language: string;
      languageCode: string;
      text: string;
      smallText: string;
    }
  ];
  ctas: [
    {
      language: string;
      languageCode: string;
      url: string;
    }
  ];
  logo: string;
}

export default interface IApiArticleResults {
  results: IArticle[];
}
