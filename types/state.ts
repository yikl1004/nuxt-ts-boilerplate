export interface DefaultValue {
    label: string
    refId?: string
    value: string
}

export interface SessionState {
    cartId: string
    cartProductCount: number
    code: 'signed' | 'unsigned'
    contextPath: string
    customer: Customer
    lastAccessTime: number
    logo: string
    platform: Platform
    platformId: string
    point: Point
    projectId: string
    role: string
    sessionKey: string
    site: Site
    siteId: string
    userId: string
    userRole: string
    userType: string
}

export interface Customer {
    accessIp: string
    affiliateNo: DefaultValue
    birthDate: string
    cellPhone: string
    changed: string
    created: string
    customerId: string
    customerNo: number
    customerStatus: DefaultValue
    email: string
    employeeNo: string
    employmentStatus: DefaultValue
    gender: DefaultValue
    isLock: false
    lastConnectionTime: string
    lastPasswordChangeDate: string
    loginFailCount: number
    modifier: DefaultValue
    name: string
    owner: DefaultValue
    personalInformationUsesAgreeYn: false
    platformId: DefaultValue
    receivingEmailAgreeYn: false
    receivingSmsAgreeYn: false
    signDate: string
    siteId: DefaultValue
}

export interface Platform {
    address: string
    businessNo: string
    changed: string
    created: string
    logo: string
    managerCellphone: string | null
    managerDepartment: string
    managerEmail: string
    managerName: string
    managerPhone: string | null
    managerPosition: string | null
    modifier: DefaultValue
    name: string
    onlineSalesReportNo: string
    owner: DefaultValue
    platformId: string
    postCode: string
    privacyOfficer: string
    representative: string
    useYn: boolean
}

export interface Site {
    aboutUsUrl: string
    changed: string
    created: string
    csHours: string
    csPhone: string
    id: string
    isTemplate: boolean
    modifier: string
    name: string
    owner: string
    platformId: string
    pointName: string
    pointYn: boolean
    siteTheme: string
    siteType: string
    useYn: true
    withdrawYn: boolean
}

export interface Point {
    add: number
    use: number
    balance: number
}