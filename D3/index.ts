type InventoryItem = { name: string; quantity: number; category: string; }; 
type Inventory = InventoryItem[]; 
type OrganizedInventory = { [category: string]: { [name: string]: number; }; };

function organizeInventory(inventory: Inventory): object {
  if (inventory.length === 0) {
    return {};
  }
  const organizedInventory: object = {}
  for (const item of inventory) {
    const { name, quantity, category } = item
    
    if (!organizedInventory[category]) {
      organizedInventory[category] = {};
    }
    
    if (!organizedInventory[category][name]) {
      organizedInventory[category][name] = 0;
    }

    organizedInventory[category][name] += quantity
  }
  
  return organizedInventory
}


const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventary))

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

console.log(organizeInventory(inventary2))

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }