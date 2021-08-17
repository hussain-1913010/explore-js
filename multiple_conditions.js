//&& dara duita condition er duita e fulfill korte hobe noile if else statement er moddhe code jabei na .jehetu ekhane job paise ..thik ase ..but taka 20000 er kom ...tar code if er moddhe execute hobe na.....
var jobPaiso=true;
var tkJomaiso=5000;
if(jobPaiso==true && tkJomaiso>20000){
    console.log("aso patri khuji");
}
else{
    console.log("tor kopale biya nai");
}
//&& dara duita condition er duita e fulfill korte hobe noile if else statement er moddhe code jabei na .jehetu ekhane job paise ..thik ase .and ekhane taka 20000 er beshi  ...tar code if er moddhe execute hobe....
// nb && eke and operator bole
var jobPaiso=true;
var tkJomaiso=50000;
if(jobPaiso==true && tkJomaiso>20000){
    console.log("aso patri khuji");
}
else{
    console.log("tor kopale biya nai");
}
// or operator || dara duita condition er jekono ekta fulfill korlei hobe tahole if else statement er moddhe code jabe . jehetu ekhane job paise ..thik ase ..but taka 20000 er kom ...tapor o  code if er moddhe execute hobe.....
var jobPaiso=true;
var tkJomaiso=5000;
if(jobPaiso==true || tkJomaiso>20000){
    console.log("aso patri khuji");
}
else{
    console.log("tor kopale biya nai");
}
// or operator || dara duita condition er jekono ekta fulfill korlei hobe tahole if else statement er moddhe code jabe . jehetu ekhane job o pai ni  ..thik ase ..but taka o 20000 er kom ...tai  code if er moddhe execute hobe ns...
var jobPaiso=false;
var tkJomaiso=5000;
if(jobPaiso==true || tkJomaiso>20000){
    console.log("aso patri khuji");
}
else{
    console.log("tor kopale biya nai");
}
// if else er sathe else if ........er mane if condition e bolse job o paite hobe ...taka o 20000 er upore thakte hobe ...taile patri khujbo...if condition duita e fulfill korar ktha ..kintu ekta korse tai code else e jabar ktha ..tobe else if e bolse job paise ...tailei cholbe .......tai code ekhanei theme geche r niche jay ni....jodi else if  o false hoye jeto ...tiale code direct else e jeto
var jobPaiso=true;
var tkJomaiso=5000;
if(jobPaiso==true && tkJomaiso>20000){
    console.log("aso patri khuji");
}
else if(jobPaiso==true){
    console.log("taka jomate thak biye ekdin hobei");
}
else{
    console.log("tor kopale biya nai");
}