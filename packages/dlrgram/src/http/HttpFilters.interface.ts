export default interface HttpFilters {
    methods?: string[],
    contentTypes?: string[],
    authOnly?: boolean
}