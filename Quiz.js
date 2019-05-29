const solution = relation => {
    let answer = 0;
    /**
     * arr is a reverse given array from (relation)
     * saveNonKey is a column that surely not categorized as identical key, which means there's no uniqueness
     */
    let arr = []
    let saveNonKey = []

    if(relation.length > 20 || relation[0].length > 8){
        return "Table format is wrong, limit are 20 rows and 8 columns"
    }
    
    /**
     * finding if column is already unique and identical key
     * or super key ( the key with absolute unique for each relation and usually is an id ) 
     * 
     */
    for(let i = 0; i < relation[0].length; i++ ){ arr.push([]) }
    for(let i = 0; i < relation.length; i++ ){
        
        for(let j = 0; j < relation[i].length; j++ ){
            arr[j].push(relation[i][j])
        }
    }

    //checking if single column has a duplication
    arr.map(item => {
        let duplicate = false

        item.filter((value, index) => {
            if(item.indexOf(value) != index){
                duplicate = true
            }
        })

        duplicate ? saveNonKey.push(arr.indexOf(item)) : answer += 1
    })

    //the duplication column would be re-check to satisy the minimal condition 
    for(let i = 0; i < saveNonKey.length -1; i++) {
        for(let j = i +1; j < saveNonKey.length; j++){
            let combine = []
            let duplicate = false
            for(let k = 0; k < arr[saveNonKey[i]].length; k++) {
                combine.push(arr[saveNonKey[i]][k] + arr[saveNonKey[j]][k])
            }

            //this can be created as a method, to avoid DRY
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