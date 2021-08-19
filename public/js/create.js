const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#favorite-name').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/favorites`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/create');
      } else {
        alert('Failed to create favorite');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/favorites/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/create');
      } else {
        alert('Failed to delete favorite');
      }
    }
  };
  
  document
    .querySelector('.new-favorite-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.favorite-list')
    .addEventListener('click', delButtonHandler);
  