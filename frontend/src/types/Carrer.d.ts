export default interface CarrerProps {
    id: string;
    attributes: {
        company: string;
        position: string;
        imageLink: string;
        from: Date | string;
        to: Date | string;
        description: string;
        content: {
            text: string
        }[];
    }
}