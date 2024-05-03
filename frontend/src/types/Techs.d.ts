export default interface ThecProps {
    id: number;
    attributes: {
        name: string;
        imageLink?: string;
        createtAt: string;
        image: {
            data: {
                attributes: {
                    url: string
                }
            } | null;
        }
    }
}