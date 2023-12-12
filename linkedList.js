class Node {
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
    }
    addToTail(val){
        let currentNode=this.head;
        if(!this.head){
            this.head=new Node(val);
            return
        }
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(val);
    }
    addToHead(val){
        const newHead = new Node(val,this.head);
        console.log('newHead: ',newHead);
        this.head = newHead;
    }
    traverseAndLog(){
        let currentNode = this.head;
        let result = ""
        while(currentNode?.value){
            result +=currentNode?.value;
            if(currentNode.next){
                result += " -> "
            }
            currentNode = currentNode.next;
        }
        console.log(result)
    }
    find(term){
        let currentNode = this.head;
        let count = 1;
        while(currentNode?.value){  
            if(currentNode.value===term){
                console.log(`found ${term}, it is node number ${count}`)
                return
            } 
            count++;
            currentNode = currentNode.next;
        }
        console.log(`sorry ${term} not found`)
    }
    reverse(){
        let currentNode= this.head;
        let previousNode = null;
        let nextNode = this.head.next;
        while(currentNode){
            // nextNode = currentNode.next;
            // currentNode.next = prevNode;
            // prevNode = currentNode;
            // currentNode = nextNode;
            // nextNode = null;
            nextNode = currentNode.next;
            currentNode.next= previousNode;
            previousNode= currentNode;
            currentNode = nextNode;
            nextNode = null;
        }
        this.head=previousNode
        return this.head
    }
}

const myList = new LinkedList();
myList.addToTail("shiva")
myList.addToTail("bahamut")
myList.addToTail("arra")
myList.addToTail("joe")

myList.addToHead("Logan");
myList.addToHead("Esra");
myList.addToHead("Mo");

myList.find("joe");
myList.find("banana");

myList.traverseAndLog()
console.log('==============================')
myList.reverse();
myList.traverseAndLog();

