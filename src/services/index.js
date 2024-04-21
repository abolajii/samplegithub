import axios from "axios";

const username = "devmariam";
const token = process.env.REACT_APP_GITHUB_TOKEN;

// create a new repository
const createRepository = async (data) => {
  return await axios.post("https://api.github.com/user/repos", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const updateRepository = async (name, data) => {
  return await axios.patch(
    `https://api.github.com/repos/${username}/${name}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

const deleteRepository = async (name) => {
  return await axios.delete(
    `https://api.github.com/repos/${username}/${name}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

const allRepositories = async (page = 1, perPage = 10) => {
  return await axios.get(`https://api.github.com/users/${username}/repos`, {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      page,
      per_page: perPage,
    },
  });
};

const singleRepository = async (id) => {
  return await axios.get(
    `https://api.github.com/repositories/${id}`,

    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export {
  createRepository,
  updateRepository,
  deleteRepository,
  allRepositories,
  singleRepository,
};
