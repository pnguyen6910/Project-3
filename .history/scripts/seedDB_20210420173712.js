const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mapPoints");

const pointsSeed = [
    {
        position: {
            lat: 44.128151,
            lng: -103.215202,
            zoom: 13
        },
        popup:
            "Soldier Field <br /> The Chicago Bears play here."
    },
    {
        position: {
            lat: 41.879084073159994,
            lng: -87.63592563158475,
            zoom: 13
        },
        popup:
            "Willis Tower <br /> We all really know it's the Sears Tower!"
    },
    {
        position: {
            lat: 41.8796,
            lng: -87.6237,
            zoom: 13
        },
        popup:
            "Art Institue of Chicago <br /> Vits brevism Ars longa."
    },
    {
        position: {
            lat: 41.8827,
            lng: -87.6233,
            zoom: 13
        },
        popup:
            "Cloud Gate <br /> Otherwise known as The Bean."
    },
    {
        position: {
            lat: 41.8919,
            lng: -87.6051,
            zoom: 13
        },
        popup:
            "Navy Pier <br /> Popular Tourist attraction. Go ride the Ferris Wheel!"
    },
    {
        position: {
            lat: 41.8380992726567,
            lng: -87.65110138119557,
            zoom: 13
        },
        popup:
            "Maria's Packaged Goods and Community Bar <br /> Best bar in Bridgeport. Tell 'em Ryan sent you."
    },
    {
        position: {
            lat: 41.9663,
            lng: -87.6372,
            zoom: 13
        },
        popup:
            "Montrose Beach <br /> They've got the best dog park in the Nation."
    },
    {
        position: {
            lat: 41.9484,
            lng: -87.6553,
            zoom: 13
        },
        popup:
            "Wrigley Field <br /> Home of the Chicago Cubs, holy cow!"
    },
    {
        position: {
            lat: 41.922248064306004,
            lng: -87.63356184754218,
            zoom: 13
        },
        popup:
            "Lincoln Park Zoo <br /> Come see some animals."
    },
    {
        position: {
            lat: 41.97933649765679,
            lng: -87.64982506368884,
            zoom: 13
        },
        popup: "Foster Beach <br /> Have some fun in the sun."
    },
    {
        position: {
            lat: 41.795976907272824,
            lng: -87.57479364081703,
            zoom: 13
        },
        popup: "Museum of Science and Industry <br /> Visit Sue when you're there, or see the U505.  The Omnimax is pretty cool too."
    },
    {
        position: {
            lat: 41.91813486644659,
            lng: -87.62737811671859,
            zoom: 13
        },
        popup: "North Avenue Beach <br /> Another nice Chicago beach."
    },
    {
        position: {
            lat: 41.98420770046654,
            lng: -87.70643776164125,
            zoom: 13
        },
        popup: "Legion Park <br /> A hub on the North Shore Channel Trail."
    },
    {
        position: {
            lat: 42.037531116813724,
            lng: -87.7104209976362,
            zoom: 13
        },
        popup: "Sculpture Park <br /> A park with some interesting sculptures.  They change them up every once in a while"
    },
    {
        position: {
            lat: 42.15128810190887,
            lng: -87.78428644734801,
            zoom: 13
        },
        popup: "Chicago Botanic Garden <br /> A beautiful destination for spending a day."
    },
    {
        position: {
            lat: 41.913908941901596,
            lng: -87.72013180311839,
            zoom: 13
        },
        popup: "The 606 <br /> An awesome bike path."
    },
    {
        position: {
            lat: 41.960048567172,
            lng: -87.63641595840454,
            zoom: 13
        },
        popup: "Montrose Harbor <br /> A place where people parks their boats, more known for people just hanging out at the harbor."
    },
    {
        position: {
            lat: 41.97320506184882,
            lng: -87.65694558620451,
            zoom: 13
        },
        popup: "John Vietnam Nguyen Mural <br /> A mural created by the community of Little Vietnam in memory of JVN."
    },
    {
        position: {
            lat: 41.9643007434533,
            lng: -87.64208078384398,
            zoom: 13
        },
        popup: "Cricket Hill <br /> A big ol' hill! People come out here to hang out during the summer and sledding during the winter."
    },
    {
        position: {
            lat: 41.97300565065028,
            lng: -87.65779316425322,
            zoom: 13
        },
        popup: "Generations <br /> A mural that shows the history of the Uptown neighborhood."
    },
    {
        position: {
            lat: 41.94057109115219,
            lng: -87.65403002500534,
            zoom: 13
        },
        popup: "Vape312 Sheffield <br /> Chicago's number 1 vape store."
    },
    {
        position: {
            lat: 41.92114554032679,
            lng: -87.69518584012985,
            zoom: 13
        },
        popup: "Greetings from Chicago Mural <br /> One of the must see murals in Chicago."
    },
    {
        position: {
            lat: 41.9181793059036,
            lng: -87.68958806991577,
            zoom: 13
        },
        popup: "Robin Williams Mural <br /> A mural dedicated to everyone's favorite funny man."
    },
    {
        position: {
            lat: 41.910297034306474,
            lng: -87.66963645815848,
            zoom: 13
        },
        popup: "Vivian Maier <br /> A beautiful mural in Wicker Park."
    },
    {
        position: {
            lat: 41.89423482650941,
            lng: -87.62371234595776,
            zoom: 13
        },
        popup: "Marilyn Monroe <br /> A beautiful mural of Marilyn Monroe right on Michigan Ave."
    },
    {
        position: {
            lat: 41.87541129817996,
            lng: -87.62620076537132,
            zoom: 13
        },
        popup: "Moose Bubblegum <br /> A mural outside of Columbia College."
    },
    {
        position: {
            lat: 41.86938256321454,
            lng: -87.62459814548492,
            zoom: 13
        },
        popup: "From Bloom To Doom <br /> You like flowers? You like birds? This is definitely the mural for you."
    },
    {
        position: {
            lat: 41.86940053941659,
            lng: -87.64685511589049,
            zoom: 13
        },
        popup: "Piccolo Sogno <br /> A mural from Eric Skotnes on a blank wall on Piccolo Sogno."
    },
    {
        position: {
            lat: 41.87435928144423,
            lng: -87.64992758631706,
            zoom: 13
        },
        popup: "Riverfront Roots <br /> An abstract mural on the side of a bridge."
    },
    {
        position: {
            lat: 41.859669681596586,
            lng: -87.64676660299301,
            zoom: 13
        },
        popup: "What I Am <br /> A mural on the corner of State an 16th st in South Loop."
    },
    {
        position: {
            lat: 41.858729276466995,
            lng: -87.63287544250487,
            zoom: 13
        },
        popup: "Blue & White Flowers <br /> A mural in Chcago's china town."
    },
    {
        position: {
            lat: 41.84035339301721,
            lng: -87.7185096591711,
            zoom: 13
        },
        popup: "Las Flores de las Almas Muetras <br /> A beautiful mural in Little Village."
    },
    {
        position: {
            lat: 41.897198180689045,
            lng: -87.6216048002243,
            zoom: 13
        },
        popup: "Museum Of Contemporary Art Chicago <br /> A must visit museum in Chicago."
    },
    {
        position: {
            lat: 41.88149388218225,
            lng: -87.62373179197311,
            zoom: 13
        },
        popup: "Crown Fountain <br /> A fountain with faces on it."
    },
    {
        position: {
            lat: 41.87581222833499,
            lng: -87.61889040470123,
            zoom: 13
        },
        popup: "Buckingham Fountain <br /> A big ol' fountain. It's beautiful to watch at night."
    }
];

const userSeed = {
    username: 'admin',
}

const runSeeder = async () => {
    try {
        await db.User.remove({})
        await db.Map.remove({})
        const result = await db.Map.insertMany(pointsSeed, { raw: true })
        console.log(result)
        console.log(position)
        const mapIds = result.map(point => point._id)
        const finalUserData = {
            ...userSeed,
            points: mapIds
        }
        const user = await db.User.create(finalUserData)
        await db.Map.update({}, { user: user._id })
    } catch (err) {
        throw err
    }
    process.exit()
}

runSeeder()