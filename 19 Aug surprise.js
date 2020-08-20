//Question 1: Brackets Matching

const bracketsMatching = (brackets) => {
    let test_case = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    
    let empty_stack = []

    for(i=0; i<brackets.length; i++) {
        if(brackets.charAt(i) == '(' || brackets.charAt(i) == '{' || brackets.charAt(i) == "[") {
            empty_stack.push(brackets.charAt(i))
        }
        else if(brackets.charAt(i) == ')' || brackets.charAt(i) == '}' || brackets.charAt(i) == "]") {
            let test = test_case[brackets.charAt(i)]
            if(test == empty_stack[empty_stack.length -1]) {
                empty_stack.pop()
            }
            else if(test != empty_stack[empty_stack.length -1]) {
                let fail = "Failure at "+ (i - 1)
                return fail
            }
        }
    }
    if(empty_stack.length == 0) {
        return 'Success'
    }
}

console.log(bracketsMatching('{[()}'))
console.log(bracketsMatching('[()]{}{[()()]()}'))
console.log(bracketsMatching('(])'))

//Question 4: Max Stack

class stack {
    constructor() {
        this.data = [];
        this.maxElement = [0]
    };

    push = (num) => {
        if(this.data.length == 0) {
            this.data = [num]
        } else {
            this.data[this.data.length] = num
        }

        if(num > this.maxElement[this.maxElement.length - 1]) {
            this.maxElement[this.maxElement.length] = num
        }
    };

    pop = () => {
        if(this.data == []) {
            this.maxElement = [0]
            return 'Stack Empty'
        } else {
            if(this.data[this.data.length - 1] == this.maxElement[this.maxElement.length - 1]) {
                this.maxElement.splice(this.maxElement.length - 1, 1)
            }
            this.data.splice(this.data.length - 1, 1)
        }
    };

    max = () => {
        if(this.maxElement[this.maxElement.length-1] == 0) {
            return 'Stack Empty, and No maximum element present'
        }
        return this.maxElement[this.maxElement.length - 1]
    };

    print = () => {
        console.log(this.data)
        return this.data
        console.log('---------------------')
    }
}

let test_stack = new stack()
test_stack.push(2)
test_stack.push(3)
test_stack.push(9)
test_stack.push(7)
test_stack.push(2)
console.log(test_stack.max())
console.log(test_stack.max())
console.log(test_stack.max())
test_stack.pop()
console.log(test_stack.max())

//Question 5: Maximum in sliding window

const max_sliding_window = (integer,array,groupOf) => {
    let maxInGroup = []
    for(k=0;k<=groupOf;k++) {
        let a = k
        let subGroup = array.slice(a, a+groupOf)
        let tempMax = subGroup[0]
        for(i=0; i<subGroup.length; i++) {
            if(subGroup[i] > tempMax) {
                tempMax = subGroup[i]
            }
        }
        maxInGroup.push(tempMax)
    }
    return maxInGroup
}

console.log(max_sliding_window(8,[2,7,3,1,5,2,6,2],4))

//Question 2: Computing tree height

const compute_height = (nodes, parents) => {
    let tempArray = []
    let height = 0
    for(i=0; i<nodes; i++) {
        tempArray.push(i)
    }
    let parentChild = {}

    for(i=0;i<parents.length; i++) {
        if(parentChild.hasOwnProperty(parents[i])) {
            let dummy = parentChild[parents[i]]
            dummy.push(tempArray[i])
            parentChild[parents[i]] = dummy
        } else {
            parentChild[parents[i]] = [tempArray[i]]
        }
    }
    let objectKeys = Object.keys(parentChild)

    for(i=0; i<objectKeys.length; i++) {
        if(parentChild[objectKeys[i]]) {
            height+=1
        }
    }
    return height
}

console.log(compute_height(10,[4,-1,4,1,1]))
console.log(compute_height(5,[-1,0,4,0,3]))

