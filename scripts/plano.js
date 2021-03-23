$(document).ready(function(){
    var planoCalculo = function(){
        (function(){

            /**
             * Ajuste decimal de um número.
             *
             * @param	{String}	type	O tipo de arredondamento.
             * @param	{Number}	value	O número a arredondar.
             * @param	{Integer}	exp		O expoente (o logaritmo decimal da base pretendida).
             * @returns	{Number}			O valor depois de ajustado.
             */
            function decimalAdjust(type, value, exp) {
                // Se exp é indefinido ou zero...
                if (typeof exp === 'undefined' || +exp === 0) {
                    return Math[type](value);
                }
                value = +value;
                exp = +exp;
                // Se o valor não é um número ou o exp não é inteiro...
                if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
                    return NaN;
                }
                // Transformando para string
                value = value.toString().split('e');
                value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
                // Transformando de volta
                value = value.toString().split('e');
                return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
            }
        
            // Arredondamento decimal
            if (!Math.round10) {
                Math.round10 = function(value, exp) {
                    return decimalAdjust('round', value, exp);
                };
            }
            // Decimal arredondado para baixo
            if (!Math.floor10) {
                Math.floor10 = function(value, exp) {
                    return decimalAdjust('floor', value, exp);
                };
            }
            // Decimal arredondado para cima
            if (!Math.ceil10) {
                Math.ceil10 = function(value, exp) {
                    return decimalAdjust('ceil', value, exp);
                };
            }
        
        })();
        var $ref_alterada = [
            30,
            4,
            0,
            165,
            21,
            18,
            3.0,
            3.0,
            76,
            8,
            8,
            8,
            7,
            4,
            0,
            0,
            0
        ];
        var $valorEnfer = [
            170.95,
            213.69,
            256.42,
            307.70,
            338.47,
            372.33,
            409.56,
            470.99,
            588.73,
            883.10
        ];
        var $valorApart = [
            208.33,
            260.41,
            312.49,
            374.99,
            412.47,
            453.74,
            499.12,
            573.98,
            717.48,
            1076.21
        ];
        var $valorAddApart = [
            37.38,
            46.72,
            56.07,
            67.29,
            74.02,
            81.41,
            89.56,
            102.99,
            128.75,
            193.11
        ];

        var $inputSalario = document.querySelector("input");
        
        var $btnCalculoPlano = document.querySelector("button");

        var $selectAcomodacao = document.querySelector("select");

        var $aparAdd = document.querySelector("div.aparAdd");

        var $resultado = document.querySelector("div.resultado");
 
        var $nodeListInputBeneficiarios = Array.from(document.querySelectorAll(".numBeneciario"));

        console.log($inputSalario.value + " ---> " + calcuraSalario());
        
       

        function calcuraSalario() {

            
            var $valor = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            $provDireitos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            $valor[0] = 0;
            $provDireitos[0] = parseFloat($inputSalario.value);



            $valor[1] = 0;
            $provDireitos[1] = parseFloat($inputSalario.value * ($ref_alterada[1] / 100.0));
        
        
            $valor[2] = 0;
            $provDireitos[2] = 0;


            $valor[3] = ((parseFloat($inputSalario.value) + $provDireitos[1]) / 180) * 0.4;
            $provDireitos[3] = $valor[3] * $ref_alterada[3];
  

            $valor[4] = ((parseFloat($inputSalario.value) + $provDireitos[1]) / 180) * 1.5;
            $provDireitos[4] = $valor[4] * $ref_alterada[4];


            $valor[8] = (parseFloat($inputSalario.value) + $provDireitos[1]) / 180 * 0.5;
            $provDireitos[8] = $valor[8] * $ref_alterada[8];

            $valor[5] = ((parseFloat($inputSalario.value) + $provDireitos[1] + $provDireitos[8]) / 180.0) * 1.5;
            $provDireitos[5] = $valor[5] * $ref_alterada[5];


            $valor[6] = ((parseFloat($inputSalario.value) + $provDireitos[1])) / 180 * 2.0;
            $provDireitos[6] = $valor[6] * $ref_alterada[6];


            $valor[7] = ((parseFloat($inputSalario.value) + $provDireitos[1] + $provDireitos[8]) / 180.0) * 2.0;
            $provDireitos[7] = $valor[7] * $ref_alterada[7];

            $valor[9] = ((parseFloat($inputSalario.value) + $provDireitos[1]) / 180) * 2.0;
            $provDireitos[9] = $valor[9] * $ref_alterada[9];

            $valor[10] = ((parseFloat($inputSalario.value) + $provDireitos[1] + $provDireitos[8]) / 180) * 2.0;;
            $provDireitos[10] = $valor[10] * $ref_alterada[10];

            $valor[11] = $valor[9];
            $provDireitos[11] = $valor[11] * $ref_alterada[11];

            $valor[12] = ((parseFloat($inputSalario.value) + $provDireitos[1] + $provDireitos[8]) / 180) * 2.0;
            $provDireitos[12] = $valor[12] * $ref_alterada[12];

            var x = $provDireitos[4] + $provDireitos[5] + $provDireitos[6] + $provDireitos[7];
            x = x + $provDireitos[9] + $provDireitos[10] + $provDireitos[11] + $provDireitos[12];

            $valor[13] = 0;
            $provDireitos[13] = x / ($ref_alterada[0] - $ref_alterada[13]) * $ref_alterada[13];

            $valor[14] = 0;
            $provDireitos[14] = ($provDireitos[3] / ($ref_alterada[0] - $ref_alterada[13])) * $ref_alterada[13];

            $valor[15] = 0;
            $provDireitos[15] = ($provDireitos[8] / ($ref_alterada[0] - $ref_alterada[13])) * $ref_alterada[13];

            $valor[16] = 0;
            $provDireitos[16] = 0;


            $valor[17] = 0;

            var temp = 0;
            for (i = 0; i < $provDireitos.length - 1; i++) {
                temp = temp + $provDireitos[i];
            }

            return Math.round10(temp, -2);

        }
        function contaBeneficiario(){
            var cont = 0;
            for(i=0; i < $nodeListInputBeneficiarios.length ; i++){
                if ($nodeListInputBeneficiarios[i] !=0){
                    cont++;
                }
            }
            return cont-1;
        }
        function mostrarResultado(valorPlano){
            var pt = 0.06, pd = 0.02;
            var proSind =  Math.round10(valorPlano -(valorPlano - (valorPlano*(pd*contaBeneficiario())+pt)),-2);
        
            var pt1 = 0.08, pd1 = 0.035;
            var proCDP = Math.round10(valorPlano -(valorPlano - (valorPlano*(pd1*contaBeneficiario())+pt1)),2);

            $resultado.innerHTML = "";
            $resultado.innerHTML =
                "<div class='card'>"+
                "<h5 class='card-header'>Preços</h5>"+
                "<div class='card-body'>"+
                "<table class='table table-bordered'>"+

                '<tbody>'+
                '<tbody>'+
                    '<tr>'+
                        '<td>Mensalidade do Plano</td>'+
                        '<td>'+valorPlano+'</td>'+
                        '<td>Titular / Dependente </td>'+
                    '</tr>'+
                    '<tr>'+
                    '    <td>Proposto pela Sindicato</td>'+
                        '<td>'+proSind+'</td>'+
                        '<td>'+pt*100+'%        '+pd*100+'%'+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '    <td>Proposto pela CDP</td>'+
                        '<td>'+proCDP+'</td>'+
                        '<td>'+pt1*100+'%       '+Math.round(pd1*100,-2)+'%'+'</td>'+
                    '</tr>'+
                   
                '</tbody>'+
                '</table>'+
                '</div>'+
                '</div>';
        }
        function bindEvents(){

           $selectAcomodacao.onchange = function(){
                $resultado.innerHTML = "";
                switch ($selectAcomodacao.options[$selectAcomodacao.selectedIndex].value) {
                    case "0":
                        $aparAdd.innerHTML = "";
                        break;
                    case "1":
                        $aparAdd.innerHTML = "";
                        break;
                    case "2":
                        $aparAdd.innerHTML = "";
                        $aparAdd.innerHTML = "<label>Possiu Apartamento Adicional ?</label>" +
                            "<div class='form-check' >"+
                                "<input class=form-check-input type='radio' name='flexRadioDefault' id='flexRadioDefault1'>"+
                                "<label class='form-check-label' for='flexRadioDefault1'>Sim</label>"+
                              "</div>"+
                              "<div class='form-check'>"+
                                "<input class=form-check-input type='radio' name='flexRadioDefault' id='flexRadioDefault2' checked>"+
                                "<label class='form-check-label' for='flexRadioDefault2'>Não</label>"+
                            "</div>";
                        break;
                    default:
                        alert("Selecione o tipo de acomodação!");
                }
            }; 
            
            
            $btnCalculoPlano.onclick = function(){
                $resultado.innerHTML = "";
                switch ($selectAcomodacao.options[$selectAcomodacao.selectedIndex].value) {
                    case "1":
                     

                        var temp = 0;
                        for (i = 0;i<$nodeListInputBeneficiarios.length;i++){
                          
                            temp = temp + ($nodeListInputBeneficiarios[i].value * $valorEnfer[i]);
                        }
                        console.log(temp); 
                        mostrarResultado(Math.round10(temp,-2));  
                        

                    break;
                    case "2":
                       
                        var $nodeListRadioApartamentAdd = Array.from(document.querySelectorAll(".form-check-input"));                        
                       
                        if($nodeListRadioApartamentAdd[0].checked == true && $nodeListRadioApartamentAdd[1].checked == false){
                           
                                var temp = 0;
                                for (i = 0;i < $nodeListInputBeneficiarios.length; i++){
                                   
                                    if ($nodeListInputBeneficiarios[i].value == 0){
                                        temp = temp + ($nodeListInputBeneficiarios[i].value * $valorApart[i] );
                                       
                                    }
                                    else{
                                        temp = temp + ($nodeListInputBeneficiarios[i].value * $valorApart[i] ) + $valorAddApart[i];
                                    }
                                                                        
                                }
                                console.log(temp);
                                mostrarResultado(Math.round10(temp,-2));  
                        }else{
                            if($nodeListRadioApartamentAdd[0].checked == false && $nodeListRadioApartamentAdd[1].checked == true){
                               
                                    var temp = 0;
                                    for (i = 0;i<$nodeListInputBeneficiarios.length;i++){
                                      
                                        temp = temp + ($nodeListInputBeneficiarios[i].value * $valorApart[i]);
                                    } 
                                    console.log(temp); 
                                    mostrarResultado(Math.round10(temp,-2));  
                            }
                             
                        }
                        
                        
                        break;
                    default:
                        alert("Selecione o tipo de acomodação!");
                }
            };
        }    
        bindEvents();

    };
    planoCalculo();
});
