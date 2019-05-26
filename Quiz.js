const solution = (N, users) => {
    let answer = [];
    let total = users.length
    let obj_user = {}
    let result = {}


    users.map(item => {
        if(obj_user[item]){
            obj_user = {
                ...obj_user,
                [item]: obj_user[item] + 1
            }
        }else {
            obj_user = {
                ...obj_user,
                [item] : 1
            }
        }
    })

    

    for( let i = 1; i <= N; i++ ){
        let percentage

        if(obj_user[i] === undefined){
            percentage = 0
            total += 0
        }else {
            percentage = obj_user[i] / total
            total -= obj_user[i]
        }
        
        result = { 
            ...result,
            [i]: percentage
        }

        if(answer.length === 0){
            answer.push(i)

        }else if(percentage === result[i-1]){ //if value is same, must compare to another value in the array

            for(let j = 0; j < answer.length; j++){

                if(j === answer.length -1 && percentage <= result[answer[j]]){  //checking if the end number value still lower than the lastest array
                    answer.push(i)

                }else if(percentage > result[answer[j]]){ //finding the value lower than the current value to insert in the array
                    answer.splice(j,0,i)
                    break;
                }
            }
        }else if(percentage > result[i-1]){ // simply checking if the 1st array lower than the current value then just simply push in the 1st
            answer.unshift(i)

        }else if(percentage < result[i-1]){

            for(let k = answer.length -1;  k >= 0; k-- ){ //reverse loop, checking from behind

                if(percentage < result[answer[k]]){
                    answer.splice(k + 1, 0, i)
                    break;
                }

            }
            answer.push(i)
        }

    }

    return answer
}

const run = solution(5, [2,1,2,6,2,4,3,3])
const run2 = solution(4, [4,4,4,4,4])

console.log(run)
console.log(run2)
