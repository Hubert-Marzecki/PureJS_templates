export default  function apiPost(path, postData) {
   return  fetch(`${API_URL}/${path}`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        }).then(it => it.json())
     
      }

export const API_URL = "https://zwzt-zadanie.netlify.app/api";
    