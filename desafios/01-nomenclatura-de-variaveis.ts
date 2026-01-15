// Nomenclatura de variáveis

const listOfCategories = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getUserCategory(req, res) {
  const username = String(req.query.username);

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const githubResponse = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (githubResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`,
    });
  }

  const githubUser = await githubResponse.json();

  const orderList = listOfCategories.sort(
    (categoryA, categoryB) => categoryB.followers - categoryA.followers
  );

  const rankedCategory = orderList.find(
    (category) => githubUser.followers >= category.followers
  );

  const rankOfUser = {
    username,
    category: rankedCategory.title,
  };

  console.log(
    `🚀 User: ${rankOfUser.username} | 🏆 Category: ${rankOfUser.category}`
  );

  return rankOfUser;
}

getUserCategory(
  {
    query: {
      username: "diego3g",
    },
  },
  {}
);
