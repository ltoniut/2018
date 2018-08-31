type variety = "Skyscraper" | "Garage" | "Bungalow";

type building = {
    variety: variety;
    floors: number;
    material: String;
    zone: String;
    estimate: Date
};

function Building(attributes: buildingAttributes): building {
    let estimate: Date;
    const date: Date = new Date();

    switch(attributes.material) {
        case "Bungalow": estimate = new Date(date.getFullYear() + 1, date.getMonth(), date.getDay());
        case "Garage": estimate = new Date(date.getFullYear() + attributes.floors, date.getMonth(), date.getDay());
        case "Skyscraper": estimate = new Date(date.getFullYear(), date.getMonth() + attributes.floors, date.getDay());
    }

    return {
        variety: attributes.variety,
        floors: attributes.floors,
        zone: attributes.zone,
        material: attributes.material,
        estimate: estimate
    };
}