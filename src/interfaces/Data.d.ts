export type Projects = {
    name:string;
    technology : string;
    highlights: string[];
    gallery: string[];
    source? :{
        type : string;
        url : string;
        tooltip? :string;
    };
    demo? : {
        type : string;
        url:string;
        tooltip?:string;
    }
}[]