const Students = [
    {id: 21, name: 'ariyan'},
    {id: 22, name: 'rehman'},
    {id: 23, name: 'razon'},
    {id: 25, name: 'mohammad'},
];



let arr = [];
for(var i = 0; i<Students.length; i++){
    
    var element = Students[i];
    var property = element.name;
    arr.push(property);
}
console.log(arr);

// const names = Students.map(s => s.name);
// const iDs = Students.map(s => s.id);
// const bigger = Students.filter(s=> s.id>22);
// const bigger2 = Students.find(s=> s.id>22);
// console.log(iDs, names, bigger);