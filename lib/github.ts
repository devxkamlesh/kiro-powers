// GitHub API - No authentication needed for public repos
const GITHUB_API = "https://api.github.com";
const USERNAME = "devxkamlesh";

export interface GitHubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  description: string;
  html_url: string;
}

export async function getRepoStats(repoName: string): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(`${GITHUB_API}/repos/${USERNAME}/${repoName}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${repoName}:`, response.status);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${repoName}:`, error);
    return null;
  }
}

export async function getAllPowersStats() {
  const repos = [
    "kiro-power-web-intelligence",
    "kiro-power-fullstack-architect",
    "kiro-power-ui-designer",
  ];

  const stats = await Promise.all(repos.map((repo) => getRepoStats(repo)));

  const totalStars = stats.reduce((sum, repo) => sum + (repo?.stargazers_count || 0), 0);
  const totalForks = stats.reduce((sum, repo) => sum + (repo?.forks_count || 0), 0);
  const totalWatchers = stats.reduce((sum, repo) => sum + (repo?.watchers_count || 0), 0);

  return {
    repos: stats.filter((repo): repo is GitHubRepo => repo !== null),
    totalStars,
    totalForks,
    totalWatchers,
  };
}
