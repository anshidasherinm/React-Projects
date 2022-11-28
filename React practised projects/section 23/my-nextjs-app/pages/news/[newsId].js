// domain/news/something-important old
//now for anything after news/ excluding space and special characters

import { useRouter } from "next/router";
function DetailPage() {
  const router = useRouter();
  // console.log(router.query.newsId);
  const newsId = router.query.newsId;

  //send a request to the backend api
  //to fetch the news item with newsId

  return <div>The Detail Page</div>;
}

export default DetailPage;
