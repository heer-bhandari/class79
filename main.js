heer = [];
function give_submit(){
    var heer1 = document.getElementById("student1").value;
    var heer2 = document.getElementById("student2").value;
    var heer3 = document.getElementById("student3").value;
    var heer4 = document.getElementById("student4").value;

    heer.push(heer1);
    heer.push(heer2);
    heer.push(heer3);
    heer.push(heer4);

    console.log(heer);
    document.getElementById("aladin").innerHTML=heer;
    document.getElementById("submit1").style.display = "none"; 
    document.getElementById("sort2").style.display = "inline-block";
}
function give_sort(){
    heer.sort();
    console.log(heer);
    document.getElementById("aladin").innerHTML=heer;
}