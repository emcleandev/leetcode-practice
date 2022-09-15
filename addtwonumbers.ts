
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

type DigitAndRemainder = {
    digit: number
    remainder: number
}
type DigitAndRemainderTuple = [number, number]

function addDigits(values: number[]): DigitAndRemainder {
    var sum = values.reduce(
        (previousValue: number, currentValue: number) => previousValue + currentValue, 0
    )

    var digit = sum % 10
    var remainder = Math.floor(sum / 10)
    return { digit, remainder }
}

function FirstaddTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    // - now I have 1 to 2 digits, and I want create this first digit then  to add remainder to the next addition.
    var firstNode = new ListNode();
    var currentNode = firstNode;

    do {
        var digits: number[] = []
        digits.push(currentNode.val ?? 0)
        digits.push(l1?.val ?? 0)
        digits.push(l2?.val ?? 0)

        let { digit, remainder } = addDigits(digits)
        currentNode.val = digit;

        l1 = l1?.next ?? null
        l2 = l2?.next ?? null

        if (l1 || l2 || remainder > 0) {
            var newNode = new ListNode()
            newNode.val = remainder

            currentNode.next = newNode
            currentNode = newNode
        }

    } while ((l1 ?? false) || (l2 ?? false))

    return firstNode
};



var addTwoNumbers = function (l1: ListNode, l2: ListNode): ListNode | null {

    let sum = 0;
    let current = new ListNode(0);
    let result = current;

    while (l1 || l2) {

        if (l1) {
            sum += l1.val;
            l1 = l1.next as ListNode;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next as ListNode;
        }

        current.next = new ListNode(sum % 10);
        current = current.next;

        sum = sum > 9 ? 1 : 0;
    }

    if (sum) {
        current.next = new ListNode(sum);
    }

    return result.next;
};
