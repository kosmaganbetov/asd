import mongoose from 'mongoose';
import Category from './models/Category.js';
import City from './models/City.js';
import Country from './models/Country.js';
import Direction from './models/Direction.js';
import Tour from './models/Tour.js';
import Tourmate from './models/Tourmate.js';
import TourTransport from './models/TourTransport.js';
import TourType from './models/TourType.js';
import * as dotenv from "dotenv"
dotenv.config();
await mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true});
console.log(process.env.DB_CONNECT);
const db = mongoose.connection;
console.log(db);
db.once('open', async () => {

    try {
        await db.dropCollection('directions');
        await db.dropCollection('tourmates');
        await db.dropCollection('tours');
    } catch (e) {
        console.log('Collections were not present, skipping drop...');
    }

    const [Bill, Ilon, Jeff] = await Tourmate.create(
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
    );
    const [Kazakhstan, USA, England] = await Country.create(
        {
            country: "Казахстан"
        },
        {
            country: "США"
        },
        {
            country: "Англия"
        },
    );
    const [Almaty, NY, London] = await City.create(
        {
            city: "Алматы"
        },
        {
            city: "Нью-Йорк"
        },
        {
            city: "Лондон"
        },
    );
    const [Private, Group] = await TourType.create(
        {
            type: "Частный",
            icon: "type_icon.jpg"
        },
        {
            type: "Групповой",
            icon: "type_icon.jpg"
        }
    );
    const [Foote, Car] = await TourTransport.create(
        {
            transport: "Пешком",
            icon: "transport_icon.jpg"
        },
        {
            transport: "На машине",
            icon: "transport_icon.jpg"
        }
    );

    const [Food, Architecture, Stores] = await Category.create(
        {
            category: "Еда",
            icon: "category_icon.jpg"
        },
        {
            category: "Архитектура",
            icon: "category_icon.jpg"
        },
        {
            category: "Магазины",
            icon: "category_icon.jpg"
        }
    );
    await Tour.create(
        {
            title:"Прелести Мангистау",
            tourmateID: Ilon._id,
            price: 300000,
            description:"Открой для себя жана Казахстан",
            image:"kz.jpg",
            cityID: Almaty._id,
            countryID: Kazakhstan._id,
            tourType: Private._id,
            tourTransport: Car._id,
            plan: [{
                title: "Встреча с Турмэйтом",
                description: "Вы встретитесь с Турмэйтом. Место встречи: Princess street, 12, NY9812"
            }, 
            {
                title: "Coffee Time",
                description: "Ваш Турмэйт покажет самое классное кофе в Нью Йорке. Попьем классное кофе, и познакомимся поближе."
            },
            {
                title: "Times Square",
                description: "Сердце Нью-Йорка. Если не были в Times Sqaure, значит вы не были в НЙ."
            }],
            moreservices: [{
                title: "Ночлег",
                price: 20
            }, 
            {
                title: "Фотосессия",
                price: 20
            }, 
            {
                title: "Портер",
                price: 30
            }, 
            {
                title: "Планирование поездки",
                price: 10
            }, 
            ],
            program: {
                included: ["Частный Гид", "Водитель", "Машина"],
                notincluded: ["Расходы на еду", "Билеты на музей"]
            },
            categories: [Food._id, Architecture._id, Stores._id],
            duration: "1 день"
        },
        {
            title:"Тур по Манхэттен",
            tourmateID: Jeff._id,
            price: 220500,
            description:"Открой для себя жана Казахстан",
            image:"england.jpg",
            cityID: NY._id,
            countryID: USA._id,
            tourType: Group._id,
            tourTransport: Foote._id,
            plan: [{
                title: "Встреча с Турмэйтом",
                description: "Вы встретитесь с Турмэйтом. Место встречи: Princess street, 12, NY9812"
            }, 
            {
                title: "Coffee Time",
                description: "Ваш Турмэйт покажет самое классное кофе в Нью Йорке. Попьем классное кофе, и познакомимся поближе."
            },
            {
                title: "Times Square",
                description: "Сердце Нью-Йорка. Если не были в Times Sqaure, значит вы не были в НЙ."
            }],
            program: {
                included: ["Частный Гид"],
                notincluded: ["Расходы на еду", "Билеты на музей"]
            },
            moreservices: [{
                title: "Ночлег",
                price: 20
            }, 
            {
                title: "Фотосессия",
                price: 20
            }, 
            {
                title: "Портер",
                price: 30
            }, 
            {
                title: "Планирование поездки",
                price: 10
            }, 
            ],
            categories: [Food._id, Architecture._id, Stores._id],
            duration: "8 часов"
        },
        {
            title:"Глазго: City Center",
            tourmateID: Bill._id,
            price: 150000,
            description:"Открой для себя жана Казахстан",
            image:"usa.jpg",
            cityID: London._id,
            countryID: England._id,
            tourType: Group._id,
            tourTransport: Car._id,
            plan: [{
                title: "Встреча с Турмэйтом",
                description: "Вы встретитесь с Турмэйтом. Место встречи: Princess street, 12, NY9812"
            }, 
            {
                title: "Coffee Time",
                description: "Ваш Турмэйт покажет самое классное кофе в Нью Йорке. Попьем классное кофе, и познакомимся поближе."
            },
            {
                title: "Times Square",
                description: "Сердце Нью-Йорка. Если не были в Times Sqaure, значит вы не были в НЙ."
            }],
            program: {
                included: ["Частный Гид", "Водитель", "Машина"],
                notincluded: ["Расходы на еду", "Билеты на музей"]
            },
            moreservices: [{
                title: "Ночлег",
                price: 20
            }, 
            {
                title: "Фотосессия",
                price: 20
            }, 
            {
                title: "Портер",
                price: 30
            }, 
            {
                title: "Планирование поездки",
                price: 10
            }, 
            ],
            categories: [Food._id, Architecture._id, Stores._id],
            duration: "5 часов"
        },
    )

    await db.close();
});