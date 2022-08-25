import {SET_END_POINT, SET_START_POINT} from "../actions/actions";
import {uuid} from "../../utils/uuid";

export const appInitState = {
    orders: [
        {
            id: uuid(),
            showRout: false,
            startPoint: {
                "Индекс": "649000",
                "Тип региона": "Респ",
                "Регион": "Алтай",
                "Тип района": "",
                "Район": "",
                "Тип города": "г",
                "Город": "Горно-Алтайск",
                "Тип н/п": "",
                "Н/п": "",
                "Код КЛАДР": "0400000100000",
                "Код ФИАС": "0839d751-b940-4d3d-afb6-5df03fdd7791",
                "Уровень по ФИАС": "4: город",
                "Признак центра района или региона": "2",
                "Код ОКАТО": "84401000000",
                "Код ОКТМО": "84701000",
                "Код ИФНС": "0400",
                "Часовой пояс": "UTC+7",
                "Широта": "51.9582681",
                "Долгота": "85.9602957",
                "Федеральный округ": "Сибирский",
                "Население": "62861"
            },
            endPoint: {
                "Индекс": "658125",
                "Тип региона": "край",
                "Регион": "Алтайский",
                "Тип района": "",
                "Район": "",
                "Тип города": "г",
                "Город": "Алейск",
                "Тип н/п": "",
                "Н/п": "",
                "Код КЛАДР": "2200000200000",
                "Код ФИАС": "ae716080-f27b-40b6-a555-cf8b518e849e",
                "Уровень по ФИАС": "4: город",
                "Признак центра района или региона": "0",
                "Код ОКАТО": "01403000000",
                "Код ОКТМО": "01703000",
                "Код ИФНС": "2201",
                "Часовой пояс": "UTC+7",
                "Широта": "52.4920914",
                "Долгота": "82.7794145",
                "Федеральный округ": "Сибирский",
                "Население": "28528"
            }
        },
        {
            id: uuid(),
            showRout: false,
            startPoint: {
                "Индекс": "143401",
                "Тип региона": "обл",
                "Регион": "Московская",
                "Тип района": "р-н",
                "Район": "Красногорский",
                "Тип города": "г",
                "Город": "Красногорск",
                "Тип н/п": "",
                "Н/п": "",
                "Код КЛАДР": "5001300100000",
                "Код ФИАС": "63fcf18a-365e-451f-baee-8d09ac50b773",
                "Уровень по ФИАС": "4: город",
                "Признак центра района или региона": "1",
                "Код ОКАТО": "46223501000",
                "Код ОКТМО": "46623101001",
                "Код ИФНС": "5024",
                "Часовой пояс": "UTC+3",
                "Широта": "55.8318475",
                "Долгота": "37.32942",
                "Федеральный округ": "Центральный",
                "Население": "116738"
            },
            endPoint: {
                "Индекс": "141321",
                "Тип региона": "обл",
                "Регион": "Московская",
                "Тип района": "р-н",
                "Район": "Сергиево-Посадский",
                "Тип города": "г",
                "Город": "Краснозаводск",
                "Тип н/п": "",
                "Н/п": "",
                "Код КЛАДР": "5003000200000",
                "Код ФИАС": "6bec0be0-e5a7-4bf1-907a-9a1dadedc867",
                "Уровень по ФИАС": "4: город",
                "Признак центра района или региона": "0",
                "Код ОКАТО": "46215503000",
                "Код ОКТМО": "46615103001",
                "Код ИФНС": "5042",
                "Часовой пояс": "UTC+3",
                "Широта": "56.4408723",
                "Долгота": "38.2320671",
                "Федеральный округ": "Центральный",
                "Население": "13432"
            }

        },
        {
            id: uuid(),
            showRout: false,
            startPoint: {
                "Индекс": "618601",
                "Тип региона": "край",
                "Регион": "Пермский",
                "Тип района": "р-н",
                "Район": "Чердынский",
                "Тип города": "г",
                "Город": "Чердынь",
                "Тип н/п": "",
                "Н/п": "",
                "Код КЛАДР": "5902700100000",
                "Код ФИАС": "242133ad-1c0f-43f0-9865-7b5f914a778f",
                "Уровень по ФИАС": "4: город",
                "Признак центра района или региона": "1",
                "Код ОКАТО": "57256501000",
                "Код ОКТМО": "57656101001",
                "Код ИФНС": "5919",
                "Часовой пояс": "UTC+5",
                "Широта": "60.4011184",
                "Долгота": "56.4801391",
                "Федеральный округ": "Приволжский",
                "Население": "4920"
            },
            endPoint: {
                "Индекс": "617830",
                "Тип региона": "край",
                "Регион": "Пермский",
                "Тип района": "р-н",
                "Район": "Чернушинский",
                "Тип города": "г",
                "Город": "Чернушка",
                "Тип н/п": "",
                "Н/п": "",
                "Код КЛАДР": "5902800100000",
                "Код ФИАС": "c3a35399-c5ea-4f12-bf34-c2cc21e1cc60",
                "Уровень по ФИАС": "4: город",
                "Признак центра района или региона": "1",
                "Код ОКАТО": "57257501000",
                "Код ОКТМО": "57657101001",
                "Код ИФНС": "5957",
                "Часовой пояс": "UTC+5",
                "Широта": "56.5161079",
                "Долгота": "56.0763919",
                "Федеральный округ": "Приволжский",
                "Население": "33275"
            }
        }
    ]
}

export const appReducer = (state = appInitState, action) => {
    switch (action.type) {
        case SET_START_POINT: {
            let {id, point} = action.payload
            return {...state, orders: state.orders.map(or => or.id === id ? {...or, startPoint: point} : {...or})}
        }
        case SET_END_POINT: {
            let {id, point} = action.payload
            return {...state, orders: state.orders.map(or => or.id === id ? {...or, endPoint: point} : {...or})}
        }
        default: return {...state}
    }

}