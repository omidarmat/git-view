export const metadata = {
  title: "Gitview ⋅ Repos Overview",
  description: "Coded by Omid Armat",
};

export default function Home() {
  return (
    <main>
      <div>
        <h1>Gitview</h1>
        <p>Sign in to get a quick overview of your Github repositories.</p>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&state=${process.env.STATE}`}
          className="text-blue-600 underline underline-offset-2"
          target="_blank"
        >
          Log in with Github
        </a>
      </div>
    </main>
  );
}
