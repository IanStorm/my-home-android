export type App =
& {
		readonly isOSS?: false | OSSInfo
		readonly name: string
		readonly privacyAudit?: PrivacyAudit
	} & (
		| {
			readonly id: AppID
			readonly playStoreID: false
		} | {
			readonly playStoreID: PlayStoreID
		}
	)
;

export type AppID = string

interface ExodusPrivacyAudit extends PrivacyAuditBase<"Exodus"> {
	readonly permissionCount: number
	readonly permissionsRating: PrivacyRating
	readonly reportID: string
	readonly trackerCount: number
	readonly trackersRating: PrivacyRating
}

type GitHubOSS = OSSInfoBase<"GitHub">
type GitLabOSS = OSSInfoBase<"GitLab">

export type OSSInfo =
	| GitHubOSS
	| GitLabOSS

interface OSSInfoBase<THost extends string> {
	readonly host: THost
	readonly owner: string
	readonly repository: string
}

export type PlayStoreID = string

export type PrivacyAudit =
	| ExodusPrivacyAudit

interface PrivacyAuditBase<TPlatform extends string> {
	readonly platform: TPlatform
	readonly rating: PrivacyRating
}

type PrivacyRating =
	| "danger"
	| "fine"
	| "warning"
