

export interface GithubReleaseAsset {
    url: string;
    id: number;
    name: string;
    content_type: string;
    size: number;
    browser_download_url: string;
    created_at: string;
}

export interface GithubRelease {
    id: number;
    name: string;
    tag_name: string;
    url: string;
    created_at: string;
    published_at: string;
    draft: boolean;
    prerelease: boolean;
    assets: GithubReleaseAsset[];
}

export interface GithubReleasesRequest {
    owner: string;
    repository: string;
}

export async function getReleases({ owner, repository }: GithubReleasesRequest): Promise<GithubRelease[]>{
  const response = await fetch(`https://api.github.com/repos/${owner}/${repository}/releases`);
  if (!response.ok) {
    throw new Error(`Error fetching the latest release: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function getFinalReleases(request: GithubReleasesRequest): Promise<GithubRelease[]>{
  const releases = await getReleases(request);

  return releases.filter((release) => !release.draft && !release.prerelease);
}