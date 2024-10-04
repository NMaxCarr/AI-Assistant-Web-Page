import { GITHUB_OWNER, GITHUB_REPOSITORY } from '@/configuration';

import { Architecture, Extension, Os, ReleaseAsset } from '../domain/types';
import { githubAssetsToAssets } from '../infrastructure/asset-github.adapter';
import { GithubRelease, getFinalReleases } from '../infrastructure/github.api';


export interface LatestReleaseRequest {
    os: Os;
    architecture: Architecture;
    extension: Extension;
}

export async function getLatestRelease(requests: LatestReleaseRequest[]): Promise<ReleaseAsset[]> {
  const githubReleases = await getFinalReleases({
    owner: GITHUB_OWNER,
    repository: GITHUB_REPOSITORY,
  });

  if (githubReleases.length === 0) {
    return [];
  }

  let missingRequests: LatestReleaseRequest[] = requests;
  let releaseAssets: ReleaseAsset[] = [];

  for (let i = 0; i < githubReleases.length; i++) {
    const nextRelease = extractReleasesForGithubReleases(githubReleases[i], missingRequests);
    releaseAssets = [...releaseAssets, ...nextRelease];
    missingRequests = getMissingReleaseRequests(releaseAssets, requests);
    if (missingRequests.length === 0) {
      break;
    }
  }

  return releaseAssets;
}

function extractReleasesForGithubReleases(githubRelease: GithubRelease, requests: LatestReleaseRequest[]): ReleaseAsset[] {
  const releases = githubAssetsToAssets(githubRelease.assets, githubRelease.tag_name);

  return extractReleasesForRequests(releases, requests);
}

function getMissingReleaseRequests(releases: ReleaseAsset[], requests: LatestReleaseRequest[]): LatestReleaseRequest[] {
  return requests.filter((request) => !releases.some((asset) => doesMatchRequestedRelease(asset, request)));
}

function extractReleasesForRequest(releases: ReleaseAsset[], request: LatestReleaseRequest): ReleaseAsset[] {
  return releases.filter((asset) => doesMatchRequestedRelease(asset, request));
}

function extractReleasesForRequests(releases: ReleaseAsset[], requests: LatestReleaseRequest[]): ReleaseAsset[] {
  return requests.flatMap((request) => extractReleasesForRequest(releases, request));
}

function doesMatchRequestedRelease(asset: ReleaseAsset, requests: LatestReleaseRequest): boolean {
  return asset.os === requests.os &&
         asset.architecture === requests.architecture &&
         asset.extension === requests.extension;
}

export function getAllLatestRelease(): Promise<ReleaseAsset[]> {
  return getLatestRelease([
    {
      os: 'macos',
      architecture: 'aarch64',
      extension: 'dmg',
    },
    {
      os: 'windows',
      architecture: 'x64',
      extension: 'exe',
    },
    {
      os: 'windows',
      architecture: 'x64',
      extension: 'msi',
    },
    {
      os: 'linux',
      architecture: 'x86_64',
      extension: 'rpm',
    },
    {
      os: 'linux',
      architecture: 'amd64',
      extension: 'AppImage',
    },
    {
      os: 'linux',
      architecture: 'amd64',
      extension: 'deb',
    }
  ]);
}
