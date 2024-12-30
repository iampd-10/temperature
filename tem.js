function calculate(){
    let a = document.getElementById("input").value;
    if (a === "" || (isNaN(a)) ) {
        alert("Invalid input");
        
    } else {
        let aNumber = parseFloat(a);
        let ans = aNumber * (9/5) + 32;
        document.getElementById("ans").innerHTML = "Fehrenheit is " + ans.toFixed(2);
        
    }
    document.getElementById("input").value = ""
}