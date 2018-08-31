type buildingAttributes = {
    variety: variety;
    floors: number;
    material: String;
    zone: String;
};


function Architect(): void {
    let attributes: buildingAttributes;

    function ConstructBungalow(material: String, zone: String): void {
        attributes = {
            zone: zone,
            material: material,
            variety: "Bungalow",
            floors: 1
        };
    }

    function ConstructSkyScraper(material: String, zone: String, floors: number): void {
        attributes = {
            zone: zone,
            material: material,
            variety: "Skyscraper",
            floors: floors
        };
    }

    function ConstructGarage(zone: String, floors: number): void {
        attributes = {
            zone: zone,
            material: "Cement",
            variety: "Garage",
            floors: floors
        };
    }

    function Build(): building {
        return Building(attributes);
    }
}