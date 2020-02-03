export const SERVER_URL = "http://localhost:3001";

export async function createBlog(data, token, verifyOptions) {
  return postData(
    SERVER_URL + "/api/blogs/createblog",
    data,
    token,
    verifyOptions
  )
    .then(data => console.log(data)) // JSON-string from `response.json()` call
    .catch(err => console.log(err));
}

export async function saveBlog(data, token, verifyOptions) {
  return postData(
    SERVER_URL + "/api/blogs/saveblog",
    data,
    token,
    verifyOptions
  )
    .then(data => console.log(data)) // JSON-string from `response.json()` call
    .catch(err => console.log(err));
}

export async function deleteBlog(id, token, verifyOptions) {
  const response = await fetch(SERVER_URL + "/api/blogs/delete/" + id, {
    headers: { token: token, verifyOptions: verifyOptions }
  });
  return await response.json();
}

export async function updateBlog(id, data, token, verifyOptions) {
  const response = await fetch(SERVER_URL + "/api/blogs/update/" + id, {
    headers: { token: token, verifyOptions: verifyOptions }
  });
  return await response.json();
}

export async function getBlogDetails(id) {
  const response = await fetch(SERVER_URL + "/api/blogdetails/" + id);
  return await response.json();
}

export async function getUserBlogs(token, verifyOptions, email) {
  const response = await fetch(SERVER_URL + "/api/blogs/user", {
    headers: {
      token: token,
      verifyOptions: JSON.stringify(verifyOptions),
      email: email
    }
  });
  return await response.json();
}

export async function getAllBlogs() {
  const response = await fetch(SERVER_URL + "/api/blogs", {
    headers: {
      categories: JSON.stringify(["technology", "cad10", "cad9.x", "xalt"]),
      statuses: JSON.stringify(["approved"])
    }
  });
  return await response.json();
}

export async function getTechnologyBlogs() {
  const response = await fetch(SERVER_URL + "/api/blogs/technology", {
    headers: {
      categories: JSON.stringify(["technology"]),
      statuses: JSON.stringify(["approved"])
    }
  });
  return await response.json();
}

export async function getOnCallBlogs() {
  const response = await fetch(SERVER_URL + "/api/blogs/oncall", {
    headers: {
      categories: JSON.stringify(["cad10"]),
      statuses: JSON.stringify(["approved"])
    }
  });
  return await response.json();
}

export async function getCadBlogs() {
  const response = await fetch(SERVER_URL + "/api/blogs/cad9.x", {
    headers: {
      categories: JSON.stringify(["cad9.x"]),
      statuses: JSON.stringify(["approved"])
    }
  });
  return await response.json();
}

export async function getXaltBlogs() {
  const response = await fetch(SERVER_URL + "/api/blogs/xalt", {
    headers: {
      categories: JSON.stringify(["xalt"]),
      statuses: JSON.stringify(["approved"])
    }
  });
  return await response.json();
}

export async function postData(url = "", data = {}, token, verifyOptions) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      token: token,
      verifyOptions: verifyOptions
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}
