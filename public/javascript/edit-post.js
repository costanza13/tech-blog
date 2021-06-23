async function editFormHandler(event) {
  event.preventDefault();

  let post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  if (typeof post_id !== 'number') {
    post_id = 0;
  }

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_body = document.querySelector('textarea[name="post-body"]').value.trim();

  if (title) {
    if (post_id) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          post_body
        }),
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          post_body
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
