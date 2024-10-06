declare namespace gapi {
    // function load(
    //     libraries: string,
    //     callback: () => void
    // ): void;
    namespace client {
        function init(args: any): Promise<void>;
        namespace calendar {
            namespace events {
                function list(args: any): Promise<any>;
            }
        }
    }
    // namespace auth2 {
    //     function getAuthInstance(): any;
    // }
}