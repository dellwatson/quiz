const solution = (N, users) => {
    let answer = [];
    let total = users.length
    let obj_user = {}
    let result = {}
    let arr = []

    if(N > 500 || N < 0 || users.length > 200000 ){
        return "Total stages or users is invalid"
    }

    //finding the total users in each stage
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

    //finding the failure rates
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

    }

    //pushing object to array for easier sorting
    for( let item in result ){
        arr.push({
            stage: item,
            rate: result[item]
        })
    }

    const sorted = arr.sort((a,b) => b.rate - a.rate )
    sorted.map(item => answer.push(item.stage))

    return answer
}

const run = solution(50000, [2,1,2,6,2,4,3,3])
const run2 = solution(4, [4,4,4,4,4])

console.log(run)
console.log(run2)
