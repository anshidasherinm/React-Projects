// domain/news/nothing

import React from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <React.Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          {/* Link prevents the refresh */}
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs Is A Great Framework
          </Link>
          {/* <a href="/news/nextjs-is-a-great-framework">
            NextJs Is A Great Framework
          </a> */}
        </li>
        <li>Something Else</li>
      </ul>
    </React.Fragment>
  );
}

export default NewsPage;
