import { Octokit } from '@octokit/rest';

class GitHubClient {
  private octokit: Octokit;

  constructor(authToken: string) {
    this.octokit = new Octokit({ auth: authToken });
  }

  async getRecentRepositories(username: string, limit: number = 10): Promise<any[]> {
    const { data } = await this.octokit.repos.listForUser({
      username,
      sort: 'created',
      direction: 'desc',
      per_page: limit,
    });

    return data;
  }
}

export default GitHubClient;