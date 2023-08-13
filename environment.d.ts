declare global {
	namespace NodeJS {
		interface ProcessEnv {
			STATIC_URL: string;
		}
	}
}

export {};
