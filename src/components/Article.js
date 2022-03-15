import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    const [emoji, interval] = minutes < 30 ? ['☕️', 5] : ['🍱', 10];
    const emojiNum = Math.ceil(minutes / interval);
    const emojis = emoji.repeat(emojiNum);

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojis} {minutes} minute read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;