export default interface ProjectProps {
    id: string;
    attributes: {
        name: string;
        date: string | Date;
        image: {
            data: {
                attributes: {
                    url: string
                }
            };
        };
        type: string;
        link: string;
    }
}