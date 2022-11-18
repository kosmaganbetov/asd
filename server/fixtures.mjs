import mongoose from 'mongoose';
import Direction from './models/Direction.js';
import Tourmate from './models/Tourmate.js';

mongoose.connect("mongodb://localhost/travella", {useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', async () => {

    try {
        await db.dropCollection('directions');
        await db.dropCollection('tourmates');
    } catch (e) {
        console.log('Collections were not present, skipping drop...');
    }

    await Tourmate.create(
        {
            name:"Билл",
            surname: "Гейст",
            description:"Америкадагы карапайым жигит",
            text:"Что то вместо текста",
            location:"Америка",
            languages:['Англиский', 'Казахский', 'Руский'],
            verificate: true,
            status:"Время отклика 13 часов",
            image:"bill.jpg"

        },
        {
            name:"Илон",
            surname: "Маск",
            description:"Железный человек",
            text:"Покажу тебе свои владения",
            location:"Техас",
            languages:['Узбеский', 'Португальский', 'Руский'],
            verificate: false,
            status:"Время отклика 7 часов",
            image:"ilon.jpg"

        },
        {
            name:"Джеф",
            surname: "Безос",
            description:"Миллионер с трущоб",
            text:"Приезжай смотри",
            location:"Англия",
            languages:['Англиский','Руский','Казахский'],
            verificate: true,
            status:"Время отклика 6 часов",
            image:"bezos.jpg"

        },
        
    );
    await Direction.create(
        {
            name:"Казахстан",
            description:"Открой для себя жана Казахстан",
            image:"kz.jpg"
        },
        {
            name:"США",
            description:"Открой для себя Америку",
            image:"usa.jpg"
        },
        {
            name:"Англия",
            description:"Величественная Великобритания",
            image:"england.jpg"
        },
    )

    await db.close();
});