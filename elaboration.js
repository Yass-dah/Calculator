        var r = Math.pow(10, Number(document.getElementById('rng').value));
        var end = false;
        function roundresult(){
            el = document.getElementById('dec');
            r = el.textContent = document.getElementById('rng').value;
            r = Math.pow(10, r);
            if(end) 
                display(res);
        }

        function display(num){
            document.getElementById('output').value = Math.round(num*r)/r;
            res = num;
        }

        function addition(num){
            if(end){
                end = false;
                display(num);
            }
            else
                display(document.getElementById('output').value * 10 + num);
        }

        function operate(sign){
            x = document.getElementById('output').value;
            op = sign;
            display(0);
        }

        function eval(){
            switch(op){
                case '/': 
                    display(x/document.getElementById('output').value);
                    break;
                case 'x':
                    display(x*document.getElementById('output').value);
                    break;
                case '-':
                    display(x-document.getElementById('output').value);
                    break;
                case '+':
                    display((Number(x)+Number(document.getElementById('output').value)));
                    break;
                default: break;
            }
            end = true;
        }
        
        var numbers = '<button type="submit" class="button eq is-size-3 is-white is-8" onclick="eval()">=</button>';
        numbers += '<button class="button is-size-3 is-white is-4" onclick="addition(0)">0</button>';
        el = document.getElementById("nums");
        for(i = 1; i <= 9; i++){
            numbers = '<button class="button is-size-3 is-white is-4" onclick="addition(' + i + ')">' + i + '</button>' + numbers;
            if(i%3 == 0 && i != 9) numbers = '<br>' + numbers; 
        }
        el.innerHTML = numbers;
        roundResult();