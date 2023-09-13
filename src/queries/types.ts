export type UserData = {
    name: string;
    city: string;
    position: string;
    photo: {
        url: string;
    };
};

export type IntroData = {
    title: string;
    span: string;
    position: string;
    description: string;
    years_experience: number;
    finished_projects: number;
};

export type AboutData = {
    title: string;
    span: string;
    description: string;
};
