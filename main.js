
        /* 버튼을 클릭 했을 때, 웹 페이지의 숫자를 카운팅하는 프로그램을 구현하라.

        1. increase라는 함수를 선언하고 버튼을 눌렀을 때 해당 함수가 호출되는지 확인하라.
            > console : "increase function called"
        2. decrease라는 함수를 선언하고 버튼을 눌렀을 때 해당 함수가 호출되는지 확인하라.
            > console : "decrease function called"

            * 이 때 선언되는 함수는 화살표함수로 선언한다.

        3. "0" 이라는 숫자요소를 문서에서 가져와 (num이 id인 것을 가져온다.) 변수 num에 저장한다.
        4. increase라는 버튼을 누르면 0이 하나씩 증가하고
           decrease라는 버튼을 누르면 0이 하나씩 감소하도록 한다.
        
        5. 이 때, decrease 버튼을 누르더라도 음수로 가지는 않는다.

        */

        /* 왜 const 함수로 선언하는가?
            : 호이스팅 방지를 위해 let / const 라는 호이스팅 방지용 변수가 등장함
             let func ... > 호이스팅 방지 But let 함수는 재할당이 가능함
             const func ... > const 함수는 재할당이 어려움.
        */

        const increase = () => {
            let Idnum = document.getElementById('num');

            Idnum.innerText ++;
            
            console.log(parseInt(Idnum.innerText));
            console.log("increase function called");
        }
        const decrease = () => {
            let Idnum = document.getElementById('num');

            if(Idnum.innerText > 0){
                Idnum.innerText --;
            }
            else{
                Idnum.innerText = 0;
            } 
            console.log("decrease function called");
            console.log(parseInt(Idnum.innerText));
        }


         
        // const increase = () => {
        //     console.log("increase function called.");

        //     let num = document.getElementById('num'); 
        //     console.log(parseInt(num.innerText));

        //     num.innerText = parseInt(num.innerText)++;
        // }
        // const decrease = () => {
        //     console.log("decrease function calles");
        //     let num = document.getElementById('num');
        //     num.innerText = parseInt(num.innerText)--;
        // }

            /* 선생님 풀이

            // case 1. 삼항연산자
            num.innerText = parseInt(num.innerText) > 0? parseInt(num.innerText) - 1 : 0

            // case 2. 단순 if문
            if(parseInt(num.innerText) > 0){
                num.innerText = parseInt(num.innerText) - 1;
            }
        }
        */ 
