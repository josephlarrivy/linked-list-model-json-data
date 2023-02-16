class Item {
    constructor(event) {
        this.event = event;
        this.prev = null;
        this.next = null;
    }
}


class LinkedList {
    constructor(event) {
        this.head = null;
        this.tail = null;
        this.prev = null;
        this.length = 0;

        this.append(event);
    }

    /** push(event): add new value to end of list. */
    append(event) {
        let newItem = new Item(event);

        if (!this.head) {
            this.head = newItem;
            this.tail = this.head;
            this.prev = null;
        } else {
            this.tail.next = newItem;
            newItem.prev = this.tail
            this.tail = newItem;
        }
        this.length += 1;
    }

    print() {
        let current = this.head;

        while (current !== null) {
            console.log(current);
            current = current.next;
        }
    }

    // find(val) {
    //     let current = this.head;

    //     while (current !== null) {
    //         if (current.val === val) return true;

    //         current = current.next;
    //     }

    //     return false;
    // }
    
}

let list = new LinkedList({
    "indicent_number": "1",
    // "initialization_time": "date/time",
    // "nature_code": "xxx",
    // "location": {
    //     "address": {
    //         "street": "xxx",
    //         "city": "xxx",
    //         "state": "xxx",
    //         "zip": "xxx"
    //     },
    //     "point": {
    //         "latitude": "000",
    //         "longitude": "000"
    //     }
    // },
    // "outcome_status": "xxx"
})

list.append({
    "indicent_number": "2",
    // "initialization_time": "date/time",
    // "nature_code": "xxx",
    // "location": {
    //     "address": {
    //         "street": "xxx",
    //         "city": "xxx",
    //         "state": "xxx",
    //         "zip": "xxx"
    //     },
    //     "point": {
    //         "latitude": "000",
    //         "longitude": "000"
    //     }
    // },
    // "outcome_status": "xxx"
})

list.append({
    "indicent_number": "3",
    // "initialization_time": "date/time",
    // "nature_code": "xxx",
    // "location": {
    //     "address": {
    //         "street": "xxx",
    //         "city": "xxx",
    //         "state": "xxx",
    //         "zip": "xxx"
    //     },
    //     "point": {
    //         "latitude": "000",
    //         "longitude": "000"
    //     }
    // },
    // "outcome_status": "xxx"
})

list.append({
    "indicent_number": "4",
    // "initialization_time": "date/time",
    // "nature_code": "xxx",
    // "location": {
    //     "address": {
    //         "street": "xxx",
    //         "city": "xxx",
    //         "state": "xxx",
    //         "zip": "xxx"
    //     },
    //     "point": {
    //         "latitude": "000",
    //         "longitude": "000"
    //     }
    // },
    // "outcome_status": "xxx"
})



console.log(list)
// list.print()

module.exports = LinkedList;