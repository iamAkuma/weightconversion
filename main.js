document.getElementById('output').style.visibility = 'hidden';
        document.getElementById('statusOutput').style.visibility = 'hidden';
        document.getElementById('kgInput').addEventListener('input', function(e) {
            document.getElementById('output').style.visibility = 'visible';
            document.getElementById('statusOutput').style.visibility = 'visible';
            let kg = e.target.value;
            document.getElementById('gramsOutput').innerHTML = kg*1000;
            document.getElementById('poundsOutput').innerHTML = kg* 2.20462;
            document.getElementById('ouncesOutput').innerHTML = kg*35.274;

            if (kg > 80) {
                document.getElementById('statusOutput').innerHTML = '<h3>FATSO, GO THE GYM!</h3>';
                document.getElementById('statusOutput').className = 'text-white bg-danger';
            } else if (kg < 50) {
                document.getElementById('statusOutput').innerHTML = '<h3>BRUH, EAT SOME FOOD!</h3>';
                document.getElementById('statusOutput').className = 'text-dark bg-danger';
            } else {
                document.getElementById('statusOutput').innerHTML = '';
                document.getElementById('statusOutput').className = '';
            }
        })