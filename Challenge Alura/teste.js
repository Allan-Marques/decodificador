<meta charset="UTF-8">
<script>

    // funções pulaLinha, mostra e sorteia omitidas

    var numeroPensado = sorteia();

    var chute = parseInt(prompt("Já pensei. Qual você acha que é?"));

    if(chute == numeroPensado) {

        mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
    } else {

        var contador = 1;

        while( contador <= 10 ) {

            mostra("Já era, você errou!");
            contador = contador + 1;
        }

    }
</script>