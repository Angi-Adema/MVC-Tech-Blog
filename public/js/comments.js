const post_id = document.querySelector('#post-id').value;

const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_body = document.querySelector('#comment-body').value.trim();
//    console.log(comment_body);

    if (comment_body) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ post_id, comment_body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create new post.');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);

