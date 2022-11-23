const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('textarea[name="post-body"]').value.trim();
    const title = document.querySelector('input[name="post-title"]').value.trim();

    if (body && title) {
        const response = await fetch('/api/post/${postID}', {
            method: 'PUT',
            body: JSON.stringify({ body, title }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create new post.');
        }
    }
};

const deleteClickHandler = async function() {
    await fetch(`/api/post/${postID}`, {
        method: 'Delete'
    });
    document.location.replace('/dashboard');
};

document
    .querySelector('.new-post')
    .addEventListener('submit', postFormHandler);