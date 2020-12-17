use musiclist;
db.dropdatabase();

db.songs.insertMany([
    {
        title: "Harrisong",
        songData: ["e", "h", "l", "r", "y", "h"],
        comment: "Spicy",
        thumbnail: ""
    },
    {
        title: "Ode to a salmon",
        songData: ["b", "z", "b", "z", "n", "n", "b", "n", "b", "z"],
        comment: "Lovely",
        thumbnail: ""
    },
    {
        title:"Christmas",
        songData: ["a", "f", "f", "g", "f", "d", "s", "s","s", "f", "g", "g", "h", "g", "f", "d", "a", "a","h", "h", "u", "h", "g", "f", "s", "a", "a", "s", "h", "g", "d", "f"],
        comment: "Christmas Carols",
        thumbnail: ""
    }
])