import type { Image } from "$models/types/Image";

interface ProjectInterface {
	name: string;
	description: string;
	previewImage: Image;
	liveUrl: string;
	codeUrl: string;
	techs: string[];
}

export type { ProjectInterface };
