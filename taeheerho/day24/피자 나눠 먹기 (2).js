//todo 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.


//! 3번정도 런타임 실패
// 왜 인지 모르겠음..
function solution(n) {
    for(let i = 0; i < 100; i += 6){
        if(i !== 0 && i % n === 0){
            return i / 6
            break;
        }
    }
}


// for 문 번위가 너무 작았음
function solution(n) {
    for(let i = 0; i < n * 100; i += 6){
        if(i !== 0 && i % n === 0){
            return i / 6
            break;
        }
    }
}