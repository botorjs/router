
export interface IView {
    render(path: String, context, view: String, data: any): string
}