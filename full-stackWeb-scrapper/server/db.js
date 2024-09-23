const typeorm = require('typeorm');

class Creator {
    constructor(id, name, img, ytURL) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.ytURL = ytURL;
    }
}

const EntitySchema = typeorm.EntitySchema;

const CreatorSchema = new EntitySchema({
    name: "Creator",
    target: Creator,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        img: {
            type: "text"
        },
        ytURL: {
            type: "text"
        }
    }
});

const AppDataSource = new typeorm.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "newpassword",
    database: "full-stack-web-scraper",
    synchronize: true,
    logging: false,
    entities: [
        CreatorSchema
    ]
});

async function initializeDataSource() {
    await AppDataSource.initialize();
}

async function getAllCreators() {
    const creatorRepo = AppDataSource.getRepository(Creator);
    const creators = await creatorRepo.find();
    return creators;
}

async function insertCreator(name, img, ytURL) {
    const creator = new Creator(undefined, name, img, ytURL);
    const creatorRepo = AppDataSource.getRepository(Creator);
    await creatorRepo.save(creator);
    const allCreators = await creatorRepo.find();
    return allCreators;
}

module.exports = {
    initializeDataSource,
    getAllCreators,
    insertCreator
};
