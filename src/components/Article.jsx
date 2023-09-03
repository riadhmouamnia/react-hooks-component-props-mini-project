import React from "react";

// helper function to get the emoji
function getEmoji(minutes) {
  let emojis;

  if (minutes < 30) {
    const roundedMinutes = Math.ceil(minutes / 5) * 5;
    const coffeeCups = "☕️".repeat(roundedMinutes / 5);
    emojis = coffeeCups;
  } else {
    const roundedMinutes = Math.ceil(minutes / 10) * 10;
    const bentoBox = "🍱".repeat(roundedMinutes / 10);
    emojis = bentoBox;
  }

  return emojis;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = getEmoji(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emoji} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
