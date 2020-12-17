use musiclist;
db.dropdatabase();

db.songs.insertMany([
    {
        title: "Harrisong",
        songData: ["a", "s", "d", "f", "g"],
        comment: "Spic",
        thumbnail: ""
    },
    {
        title: "Ode to a salmon",
        songData: ["g", "a", "a", "s", "d"],
        comment: "Lovely",
        thumbnail: ""
    }
])