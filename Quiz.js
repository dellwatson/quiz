const solution = relation => {
    let answer = 0;
    let arr = []
    let saveNonKey = []

    //preventing the super key to be involved, find which column has the real super key
    for(let i = 0; i < relation[0].length; i++ ){ arr.push([]) }
    for(let i = 0; i < relation.length; i++ ){
        
        for(let j = 0; j < relation[i].length; j++ ){
            arr[j].push(relation[i][j])
        }
    }

    //checking if single row has non duplicate 
    arr.map(item => {
        let duplicate = false

        item.filter((value, index) => {
            if(item.indexOf(value) != index){
                duplicate = true
            }
        })

        duplicate ? saveNonKey.push(arr.indexOf(item)) : answer += 1
    })

    //checking for the minimal condition
    for(let i = 0; i < saveNonKey.length -1; i++) {
        for(let j = i +1; j < saveNonKey.length; j++){
            let combine = []
            let duplicate = false
            for(let k = 0; k < arr[saveNonKey[i]].length; k++) {
                combine.push(arr[saveNonKey[i]][k] + arr[saveNonKey[j]][k])
            }

            //this should be a method, to avoid DRY
            combine.filter((value, index) => {
                if(combine.indexOf(value) != index){
                    duplicate = true
                }
            })

            duplicate ? null : answer +=1
        }
    }

    return answer;
}


const relation = [
    [100,"ryan","music",2],
    [200,"apeach","math",2],
    [300,"tube","computer",3],
    [400,"con","computer",4],
    [500,"muzi","music",3],
    [600,"apeach","music",2],
]

console.log(solution(relation))