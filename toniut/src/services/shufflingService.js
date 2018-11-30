export default {
    shuffle(list, amount) {
        const newList = list.slice(0);

        let j, x, i;
        for (i = newList.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = newList[i];
            newList[i] = newList[j];
            newList[j] = x;
        }
        
        return newList.slice(0, amount);
    },
    shuffleByTerrain(terrains, amount, name) {
        const terrain = terrains.find(t => t.terrain === name);
        const newList = terrain.encounters.slice(0);

        let j, x, i;
        for (i = newList.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = newList[i];
            newList[i] = newList[j];
            newList[j] = x;
        }
        
        return newList.slice(0, amount);
    }
}