import { describe } from 'node:test';

import { githubAssetToAsset } from './asset-github.adapter';
import { GithubReleaseAsset } from './github.api';


const DMG_AARCH64_GITHUB_ASSET: GithubReleaseAsset = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196768101',
  id: 196768101,
  name: 'AI.Likes.Human_1.0.3_aarch64.dmg',
  content_type: 'application/octet-stream',
  size: 15679872,
  created_at: '2024-10-04T00:51:34Z',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/AI.Likes.Human_1.0.3_aarch64.dmg'
};

const DMG_X64_GITHUB_ASSET: GithubReleaseAsset = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196768025',
  id: 196768025,
  name: 'AI.Likes.Human_1.0.3_x64.dmg',
  content_type: 'application/octet-stream',
  size: 14405963,
  created_at: '2024-10-04T00:50:59Z',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/AI.Likes.Human_1.0.3_x64.dmg'
};

const EXE_X64_GITHUB_ASSET: GithubReleaseAsset = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196769494',
  id: 196769494,
  name: 'AI.Likes.Human_1.0.3_x64-setup.exe',
  content_type: 'application/octet-stream',
  size: 9063543,
  created_at: '2024-10-04T01:00:18Z',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/AI.Likes.Human_1.0.3_x64-setup.exe'
};

const MSI_X64_GITHUB_ASSET: GithubReleaseAsset = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196769492',
  id: 196769492,
  name: 'AI.Likes.Human_1.0.3_x64_en-US.msi',
  content_type: 'application/octet-stream',
  size: 12816384,
  created_at: '2024-10-04T01:00:18Z',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/AI.Likes.Human_1.0.3_x64_en-US.msi'
};

const DEB_AMD64_GITHUB_ASSET: GithubReleaseAsset = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196769034',
  id: 196769034,
  name: 'ai-likes-human_1.0.3_amd64.deb',
  content_type: 'application/octet-stream',
  size: 16974648,
  created_at: '2024-10-04T00:57:16Z',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/ai-likes-human_1.0.3_amd64.deb'
};

const RPM_X86_X64_GITHUB_ASSET: GithubReleaseAsset = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196769033',
  id: 196769033,
  name: 'ai-likes-human-1.0.3-1.x86_64.rpm',
  content_type: 'application/x-redhat-package-manager',
  size: 16977668,
  created_at: '2024-10-04T00:57:16Z',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/ai-likes-human-1.0.3-1.x86_64.rpm'
};

const APPIMAGE_AMD64_GITHUB_ASSET: GithubReleaseAsset = {
  url: 'https://api.github.com/repos/samuelint/ai-likes-human/releases/assets/196769035',
  id: 196769035,
  name: 'ai-likes-human_1.0.3_amd64.AppImage',
  content_type: 'application/octet-stream',
  size: 97662144,
  created_at: '2024-10-04T00:57:17Z',
  browser_download_url: 'https://github.com/samuelint/ai-likes-human/releases/download/v1.0.3/ai-likes-human_1.0.3_amd64.AppImage'
};

const SOME_RELEASE_VERSION = '1.0.3';

describe('githubAssetToAsset', () => {
  describe('architecture', () => {
    test(`given asset with aarch64 extension,
          when adapting,
          then asset architecture should be aarch64`, () => {
      const result = githubAssetToAsset(DMG_AARCH64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.architecture).toBe('aarch64');
    });

    test(`given asset with x64 extension,
          when adapting,
          then asset architecture should be x64`, () => {
      const result = githubAssetToAsset(DMG_X64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.architecture).toBe('x64');
    });

    test(`given asset with x86_64 extension,
          when adapting,
          then asset architecture should be x86_64`, () => {
      const result = githubAssetToAsset(RPM_X86_X64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.architecture).toBe('x86_64');
    });

    test(`given asset with amd64 extension,
          when adapting,
          then asset architecture should be amd64`, () => {
      const result = githubAssetToAsset(DEB_AMD64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.architecture).toBe('amd64');
    });
  });

  describe('os', () => {
    test(`given asset with dmg extension,
          when adapting,
          then asset os should be macos`, () => {
      const result = githubAssetToAsset(DMG_AARCH64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.os).toBe('macos');
    });

    test(`given asset with exe extension,
          when adapting,
          then asset os should be windows`, () => {
      const result = githubAssetToAsset(EXE_X64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.os).toBe('windows');
    });

    test(`given asset with msi extension,
          when adapting,
          then asset os should be windows`, () => {
      const result = githubAssetToAsset(MSI_X64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.os).toBe('windows');
    });
  });

  describe('extension', () => {
    test(`given asset with dmg extension,
          when adapting,
          then asset extension should be .dmg`, () => {
      const result = githubAssetToAsset(DMG_AARCH64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.extension).toBe('dmg');
    });

    test(`given asset with exe extension,
          when adapting,
          then asset extension should be exe`, () => {
      const result = githubAssetToAsset(EXE_X64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.extension).toBe('exe');
    });

    test(`given asset with msi extension,
          when adapting,
          then asset extension should be msi`, () => {
      const result = githubAssetToAsset(MSI_X64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.extension).toBe('msi');
    });

    test(`given asset with rpm extension,
          when adapting,
          then asset extension should be rpm`, () => {
      const result = githubAssetToAsset(RPM_X86_X64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.extension).toBe('rpm');
    });

    test(`given asset with AppImage extension,
          when adapting,
          then asset extension should be AppImage`, () => {
      const result = githubAssetToAsset(APPIMAGE_AMD64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.extension).toBe('AppImage');
    });

    test(`given asset with deb extension,
          when adapting,
          then asset extension should be deb`, () => {
      const result = githubAssetToAsset(DEB_AMD64_GITHUB_ASSET, SOME_RELEASE_VERSION);

      expect(result.extension).toBe('deb');
    });
  });
});