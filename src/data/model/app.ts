export interface App {
	readonly isOSS?: false | OSSInfo
	readonly name: string
	readonly playStoreID: string | false
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
