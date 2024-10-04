import { groupReleaseAssetsByOsArchExtension } from './group';
import { ReleaseAsset } from './types';


describe('groupReleaseAssetsByOsArchExtension', () => {

  test(`given no assets,
        when grouping,
        then empty object is returned`, () => {

    const assets: ReleaseAsset[] = [
      {
        os: 'macos',
        architecture: 'aarch64',
        extension: 'dmg',
        url: '',
        version: ''
      },
      {
        os: 'windows',
        architecture: 'x64',
        extension: 'exe',
        url: '',
        version: ''
      },
      {
        os: 'windows',
        architecture: 'aarch64',
        extension: 'exe',
        url: '',
        version: ''
      },
      {
        os: 'linux',
        architecture: 'aarch64',
        extension: 'rpm',
        url: '',
        version: ''
      },
    ];

    const result = groupReleaseAssetsByOsArchExtension(assets);

    expect(result).toEqual({
      macos: {
        aarch64: {
          dmg: [{
            os: 'macos',
            architecture: 'aarch64',
            extension: 'dmg',
            url: '',
            version: ''
          }]
        }
      },
      windows: {
        x64: {
          exe: [{
            os: 'windows',
            architecture: 'x64',
            extension: 'exe',
            url: '',
            version: ''
          }]
        },
        aarch64: {
          exe: [{
            os: 'windows',
            architecture: 'aarch64',
            extension: 'exe',
            url: '',
            version: ''
          }]
        }
      },
      linux: {
        aarch64: {
          rpm: [{
            os: 'linux',
            architecture: 'aarch64',
            extension: 'rpm',
            url: '',
            version: ''
          }]
        }
      }
    });
  });
});