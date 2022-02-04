var map = new Map;

map.set("Luiz", "admin");
map.set("Isaque", "root");
map.set("João", "guest");

function getAdmins(map){
    for (let value of map) {
        console.log(value);
    }
}