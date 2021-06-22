async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
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

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      // added 1-second delay, because immediate redirect creates race condition with cookie storage
      setTimeout(() => { document.location.replace('/'); }, 1);
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#sign-up-switch').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#sign-in-wrapper').classList.add('hidden');
  document.querySelector('#sign-up-wrapper').classList.remove('hidden');
});
document.querySelector('#sign-in-switch').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#sign-up-wrapper').classList.add('hidden');
  document.querySelector('#sign-in-wrapper').classList.remove('hidden');
});