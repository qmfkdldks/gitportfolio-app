import GitHubClient from './githubClient';
import { Octokit } from '@octokit/rest';

jest.mock('@octokit/rest');

describe('GitHubClient', () => {
  let githubClient: GitHubClient;
  let mockOctokit: jest.Mocked<Octokit>;

  beforeEach(() => {
    mockOctokit = new Octokit() as jest.Mocked<Octokit>;
    (Octokit as jest.Mock).mockImplementation(() => mockOctokit);
    githubClient = new GitHubClient('fake-token');
  });

  describe('getRecentRepositories', () => {
    it('should fetch recent repositories for a user', async () => {
      const mockRepos = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];
      mockOctokit.repos.listForUser.mockResolvedValue({ data: mockRepos } as any);

      const result = await githubClient.getRecentRepositories('testuser', 2);

      expect(result).toEqual(mockRepos);
      expect(mockOctokit.repos.listForUser).toHaveBeenCalledWith({
        username: 'testuser',
        sort: 'created',
        direction: 'desc',
        per_page: 2,
      });
    });
  });
});