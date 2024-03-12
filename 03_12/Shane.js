class Shane {
    constructor(
        name,
        height,
        color,
        skill,
        illustrator,
        designer,
        strength,
        intelligence
    ){
        this.name = name;
        this.height = height;
        this.color = color;
        this.skill = skill;
        this.creativity = {
            illustrator: illustrator,
            designer: designer
        };
        this.strength = strength;
        this.intelligence = intelligence;
    }

    measureIntelligence(intelligenceStatus) {
        this.intelligence = intelligenceStatus;
    }

    creativityStatus(illustrator, designer) {
        this.creativity.illustrator = illustrator;
        this.creativity.designer = designer;
    }
}

export default Shane;
