export async function Authenticator({ searchParams }) {
  const code = searchParams.code;
  const state = searchParams.state;

  let accessToken;
  let reposDataObj;

  if (code && state === process.env.STATE) {
    const res = await fetch(
      `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`,
      {
        method: "POST",
        headers: { Accept: "application/json" },
      }
    );
    const data = await res.json();

    accessToken = data.access_token;

    const userResObj = await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
      next: 10,
    });

    const userDataObj = await userResObj.json();

    const reposResObj = await fetch(
      `https://api.github.com/users/${userDataObj.login}/repos`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      }
    );

    reposDataObj = await reposResObj.json();

    console.log(reposDataObj);
  }

  return (
    <div>
      {reposDataObj ? <p>{JSON.stringify(reposDataObj)}</p> : <p>No data!</p>}
    </div>
  );
}

export default Authenticator;
