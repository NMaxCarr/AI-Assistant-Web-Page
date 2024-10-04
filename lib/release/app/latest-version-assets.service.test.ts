import { vi } from 'vitest';
import { getLatestRelease } from './latest-version-assets.service';
import { GithubRelease, GithubReleaseAsset, getFinalReleases } from '../infrastructure/github.api';
import { when } from 'jest-when';
import { GITHUB_OWNER, GITHUB_REPOSITORY } from '@/configuration';


vi.mock('../infrastructure/github.api');
describe('getLatestRelease', () => {
  test(`given no github release,
        when getting latest release,
        then empty array is returned`, async () => {
    when(getFinalReleases).calledWith({ owner: GITHUB_OWNER, repository: GITHUB_REPOSITORY }).mockResolvedValue([]);

    const result = await getLatestRelease([{
      os: 'macos',
      architecture: 'aarch64',
      extension: 'dmg',
    }]);

    expect(result.length).toBe(0);
  });

  test(`given a requested os macos and github latest release containing a single macos,
        when getting latest release,
        then release is returned`, async () => {
    const githubReleases1 = {
      tag_name: 'v1.0.3',
      assets: [
        DMG_AARCH64_GITHUB_ASSET,
      ]
    } as GithubRelease;
    when(getFinalReleases).calledWith({ owner: GITHUB_OWNER, repository: GITHUB_REPOSITORY }).mockResolvedValue([
      githubReleases1
    ]);

    const result = await getLatestRelease([{
      os: 'macos',
      architecture: 'aarch64',
      extension: 'dmg',
    }]);

    expect(result.length).toBe(1);
    expect(result[0].os).toBe('macos');
  });

  test(`given a requested os macos and github latest release not containing a version, but a previous release does,
        when getting latest release,
        then asset of the previous release is returned`, async () => {
    const githubReleases1 = {
      tag_name: 'v1.0.3',
      assets: [] as GithubReleaseAsset[],
    } as GithubRelease;
    const githubReleases2 = {
      tag_name: 'v1.0.2',
      assets: [] as GithubReleaseAsset[],
    } as GithubRelease;
    const githubReleases3 = {
      tag_name: 'v1.0.1',
      assets: [] as GithubReleaseAsset[],
    } as GithubRelease;
    const githubReleases4 = {
      tag_name: 'v1.0.0',
      assets: [
        DMG_AARCH64_GITHUB_ASSET,
      ]
    } as GithubRelease;
    when(getFinalReleases).calledWith({ owner: GITHUB_OWNER, repository: GITHUB_REPOSITORY }).mockResolvedValue([
      githubReleases1,
      githubReleases2,
      githubReleases3,
      githubReleases4,
    ]);

    const result = await getLatestRelease([{
      os: 'macos',
      architecture: 'aarch64',
      extension: 'dmg',
    }]);

    expect(result.length).toBe(1);
    expect(result[0].os).toBe('macos');
  });

  test(`given a requested os with github release containing other os,
        when getting latest release,
        then only request os is returned`, async () => {
    const githubReleases1 = {
      tag_name: 'v1.0.3',
      assets: [
        EXE_X64_GITHUB_ASSET,
        DMG_AARCH64_GITHUB_ASSET,
      ],
    } as GithubRelease;
    when(getFinalReleases).calledWith({ owner: GITHUB_OWNER, repository: GITHUB_REPOSITORY }).mockResolvedValue([
      githubReleases1,
    ]);

    const result = await getLatestRelease([{
      os: 'macos',
      architecture: 'aarch64',
      extension: 'dmg',
    }]);

    expect(result.length).toBe(1);
    expect(result[0].os).toBe('macos');
  });

  test(`given a multiple requested os,
        when getting latest release,
        then every request os are returned`, async () => {
    const githubReleases1 = {
      tag_name: 'v1.0.3',
      assets: [
        EXE_X64_GITHUB_ASSET,
        DMG_AARCH64_GITHUB_ASSET,
      ],
    } as GithubRelease;
    when(getFinalReleases).calledWith({ owner: GITHUB_OWNER, repository: GITHUB_REPOSITORY }).mockResolvedValue([
      githubReleases1,
    ]);

    const result = await getLatestRelease([{
      os: 'macos',
      architecture: 'aarch64',
      extension: 'dmg',
    },
    {
      os: 'windows',
      architecture: 'x64',
      extension: 'exe',
    }]);

    expect(result.length).toBe(2);
    expect(result[0].os).toBe('macos');
    expect(result[1].os).toBe('windows');
  });

  test(`given requested os with multiple architecture,
        when getting latest release,
        then every requested architecture are returned`, async () => {
    const githubReleases1 = {
      tag_name: 'v1.0.3',
      assets: [
        EXE_X64_GITHUB_ASSET,
        EXE_AARCH64_GITHUB_ASSET,
      ],
    } as GithubRelease;
    when(getFinalReleases).calledWith({ owner: GITHUB_OWNER, repository: GITHUB_REPOSITORY }).mockResolvedValue([
      githubReleases1,
    ]);

    const result = await getLatestRelease([{
      os: 'windows',
      architecture: 'aarch64',
      extension: 'exe',
    },
    {
      os: 'windows',
      architecture: 'x64',
      extension: 'exe',
    }]);

    expect(result.length).toBe(2);
    expect(result[0].os).toBe('windows');
    expect(result[0].architecture).toBe('aarch64');
    expect(result[1].os).toBe('windows');
    expect(result[1].architecture).toBe('x64');
  });

  test(`given requested os with multiple extensions,
        when getting latest release,
        then every requested extensions are returned`, async () => {
    const githubReleases1 = {
      tag_name: 'v1.0.3',
      assets: [
        EXE_X64_GITHUB_ASSET,
        EXE_AARCH64_GITHUB_ASSET,
        MSI_X64_GITHUB_ASSET,
      ],
    } as GithubRelease;
    when(getFinalReleases).calledWith({ owner: GITHUB_OWNER, repository: GITHUB_REPOSITORY }).mockResolvedValue([
      githubReleases1,
    ]);

    const result = await getLatestRelease([{
      os: 'windows',
      architecture: 'aarch64',
      extension: 'exe',
    },
    {
      os: 'windows',
      architecture: 'x64',
      extension: 'msi',
    }]);

    expect(result.length).toBe(2);
    expect(result[0].os).toBe('windows');
    expect(result[0].extension).toBe('exe');
    expect(result[1].os).toBe('windows');
    expect(result[1].extension).toBe('msi');
  });

  test(`given requested a single requested asset missing,
        when getting latest release,
        then other matching assets are returned`, async () => {
    const githubReleases1 = {
      tag_name: 'v1.0.3',
      assets: [
        DMG_AARCH64_GITHUB_ASSET,
      ],
    } as GithubRelease;
    when(getFinalReleases).calledWith({ owner: GITHUB_OWNER, repository: GITHUB_REPOSITORY }).mockResolvedValue([
      githubReleases1,
    ]);

    const result = await getLatestRelease([{
      os: 'macos',
      architecture: 'aarch64',
      extension: 'dmg',
    },
    {
      os: 'linux',
      architecture: 'aarch64',
      extension: 'rpm',
    }]);

    expect(result.length).toBe(1);
    expect(result[0].os).toBe('macos');
  });
});

const DMG_AARCH64_GITHUB_ASSET = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196768101',
  name: 'AI.Likes.Human_1.0.3_aarch64.dmg',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/AI.Likes.Human_1.0.3_aarch64.dmg'
} as GithubReleaseAsset;

const EXE_X64_GITHUB_ASSET = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196769494',
  name: 'AI.Likes.Human_1.0.3_x64-setup.exe',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/AI.Likes.Human_1.0.3_x64-setup.exe'
} as GithubReleaseAsset;

const EXE_AARCH64_GITHUB_ASSET = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196769494',
  name: 'AI.Likes.Human_1.0.3_aarch64-setup.exe',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/AI.Likes.Human_1.0.3_aarch64-setup.exe'
} as GithubReleaseAsset;


const MSI_X64_GITHUB_ASSET: GithubReleaseAsset = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196769492',
  name: 'AI.Likes.Human_1.0.3_x64_en-US.msi',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/AI.Likes.Human_1.0.3_x64_en-US.msi'
} as GithubReleaseAsset;