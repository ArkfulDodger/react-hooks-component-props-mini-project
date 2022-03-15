import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const postsArr = posts.map( post => {
        return <Article 
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
            key={post.id}
        />
    })

    return (
        <main>
            {postsArr}
        </main>
    )
}

export default ArticleList;