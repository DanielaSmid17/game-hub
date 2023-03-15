import ganres from "../data/ganres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: ganres, isLoading: false, error: null})

export default useGenres;