export { IDefaultOption, IBaseOptionItem, IProductOptionItem } from 'response'
export { SessionState, Customer, Platform, Site, Point, DefaultValue }  from 'state'


// config 파일의 기본 I/F
export interface IConfig {
    apiHost: string
    exclusiveSiteId: string
    designatedSiteIds: string[]
    project: string
    srcDir: string
    usePathSiteId: boolean
    sweetTrackerKey: string
    pwa_publicPath: string
}

// API I/F
export interface IAPI {
    method: string
    url: string
}

export type ActiveFlag = 'open' | '';