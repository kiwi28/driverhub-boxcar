import { RecordModel } from "pocketbase";

export interface Listing {
	id: string;
	created: string;
	updated: string;
	collectionId: string;
	brand: CarBrandsEnum;
	model_w_engine: string;
	description?: string;
	images: string[];
	year: string;
	fuel: string;
	price: string;
	engine_cmc?: number;
	phone: string;
	seats: number;
	chasis: string;
	ramanere?: boolean;
	deposit?: boolean;
	transmission: string;
	traits?: string[];
	pickup_address: string;
	user: string;
	admin_approval: string;
	isActive: boolean;
	isDeleted: boolean;
	isPromoted: boolean;
}

// This type combines your Listing with PocketBase's Record type
export type ListingRecord = RecordModel & Listing;

// Type for the list response
export interface ListResponse<T> {
	page: number;
	perPage: number;
	totalItems: number;
	totalPages: number;
	items: T[];
}

export enum CarBrandsEnum {
	Abarth = "Abarth",
	Acura = "Acura",
	Aiways = "Aiways",
	Aixam = "Aixam",
	AlfaRomeo = "Alfa Romeo",
	Aro = "Aro",
	AstonMartin = "Aston Martin",
	Audi = "Audi",
	Austin = "Austin",
	Baic = "Baic",
	Bentley = "Bentley",
	BMW = "BMW",
	Bugatti = "Bugatti",
	Buick = "Buick",
	Cadillac = "Cadillac",
	Chevrolet = "Chevrolet",
	Chrysler = "Chrysler",
	Citroen = "Citroen",
	Comarth = "Comarth",
	Cupra = "Cupra",
	Dacia = "Dacia",
	Daewoo = "Daewoo",
	Daihatsu = "Daihatsu",
	DFSK = "DFSK",
	Dodge = "Dodge",
	DSAutomobiles = "DS Automobiles",
	Ferrari = "Ferrari",
	Fiat = "Fiat",
	Fisker = "Fisker",
	Ford = "Ford",
	Forthing = "Forthing",
	Geely = "Geely",
	Gmc = "Gmc",
	Honda = "Honda",
	Hummer = "Hummer",
	Hyundai = "Hyundai",
	Ineos = "Ineos",
	Infiniti = "Infiniti",
	Isuzu = "Isuzu",
	JAC = "JAC",
	Jaguar = "Jaguar",
	Jeep = "Jeep",
	KG_Mobility = "KG Mobility",
	Kia = "Kia",
	Lada = "Lada",
	Lamborghini = "Lamborghini",
	Lancia = "Lancia",
	LandRover = "Land Rover",
	Lexus = "Lexus",
	Ligier = "Ligier",
	Lincoln = "Lincoln",
	Lotus = "Lotus",
	Lucid = "Lucid",
	LynkAndCo = "Lynk&Co",
	Mahindra = "Mahindra",
	Maserati = "Maserati",
	Maybach = "Maybach",
	Mazda = "Mazda",
	McLaren = "McLaren",
	MercedesBenz = "Mercedes-Benz",
	MG = "MG",
	Microcar = "Microcar",
	Microlino = "Microlino",
	Mini = "Mini",
	Mitsubishi = "Mitsubishi",
	Morgan = "Morgan",
	Nissan = "Nissan",
	Opel = "Opel",
	Peugeot = "Peugeot",
	Plymouth = "Plymouth",
	Polestar = "Polestar",
	Pontiac = "Pontiac",
	Porsche = "Porsche",
	Renault = "Renault",
	RollsRoyce = "Rolls-Royce",
	Rover = "Rover",
	Saab = "Saab",
	Seat = "Seat",
	Seres = "Seres",
	Skoda = "Skoda",
	Skywell = "Skywell",
	Smart = "Smart",
	SsangYong = "SsangYong",
	Subaru = "Subaru",
	Suzuki = "Suzuki",
	SWM = "SWM",
	Tata = "Tata",
	Tazzari = "Tazzari",
	Tesla = "Tesla",
	Toyota = "Toyota",
	Trabant = "Trabant",
	Triumph = "Triumph",
	Vauxhall = "Vauxhall",
	Volkswagen = "Volkswagen",
	Volvo = "Volvo",
	Weismann = "Weismann",
	XEV = "XEV",
	Altele = "Altele",
}
