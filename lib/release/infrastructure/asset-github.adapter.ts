import { GithubReleaseAsset } from './github.api';
import { ARCHITECTURES, Architecture, ReleaseAsset, EXTENSIONS, Extension, OS_FOR_EXTENSIONS } from '../domain';


export function githubAssetsToAssets(assets: GithubReleaseAsset[], releaseVersion: string): ReleaseAsset[] {
  return assets.map((asset) => githubAssetToAsset(asset, releaseVersion));
}

export function githubAssetToAsset(asset: GithubReleaseAsset, releaseVersion: string): ReleaseAsset {
  const extension = extractExtension(asset.name);
  const os = OS_FOR_EXTENSIONS[extension] ?? 'unknown';

  return {
    os,
    architecture: extractArchitecture(asset.name),
    extension: extractExtension(asset.name),
    url: asset.browser_download_url,
    version: releaseVersion,
  };
}

function extractExtension(assetName: string): Extension {
  const extension = EXTENSIONS.find((ext) => assetName.endsWith(ext));

  return extension ? extension : 'unknown';
}

function extractArchitecture(assetName: string): Architecture {
  const architecture = ARCHITECTURES.find((key) => assetName.includes(key.toLowerCase()));

  return architecture ? toArchitecture(architecture) : 'unknown';
}

function toArchitecture(architecture: string): Architecture {
  switch (architecture) {
  case 'aarch64':
    return 'aarch64';
  case 'x64':
    return 'x64';
  case 'amd64':
    return 'amd64';
  case 'x86_64':
    return 'x86_64';
  default:
    return 'unknown';
  }
}