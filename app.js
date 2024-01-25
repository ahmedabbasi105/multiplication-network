const p = prompt("Tell Me Your Percentage")

if (p<= 50) {
    document.write("Your are Pass.")

} else if(p<= 60){
    document.write("Grade B")

}else if(p<= 70){
    document.write("Grade A")

}else if(p<= 80){
    document.write("Grade A-1")

}else{
    document.write("Please Input the correct data")
}

const b = prompt ("Enter The Table Value...")
for (let i = b; i <= 20; i++)
{
    for(let c = 1; c <= 10; c++)
    {
        result =c*i 
        document.write(`${i} x ${c} = ${result} <br>`)
    }
    document.write("<br>")
}


