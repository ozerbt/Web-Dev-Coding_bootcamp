//come up with a dataset for a store, that uses arrays and objects in tandem.
const storeItems = [
    {
        itemId: 2342345634658,
        itemName: 'apple',
        isItemExpired: false,
        isItemDairy: true,
        itemPrice: 1,
        itemQty: 100
    },
    {
        itemId: 3240952340923,
        itemName: 'bookshelf',
        isItemDairy: false,
        isItemExpired: false,
        itemPrice: 100,
        itemQty: 2
    },
    {
        itemId: 1423140982903,
        itemName: 'milk',
        isItemExpired: true,
        isItemDairy: true,
        itemPrice: 2,
        itemQty: 200
    }
]

let dairyItem = storeItems.pop()

storeItems.unshift(dairyItem)

storeItems[0].itemName = 'watermelon'
storeItems[0].itemId = 13242435235

let hello = "hello"

let reversedhello = hello.split('').reverse().join('')