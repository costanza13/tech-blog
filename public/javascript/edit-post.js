async function editFormHandler(event) {
  event.preventDefault();

  let post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  if (typeof parseInt(post_id) !== 'number') {
    console.log(post_id + ' is not a number');
    post_id = false;
  }

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_body = document.querySelector('textarea[name="post-body"]').value.trim();

  if (title) {
    const response = await fetch('/api/posts' + (post_id ? `/${post_id}` : ''), {
      method: (post_id ? 'PUT' : 'POST'),
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

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
