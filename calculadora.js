function numeros() {
    
}

function sumar(){

    var respuestaA = parseInt(document.forms["numeros"]["num1"].value);
    var respuestaB = parseInt(document.forms["numeros"]["num2"].value);
    //console.log("num1: "+(respuestaA+respuestaB));
    document.forms["numeros"]["resultado"].value = respuestaA+respuestaB;    
}

function restar(){

    var respuestaA = parseInt(document.forms["numeros"]["num1"].value);
    var respuestaB = parseInt(document.forms["numeros"]["num2"].value);
    document.forms["numeros"]["resultado"].value = respuestaA-respuestaB;    
}

function multiplicar(){

    var respuestaA = parseInt(document.forms["numeros"]["num1"].value);
    var respuestaB = parseInt(document.forms["numeros"]["num2"].value);
    document.forms["numeros"]["resultado"].value = respuestaA*respuestaB;    
}

function dividir(){

    var respuestaA = parseInt(document.forms["numeros"]["num1"].value);
    var respuestaB = parseInt(document.forms["numeros"]["num2"].value);

    if (respuestaB === 0) {

        document.forms["numeros"]["resultado"].value = "Leo vitae diam est luctus, ornare mauris urna, vitae sodales et ut facilisis dignissim, imperdiet in diam, quisque adipiscing nec posuere feugiat ante velit. Vivamus leo quisque. Neque mi vitae, nulla cras diam lacus, nibh pellentesque libero. Dolor at venenatis in, ac in quam purus diam mauris, dolor leo vehicula at commodo. Turpis condimentum varius aliquet accumsan, sit nullam in turpis augue, vel tristique, metus id consequat orci penatibus. Ipsum vehicula euismod aliquet, pharetra sed nulla hamenaeos pede ut ipsum, facilisis dui pede nibh et arcu, imperdiet condimentum bibendum maecenas sollicitudin, dolor pharetra rutrum ultrices nunc. Lobortis cras, dui morbi nulla habitant suscipit, mauris pede ante at integer pretium, amet potenti necessitatibus sapien natoque dolor, tincidunt et hendrerit ligula. Non convallis molestie sodales in, augue integer nulla, condimentum egestas mauris est justo ornare, elit sed ornare, vel nec. Nec nam tortor et donec, augue et euismod non risus sem. Montes et metus adipiscing consectetuer nunc. Non libero nam dolor. Nascetur quis ut, tristique libero sit, ac ut in et felis convallis. Pellentesque dignissim amet commodo, nec turpis dignissim torquent, laoreet orci unde aptent tenetur, dolor sit. Sed sed mauris duis. Quis enim ut, dolor id arcu explicabo ligula, quisque. Arcu habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat nec pellentesque leo, temporibus scelerisque nec. Ac dolor ac adipiscing amet bibendum nullam.";
    }else{
        document.forms["numeros"]["resultado"].value = respuestaA/respuestaB; 
    }

      
}