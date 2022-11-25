const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('textarea[name="post-content"]').value.trim();
    const title = document.querySelector('input[name="post-title"]').value.trim();


    if (content && title) {
        const response = await fetch(`/api/post/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ content, title }),
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
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });
    document.location.replace('/dashboard');
};

document
    .querySelector('.edit-post')
    .addEventListener('submit', editFormHandler);

    document
    .querySelector('#delete')
    .addEventListener('click', deleteClickHandler);