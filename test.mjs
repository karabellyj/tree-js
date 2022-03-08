/**
 * \brief Ukázkový skript pro první projekt pøedmìtu WAP
 */

/// Vyu¾ijeme knihovnu, která je pøedmìtem zadání projektu
import { Tree } from "./tree.mjs";

/// Testovací data, samozøejmì jde jen o pøíklad a pro finální
/// hodnocení lze oèekávat vyu¾ití jiných dat
let input = [5,7,2131345646,9,4,13,12415486];

/// Knihovna musí poskytovat konstruktor Tree()
/// Tento konstruktor oèekává jediný parametr - øadící fukci, která
/// vyhodnocuje, do kterého podstromu pøidat novou hodnotu
let t = new Tree((a,b) => a < b);
/// Objekty vytvoøené konstruktorem Tree() musí implementovat metodu
/// insertValue(). Ta oèekává jediný parametr - novì pøidávanou hodnotu.
input.forEach(i => t.insertValue(i));

/// Ukázka pou¾ití knihovny:
/// Iterátorù  vrácených generátory preorder(), inorder() a postorder() je
/// mo¾né vytvoøit více, vzájemnì budou na sobì nezávislé. Pøedpokládejte,
/// ¾e v prùbìhu iterace nebudou vkládány nové prvky.
console.log("Mix 2 iterátorù")
let pre1 = t.preorder()
console.log(pre1.next().value);
console.log(pre1.next().value);
let pre2 = t.preorder()
console.log(pre2.next().value);
console.log(pre1.next().value);
console.log(pre2.next().value);
console.log(pre2.next().value);
console.log(pre1.next().value);

/// Ukázka vyu¾ití iterátoru získaného z generátoru preorder()
console.log("preorder")
for (let n of t.preorder()) {
	console.log(n);
}
/// Ukázka vyu¾ití iterátoru získaného z generátoru inorder()
console.log("inorder")
for (let n of t.inorder()) {
	console.log(n);
}
/// Ukázka vyu¾ití iterátoru získaného z generátoru postorder()
console.log("postorder")
for (let n of t.postorder()) {
	console.log(n);
}
