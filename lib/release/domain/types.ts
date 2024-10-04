export const OS = ['macos' , 'windows' , 'linux', 'unknown'] as const;
export type Os = typeof OS[number];
export const ARCHITECTURES = ['aarch64' , 'x64' , 'amd64' , 'x86_64', 'unknown'] as const;
export type Architecture = typeof ARCHITECTURES[number];
export const EXTENSIONS = ['dmg' , 'exe' , 'msi' , 'rpm', 'deb', 'AppImage', 'unknown'] as const;
export type Extension = typeof EXTENSIONS[number];

export const OS_FOR_EXTENSIONS: Record<Extension, Os> = {
  'dmg': 'macos',
  'exe': 'windows',
  'msi': 'windows',
  'rpm': 'linux',
  'deb': 'linux',
  'AppImage': 'linux',
  'unknown': 'unknown',
};

export interface ReleaseAsset {
    os: Os;
    architecture: Architecture;
    extension: Extension;

    url: string;
    version: string;

    name?: string;
}

type NonOptionalKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? never : K;
}[keyof T];

export type MandatoryReleaseAssetKeys = NonOptionalKeys<ReleaseAsset>;

export type ReleaseAssetsBy<TKey extends MandatoryReleaseAssetKeys> = {
  [key in ReleaseAsset[TKey]]: ReleaseAsset[]
};

export type GroupedBy<TKey extends string, TValue> = {
  [key in TKey]: TValue
};

export type GroupReleaseAssetsByOsArchExtension = GroupedBy<Os, GroupedBy<Architecture, GroupedBy<Extension, ReleaseAsset[]>>>;