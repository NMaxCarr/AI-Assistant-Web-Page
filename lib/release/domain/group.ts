import { groupBy } from 'lodash';
import { ReleaseAsset, ReleaseAssetsBy, MandatoryReleaseAssetKeys, GroupReleaseAssetsByOsArchExtension } from './types';


export function groupReleaseAssetsBy<TKey extends MandatoryReleaseAssetKeys>(assets: ReleaseAsset[], key: TKey): ReleaseAssetsBy<TKey> {
  const result = groupBy(assets, key);

  return result as ReleaseAssetsBy<TKey>;
}


export function groupReleaseAssetsByOsArchExtension(assets: ReleaseAsset[]): GroupReleaseAssetsByOsArchExtension {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};


  const byOs = groupBy(assets, 'os');

  for (const [os, assetsOfOs] of Object.entries(byOs)) {
    result[os] = groupBy(assetsOfOs, 'architecture');
    for (const [arch, assetsOfArch] of Object.entries(result[os])) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result[os][arch] = groupBy(assetsOfArch as any, 'extension');
    }
  }

  return result as GroupReleaseAssetsByOsArchExtension;
}

