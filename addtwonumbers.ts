
  class ListNode {
      val: number
      next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
 
// - now I have 1 to 2 digits, and I want create this first digit then  to add remainder to the next addition.
    var firstNode =  new ListNode();
    var currentNode = firstNode;
    var teml1 = l1
    var teml2 = l2
    do {
        var digits : number[] =  []
        digits.push(currentNode.val ?? 0)
        digits.push(teml1?.val ?? 0)
        digits.push(teml2?.val ?? 0)
        let {digit, remainder} = addDigits(digits)
        currentNode.val = digit;
        

        let ll1 = teml1
        teml1 = ll1?.next ?? null 

        let ll2 = teml2
        teml2 = ll2?.next ?? null

        if (teml1 || teml2 || remainder > 0 ){
            var newNode = new ListNode()
            newNode.val = remainder
            
            currentNode.next = newNode
            currentNode = newNode
        }

    } while ((teml1 ?? false) || (teml2 ?? false))

  return firstNode 
};

interface DigitAndRemainder{
    digit : number
    remainder : number
}

function addDigits(values: number[] ) : DigitAndRemainder{
    var sum = values.reduce(
        (previousValue: number, currentValue: number) => previousValue + currentValue, 0
    )
        
    var digit = sum % 10
    var remainder = Math.floor(sum/10)
    return {digit, remainder}
}