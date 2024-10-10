export const metadata = {
  title: "Gitview ⋅ Repos Overview",
  description: "Coded by Omid Armat",
};

const CLIENT_ID = "Ov23litdRO2lgamcc13Z";
const CLIENT_SECRET = "10846d391b322866269541c820989ba34c689f2b";
const STATE = "dfs978g6ysb98wn0yw9834ohgiunsdflbv3987rvbyh90ase8";

export default function Home() {
  const isAuthenticated = false;

  return (
    <main>
      {!isAuthenticated && (
        <>
          <div>
            <h1>Gitview</h1>
            <p>Sign in to get a quick overview of your Github repositories.</p>
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=${STATE}`}
              className="text-blue-600 underline underline-offset-2"
              target="_blank"
            >
              Log in with Github
            </a>
          </div>
        </>
      )}
      {isAuthenticated && (
        <>
          <h2>Repos Overview</h2>
          <div>repos list</div>
        </>
      )}
    </main>
  );
}
