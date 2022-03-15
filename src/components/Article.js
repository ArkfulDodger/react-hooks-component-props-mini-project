import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    let emoji = minutes < 30 ? '☕️' : '🍱';
    let num = Math.ceil(minutes < 30 ? minutes / 5 : minutes / 10);

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small> • </small>
            <small>{emoji.repeat(num)} </small>
            <small>{minutes} minute read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;