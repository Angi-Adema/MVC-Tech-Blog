const postFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#content').value.trim();
    const title = document.querySelector('#title').value.trim();

    if (content && title) {
        const response = await fetch('/api/post', {
            method: 'POST',
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

document
    .querySelector('.new-post')
    .addEventListener('submit', postFormHandler);